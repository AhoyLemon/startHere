#  Sass
This project uses [Sass](https://sass-lang.com/) for creating all styles. I like Sass a lot. The modern @use syntax, nesting, mixins and extends are all fundamental concepts that I really enjoy having. I do like Stylus as well, but the syntax is incompatible with the way I want to write CSS so it's a non starter.

## Okay, how's it work?

`site.scss` serves as your master record of imports. It uses the modern `@use` syntax instead of the deprecated `@import`. First it imports globals...
1. Eric Meyer's [Reset CSS](https://meyerweb.com/eric/tools/css/reset/)
2. Some generic variables
3. Some generic mixins
4. Some generic extends

... then it imports your site specific stuff from the `partials` folder. If you want to add css libraries as well (Dan Eden's [animate.css](https://daneden.github.io/animate.css/) provided here as an example), do that as well.

Everything will then compile into `css/site.css`

### Using @use instead of @import

This project uses the modern Sass `@use` syntax. When you need to reference variables or mixins from another file, you need to namespace them:

```scss
@use "abstracts/variables" as vars;
@use "abstracts/mixins" as mix;

body {
  background: vars.$body;
  @include mix.flex-container();
}
```

I'll explain some of the global mixins and extends here....

##  Mixins

Here's some mixins you can use all over the place in your Sass. To use them, import with `@use "abstracts/mixins" as mix;` and then call with `@include mix.mixin-name()`. Fields with a default are marked with a colon (ex: `$align:stretch`). Fields without a colon have no default value.  

####  @include mix.flex-container($direction:row, $align:stretch, $wrap:wrap)
This will create a container element with `display:flex` and the default values you want in most flex containers. If you want to change the `align-items` property, do that with the `$align` variable.

**example:**  
```scss
@use "abstracts/mixins" as mix;

.container {
  @include mix.flex-container();
}
```

---
####  @include mix.flex-item($basis, $grow:1, $shrink:1, $alignSelf:auto);
Meant to be used on any children of `flex-container()`. If you allow the item to grow, it will, where convenient. If not, it has an explicit width.

**example:**
```scss
@include mix.flex-item(25%,0,1);
// 25% width, but not bigger. However, smaller is okay.
```

---
####  @include mix.flex-center();
Needs no variables. Creates a `flex-container()` which will vertically and horizontally center its children.

**example:**
```scss
@include mix.flex-center();
```


---
####  @include mix.position($type, $top:null, $right:null, $bottom:null, $left:null)
This one I use constantly, just to define a shorthand to typing five different attributes. If left null, each direction will stay undefined.

**example:**  
```scss
@include mix.position(absolute,0,null,null,0);
// absolute box at the top left, right and bottom are undefined.
```

---

####  mix.inner($width:$max-width,$padding:20px)

I use this as an easy way to define a centered internal column that will shrink on lower resolutions (for example, a box that's 1200 pixels wide, and centered on the screen, but if your browser is smaller than that, it will be 100% of the screen with padding on the side). This doesn't *need* arguments. If no arguments are given, this will assume whatever is defined as `$max-width` in your project, and 20 pixels on the left and right side.

**example:**
```scss
@include mix.inner();
```

---

####  mix.respond-to($media)

Accepts either `desktop` or `mobile` as values. Any code put inside will be media queried using your site's `$mobile-max` and `$desktop-min` values.

**example:**
```scss
@use "abstracts/mixins" as mix;

@include mix.respond-to(desktop) {
  .mobile-menu   {  display:none;  }
  .desktop-menu  {  display:block; }
}
```

---

  

##  Extends
Not quite as many of them, but still stuff I use all the time. To use extends, you need to `@use "abstracts/extends";` in your file.

#### %clearfix
Got a `float:left;` or a `float:right` element? Then you'll want this on the container.

```scss
@use "abstracts/extends";

.container { 
  @extend extends.clearfix;
  
  .floating-thing { float:left; }
}
```
... this will prevent your floating thing from screwing up your box.

####  %truncate
This will tell your element not to wrap, and any text that runs too long will be cut of with an ellipsis.
```scss
@extend %truncate;
```

---
####  %commalist
This will turn your ol or ul into a comma separated list (with the word "and" and without an oxford comma). So markup like...

```html
<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
  <li>four</li>
</ul>
```
will look like....

> <strong>one, two, three and four</strong>

```scss
@extend %commalist;
```
