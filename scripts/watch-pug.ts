import chokidar from "chokidar";
import pug from "pug";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import routes from "../routes/pug.routes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

/**
 * Compile a single Pug file
 */
function compilePugFile(source: string, output: string): boolean {
  try {
    const sourcePath = path.resolve(projectRoot, source);
    const outputPath = path.resolve(projectRoot, output);

    if (!fs.existsSync(sourcePath)) {
      console.error(`❌ Source file not found: ${source}`);
      return false;
    }

    const html = pug.renderFile(sourcePath, {
      pretty: true,
      basedir: path.resolve(projectRoot, "pug"),
    });

    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, html);
    console.log(`✓ ${source} → ${output}`);
    return true;
  } catch (error: any) {
    console.error(`❌ Error compiling ${source}:`, error?.message ?? error);
    return false;
  }
}

/**
 * Rebuild all Pug files
 */
function rebuildAll() {
  console.log("Rebuilding all Pug files...");
  Object.entries(routes).forEach(([source, output]) => {
    compilePugFile(source, output);
  });
}

/**
 * Watch Pug files for changes
 */
function watchPug() {
  console.log("Watching Pug files for changes...");

  // Initial build
  rebuildAll();

  // Watch all .pug files
  const watcher = chokidar.watch("pug/**/*.pug", {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
    cwd: projectRoot,
  });

  watcher.on("change", (filePath) => {
    console.log(`\n🔄 File changed: ${filePath}`);

    // If it's a partial (starts with _), rebuild all files
    const fileName = path.basename(filePath);
    if (fileName.startsWith("_")) {
      console.log("Partial file changed, rebuilding all...");
      rebuildAll();
    } else {
      // Otherwise, find and rebuild the specific file
      const normalizedPath = filePath.replace(/\\/g, "/");
      const matchingRoute = Object.entries(routes).find(
        ([source]) => source.replace(/\\/g, "/") === normalizedPath,
      );

      if (matchingRoute) {
        const [source, output] = matchingRoute;
        compilePugFile(source, output);
      } else {
        console.log("File not in routes, rebuilding all to be safe...");
        rebuildAll();
      }
    }
  });

  watcher.on("add", (filePath) => {
    console.log(`\n➕ File added: ${filePath}`);
    rebuildAll();
  });

  watcher.on("unlink", (filePath) => {
    console.log(`\n➖ File removed: ${filePath}`);
    rebuildAll();
  });

  console.log("\n👀 Watching for changes... (Press Ctrl+C to stop)\n");
}

watchPug();
