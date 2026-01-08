/**
 * Pug routing configuration
 * Define mappings from Pug source files to HTML output files
 * Format: 'source/path.pug': 'output/path.html'
 * 
 * Files starting with underscore (_) are treated as partials and ignored
 * 
 * Examples:
 *   'pug/index.pug': 'index.html'                  // Root level file
 *   'pug/about.pug': 'about/index.html'            // Nested in folder
 *   'pug/contact.pug': 'contact/index.html'        // Nested in folder
 *   'pug/blog/post.pug': 'blog/post/index.html'    // Deep nesting
 */

export const routes = {
  'pug/index.pug': 'index.html',
  // Add more routes here as needed
  // 'pug/about.pug': 'about/index.html',
  // 'pug/contact.pug': 'contact/index.html',
};

export default routes;
