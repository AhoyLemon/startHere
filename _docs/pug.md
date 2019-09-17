# Pug
This uses [pug]([https://pugjs.org/api/getting-started.html](https://pugjs.org/api/getting-started.html)) for generating all HTML. I like Pug a lot, because I can do complicated stuff like buildtime rendering, imports, mixins, loops and conditions while *still* ending up with static HTML files.

**Why not HAML?** I know HAML is more popular. I personally like the syntax of pug a little bit better and prefer to use that. Honeslty, you could convert this shit to HAML in like 5 minutes if you really felt like it.

## Okay, how's it work?

`index.pug` serves as your main file. It imports in a couple of partials and then renders whatever you put in `main`. If you want to make additional pages, import at will from there.

### variables
* `siteTitle` is the name of your site. This will affect several things. If you have both a page and site title defined, it will render as page | site, otherwise it'll just display site tile
* `siteURL` is the base url, ex "https://damn.dog"
* `description` is the site description. This will serve in the meta description field, as well as the description of Twitter and Opengraph stuff, if applicable.
* `testing` is a flag for if you're currently in development or not. If you're *not*, the site will serve minified javascript.
* `d` and `lastUpdated` serve as cachebusters. The point here is that every time you rebuild the pug, it will force a refresh of all your site-specific javascript and css files. Great for easy deployement.
* `pageTitle` should be defined individually on each page, if it's a multipage site. If not, just leave it as null.

### partials
I'm including in this a number of partials, but out of the box, your page will import four.

* **_variables** includes all the variables mentioned above. Add your own if you like.
* **_mixins** contains just a few global mixins I've used cross-project. I find I build mixins on a per-site basis and include them here.
* **_head** gives you some generic stuff you probably want, like the utf charset, css href, viewport meta and site description.  It also has a commented bit for Favicon, Social Media meta and Schema. You can use this as a reference point, but you'll want to edit files first.
* **_javascripts** happen last on the page, imported in order in a single div right before the close of the body tag.