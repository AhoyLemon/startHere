# There are many boilerplates. This one is mine.

I never set out to create a boilerplate, but after making sites dozens of times, I realized there were familiar patterns I was reaching for, and I'd always copy that code out of my last project. The most recent time, I decided to strip everything out into a boilerplate.

## What is this?

This is the starting point that I ([Lemon](https://ahoylemon.xyz)) use every time I make a new website. It's built using my own aesthetics.

### And what aesthetics are those?

I want to have reusable components to help me make a static HTML site, and I want to do that as quickly as possible. At the same time, I _don't_ want to have a whole bunch of boilerplate stuff in the shipped code. The idea here is **only when you need it**: Making something that's slim and extendable.

This project uses npm for build tooling, with Pug for HTML templating, Sass for CSS, and TypeScript for JavaScript.

This also assumes you want to write in Vue, Sass & Pug.

### Alright, how do I get started?

1. Click [Use This Template](https://github.com/AhoyLemon/startHere/generate) to use this repo as a project template.
2. Clone your new repository locally
3. Run `npm install` to install dependencies
4. Run `npm run setup` to configure your project name and details
5. Run `npm run dev` to start the development server
6. If you see **It works.** in the middle of the screen, congratulations it's working right.

## Commands

- `npm install` - Install all dependencies
- `npm run setup` - Initial project setup (prompts for project name, URL, etc.)
- `npm run dev` - Start development server with live reload
- `npm run build` - Build all files for production
- `npm test` - Check for Sass and TypeScript errors
- `npm run build:sass` - Compile Sass only
- `npm run build:pug` - Compile Pug only
- `npm run build:ts` - Compile TypeScript only

## Fundamentals

I'll break this down into three sections, Pug, Sass, & TypeScript.

1. [Pug](_docs/pug.md)
2. [Sass](_docs/sass.md)
3. [TypeScript](_docs/js.md)

## Deploying to GitHub Pages

If you want to deploy this project to GitHub Pages, follow these steps:

1. Navigate to the `.github/workflows/` directory.
2. Rename the `static.yml.example` file to `static.yml`.
3. Commit and push the changes to your repository.
4. GitHub Actions will automatically run the workflow to deploy your site to GitHub Pages.

Make sure your repository settings are configured to use GitHub Pages, and the branch is set to `gh-pages` or the branch specified in the workflow file.