import pug from 'pug';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from '../pug.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

/**
 * Build all Pug files according to the routing configuration
 */
function buildPug() {
  console.log('Building Pug files...');
  
  let successCount = 0;
  let errorCount = 0;

  Object.entries(routes).forEach(([source, output]) => {
    try {
      const sourcePath = path.resolve(projectRoot, source);
      const outputPath = path.resolve(projectRoot, output);
      
      // Check if source file exists
      if (!fs.existsSync(sourcePath)) {
        console.error(`❌ Source file not found: ${source}`);
        errorCount++;
        return;
      }

      // Compile Pug to HTML
      const html = pug.renderFile(sourcePath, {
        pretty: true,
        basedir: path.resolve(projectRoot, 'pug')
      });

      // Ensure output directory exists
      const outputDir = path.dirname(outputPath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Write HTML file
      fs.writeFileSync(outputPath, html);
      console.log(`✓ ${source} → ${output}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Error compiling ${source}:`, error.message);
      errorCount++;
    }
  });

  console.log(`\n✨ Build complete: ${successCount} successful, ${errorCount} failed`);
  
  if (errorCount > 0) {
    process.exit(1);
  }
}

buildPug();
