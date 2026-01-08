# Pug Routing Configuration

This document explains how Pug templates are compiled into HTML files and how to configure routing for your project.

## Overview

This configuration file defines how Pug templates are compiled to HTML files. It gives you complete control over your site's URL structure.

**IMPORTANT:** This is a build-time configuration file. It should NOT be deployed to production as it's only used during development and build processes.

## How It Works

Each route maps a source Pug file to an output HTML file:

```
'pug/source.pug' => 'output.html'
```

## Route Types

1. **Root-level pages:**
   - `'pug/index.pug': 'index.html'`
   - Creates: `/index.html` (accessible at `/`)

2. **Nested pages (SEO-friendly URLs):**
   - `'pug/about.pug': 'about/index.html'`
   - Creates: `/about/index.html` (accessible at `/about/`)

3. **Deep nesting:**
   - `'pug/blog/post.pug': 'blog/post/index.html'`
   - Creates: `/blog/post/index.html` (accessible at `/blog/post/`)

4. **Custom structures:**
   - `'pug/contact.pug': 'get-in-touch.html'`
   - Creates: `/get-in-touch.html` (accessible at `/get-in-touch.html`)

## Partial Files

Files starting with underscore (`_`) are automatically treated as partials and do NOT need routes. They're meant to be included in other templates.

Examples: `_head.pug`, `_footer.pug`, `_mixins.pug`

## Adding New Pages

1. Create your Pug file (e.g., `pug/services.pug`)
2. Add a route in the configuration file
3. Run `npm run dev` or `npm run build`
4. Your HTML will be generated automatically

## Best Practices

- Use `index.html` for folder-based routing (`/about/` instead of `/about.html`)
- Keep route keys relative to the project root
- Keep output paths relative to the project root
- Comment out unused routes instead of deleting them
- Group related routes together for clarity