/**
 * Pug Routing Configuration
 * ===========================
 *
 * This file defines how Pug templates are compiled to HTML files.
 * It gives you complete control over your site's URL structure.
 *
 * IMPORTANT: This is a build-time configuration file. It should NOT be deployed
 * to production as it's only used during development and build processes.
 *
 *
 * How It Works
 * ------------
 * Each route maps a source Pug file to an output HTML file:
 *
 *   'src/pug/source.pug' => 'output.html'
 *
 *
 * Route Types
 * -----------
 *
 * 1. Root-level pages:
 *    'src/pug/index.pug': 'index.html'
 *    Creates: /index.html (accessible at /)
 *
 * 2. Nested pages (SEO-friendly URLs):
 *    'src/pug/about.pug': 'about/index.html'
 *    Creates: /about/index.html (accessible at /about/)
 *
 * 3. Deep nesting:
 *    'src/pug/blog/post.pug': 'blog/post/index.html'
 *    Creates: /blog/post/index.html (accessible at /blog/post/)
 *
 * 4. Custom structures:
 *    'src/pug/contact.pug': 'get-in-touch.html'
 *    Creates: /get-in-touch.html (accessible at /get-in-touch.html)
 *
 *
 * Partial Files
 * -------------
 * Files starting with underscore (_) are automatically treated as partials
 * and do NOT need routes. They're meant to be included in other templates.
 *
 * Examples: _head.pug, _footer.pug, _mixins.pug
 *
 *
 * Adding New Pages
 * ----------------
 * 1. Create your Pug file (e.g., src/pug/services.pug)
 * 2. Add a route below
 * 3. Run `npm run dev` or `npm run build`
 * 4. Your HTML will be generated automatically
 *
 *
 * Best Practices
 * --------------
 * - Use index.html for folder-based routing (/about/ instead of /about.html)
 * - Keep route keys relative to project root
 * - Keep output paths relative to project root
 * - Comment out unused routes instead of deleting them
 * - Group related routes together for clarity
 */

export interface RouteMap {
  [key: string]: string;
}

export const routes: RouteMap = {
  // Main pages
  "src/pug/index.pug": "index.html",

  // Add more routes here as you create new pages
  // 'src/pug/about.pug': 'about/index.html',
  // 'src/pug/contact.pug': 'contact/index.html',
  // 'src/pug/services.pug': 'services/index.html',

  // Blog or content pages
  // 'src/pug/blog/index.pug': 'blog/index.html',
  // 'src/pug/blog/post-template.pug': 'blog/post/index.html',

  // Special pages
  // 'src/pug/404.pug': '404.html',
  // 'src/pug/sitemap.pug': 'sitemap.xml',
};

export default routes;
