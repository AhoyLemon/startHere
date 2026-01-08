import prompts from "prompts";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

/**
 * Setup script that runs on first use
 * Prompts user for project name and updates relevant files
 */
async function setup() {
  console.log(`
╭───────────────────────────────────────────────────╮
│ 🍋 Lemon's startHere — Project Setup              │
├───────────────────────────────────────────────────┤
│ 🚀 Creating a new project from the template...    │
╰───────────────────────────────────────────────────╯
`);

  const response = await prompts([
    {
      type: "text",
      name: "projectName",
      message: "What is the name of your project?",
      initial: "my-new-project",
      validate: (value: any) =>
        value.length > 0 ? true : "Project name is required",
    },
    {
      type: "text",
      name: "projectDescription",
      message: "Project description (optional):",
      initial: "",
    },
    {
      type: "text",
      name: "siteUrl",
      message: "Site URL (optional, e.g., https://example.com):",
      initial: "",
    },
  ]);

  if (!response.projectName) {
    console.log("\n❌ Setup cancelled.");
    process.exit(0);
  }

  console.log("\n📝 Updating project files...");

  // Update package.json
  try {
    const packageJsonPath = path.join(projectRoot, "package.json");
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

    packageJson.name = response.projectName.toLowerCase().replace(/\s+/g, "-");
    if (response.projectDescription) {
      packageJson.description = response.projectDescription;
    }

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log("✓ Updated package.json");
  } catch (error) {
    console.error("❌ Error updating package.json:", (error as any).message);
  }

  // Update Pug variables
  try {
    const pugVarsPath = path.join(
      projectRoot,
      "pug",
      "partials",
      "_variables.pug",
    );
    let pugVars = fs.readFileSync(pugVarsPath, "utf8");

    // Update site title
    pugVars = pugVars.replace(
      /- const siteTitle = ".*"/,
      `- const siteTitle = "${response.projectName}"`,
    );

    // Update site URL if provided
    if (response.siteUrl) {
      pugVars = pugVars.replace(
        /- const siteURL = ".*"/,
        `- const siteURL = "${response.siteUrl}"`,
      );
    }

    // Update description if provided
    if (response.projectDescription) {
      pugVars = pugVars.replace(
        /- const description = ".*"/,
        `- const description = "${response.projectDescription}"`,
      );
    }

    fs.writeFileSync(pugVarsPath, pugVars);
    console.log("✓ Updated Pug variables");
  } catch (error) {
    console.error("❌ Error updating Pug variables:", (error as any).message);
  }

  // Update TypeScript variables
  try {
    const tsVarsPath = path.join(
      projectRoot,
      "ts",
      "partials",
      "_variables.ts",
    );
    let tsVars = fs.readFileSync(tsVarsPath, "utf8");

    if (response.siteUrl) {
      tsVars = tsVars.replace(
        /export const siteURL = ".*";/,
        `export const siteURL = "${response.siteUrl}";`,
      );
    }

    fs.writeFileSync(tsVarsPath, tsVars);
    console.log("✓ Updated TypeScript variables");
  } catch (error) {
    console.error("❌ Error updating TypeScript variables:", (error as any).message);
  }

  console.log("\n✨ Setup complete! Your project is ready to go.");
  console.log("\n📦 Next steps:");
  console.log("   npm install          - Install dependencies");
  console.log("   npm run dev          - Start development server");
  console.log("   npm run build        - Build for production");
  console.log("   npm test             - Check for errors\n");
}

setup().catch((error) => {
  console.error("Setup error:", error);
  process.exit(1);
});
