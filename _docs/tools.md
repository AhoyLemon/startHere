# Development Tools & Extensions

This project uses several tools to make development smoother and more enjoyable. Here's what they do and how to set them up.

## VS Code Extensions (Recommended)

### Prettier - Code Formatter

**What it does:** Automatically formats your code (HTML, CSS, JavaScript, TypeScript, Pug, etc.) to maintain consistent style.

**Why you want it:** Never worry about formatting again. It handles indentation, line length, quotes, semicolons, and more.

**How to install:**

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Prettier - Code formatter"
4. Click Install

**Setup (Format on Save):**

1. Open VS Code Settings (Ctrl+, / Cmd+,)
2. Search for "format on save"
3. Check the box for "Editor: Format On Save"
4. Search for "default formatter"
5. Select "Prettier - Code formatter"

**Optional:** Create a `.prettierrc` file in your project root to customize formatting rules:

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "useTabs": false
}
```

### Pug (formerly Jade)

**What it does:** Syntax highlighting and snippets for Pug templates.

**How to install:**

1. Extensions → Search "Pug" or "Jade"
2. Install "Pug beautify" by mrmlnc (recommended)

### TypeScript

**Built-in:** VS Code has excellent TypeScript support out of the box. No extension needed!

### ESLint

**What it does:** Helps you find and fix problems in your JavaScript and TypeScript code.

**Why you want it:** Ensures your code follows best practices and avoids common bugs.

**How to install:**

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "ESLint"
4. Click Install

**Setup:**

1. Create an `.eslintrc.json` file in your project root to configure rules.
2. Install the necessary dependencies for your project (e.g., `eslint`, `eslint-config-airbnb`, etc.).

### Indent Rainbow

**What it does:** Highlights indentation levels with different colors.

**Why you want it:** Makes it easier to spot indentation errors, especially in deeply nested code.

**How to install:**

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Indent Rainbow"
4. Click Install

---

## Development Dependencies

These are automatically installed when you run `npm install`. You don't need to do anything, but here's what they do:

### BrowserSync

**What it does:** Creates a local development server with live reload. When you save a file, your browser automatically refreshes to show changes.

**Features:**

- Live reload when files change
- Synchronized scrolling across devices
- Network access for testing on phones/tablets
- UI dashboard for debugging (default: http://localhost:3001)

**In this project:** Runs automatically with `npm run dev`

**URLs provided:**

- **Local:** http://localhost:3000 (your site)
- **UI:** http://localhost:3001 (BrowserSync control panel)
- **Network:** Also shows external URL for testing on other devices

### tsx

**What it does:** Runs TypeScript files directly without pre-compiling. Think of it as "node but for TypeScript."

**In this project:** Powers all our build scripts (`scripts/*.ts`)

**Why it's great:** We can write build tools in TypeScript with full type safety!

### Sass (Dart Sass)

**What it does:** Compiles your modern Sass/SCSS to CSS.

**In this project:** Compiles `scss/site.scss` → `css/site.css`

**Features:**

- Modern @use and @forward syntax
- Fast compilation
- Watch mode (rebuilds on file changes)

### TypeScript Compiler (tsc)

**What it does:** Compiles TypeScript to JavaScript and type-checks your code.

**In this project:** Compiles `ts/**/*.ts` → `js/min/**/*.js`

**Features:**

- Type checking
- ES Modules output
- Source maps for debugging
- Watch mode

### Pug

**What it does:** Compiles Pug templates to HTML.

**In this project:** Uses our custom build script to compile based on `routes/pug.routes.ts`

**Why Pug?**

- Clean syntax (no closing tags!)
- Variables and logic at build time
- Reusable components via includes/mixins
- Outputs static HTML (no runtime overhead)

### Chokidar

**What it does:** File watcher that monitors your Pug files for changes.

**In this project:** Powers the Pug watch script to rebuild when you save .pug files

### Ora

**What it does:** Creates those nice spinning loading indicators in the terminal.

**In this project:** Shows loading state when starting `npm run dev`

### Chalk

**What it does:** Adds colors to terminal output.

**In this project:** Makes the dev server display pretty with colored URLs and status messages

**Example:** 🍋 project name in yellow, URLs in cyan, etc.

### Concurrently

**What it does:** Runs multiple npm scripts at the same time.

**In this project:** Not currently used directly, but available if you want to run commands in parallel.

---

## Optional VS Code Extensions

### EditorConfig

Helps maintain consistent coding styles across different editors.

**Install:** Search "EditorConfig for VS Code"

Create `.editorconfig` in your project root:

```ini
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

### Error Lens

Shows errors and warnings inline in your code (super helpful for TypeScript).

**Install:** Search "Error Lens"

### Auto Rename Tag

Automatically renames paired HTML/XML tags.

**Install:** Search "Auto Rename Tag"

---

## Testing Your Setup

After installing Prettier:

1. Open any `.ts`, `.scss`, or `.pug` file
2. Mess up the formatting (add random spaces, wrong indentation)
3. Save the file (Ctrl+S / Cmd+S)
4. Watch it auto-format! ✨

For BrowserSync:

1. Run `npm run dev`
2. Wait for the 🍋 display
3. Open http://localhost:3000 in your browser
4. Edit any file and save
5. Watch your browser auto-reload!

---

## Troubleshooting

**Prettier not formatting:**

- Check that it's set as your default formatter
- Check that "Format On Save" is enabled
- Some file types might need language-specific settings

**BrowserSync not reloading:**

- Check that files are actually being compiled (watch terminal output)
- Make sure you're on http://localhost:3000 (not a file:// URL)
- Try hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

**TypeScript errors everywhere:**

- Run `npm install` to ensure dependencies are installed
- Run `npm test` to see actual errors
- Check that your IDE recognizes `tsconfig.json`

---

## Learn More

- [Prettier Documentation](https://prettier.io/docs/en/)
- [BrowserSync Documentation](https://browsersync.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Sass Documentation](https://sass-lang.com/documentation/)
- [Pug Documentation](https://pugjs.org/)
