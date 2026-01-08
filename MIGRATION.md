# Migration Guide: Prepros to npm

This guide explains the changes made when migrating from Prepros to npm-based tooling.

## What Changed

### 1. Build System

- **Before:** Prepros handled compilation
- **After:** npm scripts handle all builds
- **Action:** Run `npm install` to get dependencies

### 2. Sass (@import → @use)

- **Before:** Used `@import` for Sass files
- **After:** Uses modern `@use` syntax with namespaces
- **Action:** When adding new Sass, use:

  ```scss
  @use "abstracts/variables" as vars;
  @use "abstracts/mixins" as mix;

  body {
    background: vars.$body;
    @include mix.flex-container();
  }
  ```

### 3. JavaScript → TypeScript

- **Before:** JavaScript with Prepros concatenation
- **After:** TypeScript with ES6 modules
- **Action:** Write TypeScript in `ts/` folder, it compiles to `js/min/`
  ```typescript
  import { randomNumber } from "./globals/_functions.js";
  ```

### 4. Pug Routing

- **Before:** All .pug files compiled automatically
- **After:** Routes defined in `pug.routes.js`
- **Action:** Add new pages to the routes file:
  ```javascript
  export const routes = {
    "pug/index.pug": "index.html",
    "pug/about.pug": "about/index.html",
  };
  ```

### 5. Setup Script

- **New Feature:** Run `npm run setup` when creating a new project
- **Action:** This prompts for project name, URL, and description

## New Commands

```bash
# Install dependencies (first time only)
npm install

# Setup new project (prompts for details)
npm run setup

# Development (watches all files, live reload)
npm run dev

# Build everything
npm run build

# Test for errors (doesn't build)
npm test

# Build individual parts
npm run build:sass
npm run build:pug
npm run build:ts
```

## File Structure Changes

### Added

- `package.json` - npm configuration
- `tsconfig.json` - TypeScript configuration
- `pug.routes.js` - Pug routing configuration
- `scripts/` - Build and setup scripts
- `ts/` - TypeScript source files
- `.gitignore` - Git ignore file

### Removed

- `prepros.config` - No longer needed
- `prepros-6.config` - No longer needed
- `js/` - Replaced by `ts/` (output goes to `js/min/`)

### Modified

- `scss/site.scss` - Now uses `@use` instead of `@import`
- All SCSS files with variables - Use namespaced access
- `pug/partials/_javascripts.pug` - Loads module script
- All documentation files

## Common Tasks

### Adding a New Page

1. Create `pug/newpage.pug`
2. Add to `pug.routes.js`:
   ```javascript
   'pug/newpage.pug': 'newpage/index.html'
   ```
3. Build or watch to generate HTML

### Adding TypeScript Code

1. Create `.ts` file in `ts/` folder
2. Import where needed:
   ```typescript
   import { myFunction } from "./myfile.js";
   ```
3. Build or watch to compile

### Using Sass Variables

```scss
@use "abstracts/variables" as vars;

.my-class {
  color: vars.$link;
  background: vars.$body;
}
```

### Using Sass Mixins

```scss
@use "abstracts/mixins" as mix;

.container {
  @include mix.flex-container();
  @include mix.inner();
}
```

## Troubleshooting

**Error: Cannot find module**

- Run `npm install` to install dependencies

**Sass compilation error about undefined variables**

- Make sure you're using `@use` with proper namespace
- Example: `vars.$variable-name` not `$variable-name`

**Pug file not compiling**

- Check that it's listed in `pug.routes.js`
- Partial files (starting with \_) don't need routes

**TypeScript errors**

- Run `npm test` to see all errors
- Check that imports end with `.js` (not `.ts`)

## Benefits of This Migration

1. **Modern Standards:** Uses current best practices (@use, ES modules)
2. **Type Safety:** TypeScript catches errors before runtime
3. **Better Control:** Explicit routing for Pug files
4. **No GUI Required:** Everything via command line/npm
5. **Better for Teams:** All config in version control
6. **CI/CD Ready:** Easy to automate builds
