# There are many boilerplates. This one is mine.

## What is this?
This is the starting point that I ([Lemon](https://ahoylemon.xyz)) use every time I make a new website. It's built using my own aesthetics.

### And what aesthetics are those?
I want to have reusable components to help me make a static HTML site, and I want to do that as quicky as possible. At the same time, I *don't* want to have a whole bunch of boilerplate stuff in the shipped code. The idea here is to to have something that's slim and extendable.

Also you'll need [Prepros](https://prepros.io/). I'm a fan, and I avoid NPM whenever I can, so this uses Prepros. 

This also assumes you want to write in Vue, Sass & Pug.

### Alright, how do I get started?
Clone this repo and add the site folder to Prepros. hit the globe button in the top right to serve your page. If you see `It works.`, congratulations it's working.

## Fundamentals
I'll break this down into three sections, Pug, Vue and Sass.

### Pug

`index.pug` serves as your main file. It imports in a couple of partials and then renders whatever you put in `main`.

At the top of the page you'll see a couple of variables.

* `testing` is a flag for if you're currently in development or not. If you're _not_, the site will serve minified javascript.
* `siteTitle` is the base title for your page, ex "damn dog"
* `siteURL` is the base url, ex "https://damn.dog"
* `description` is the site description. This will serve in the meta description field, as well as the description of Twitter and Opengraph stuff, if applicable.
* `d` and `lastUpdated` serve as cachebusters. The point here is that every time you rebuild the pug, it will force a refresh of all your site-specific javascript and css files. Great for easy deployement.

Then there's some general use pug mixins, some head stuff, and javascript at the bottom. All of these should be (hopefully) able to suss out by viewing each file in the `pug/partials/` folder.

### Sass

The `scss` folder has three folders: `globals`, `libraries`, and `partials`, plus a `site.scss` file to import just the stuff you want.

* `globals` should never change. These are global defaults that carry from project to project.
* `libaries` were written by someone else. Specifically in this case we're just putting [animate.css](https://daneden.github.io/animate.css/) in there, but you can add whatever you want. The idea here is that these libraries can add a lot to the overhead so we're only going to impoprt the ones you need for this specific site.
* `partials` is where you'll be working most of the time. Change, add and redefine stuff in this folder, then play with `site.scss` to import all the files you want.

