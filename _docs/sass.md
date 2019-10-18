#  Sass
This project uses [Sass](https://sass-lang.com/) for creating all styles. I like Sass a lot. Imports, nesting, mixins and extends are all fundamental concepts that I really enjoy having. I do like Stylus as well, but the syntax is incompatible with the way I want to write CSS so it's a non starter.

## Okay, how's it work?

`site.scss` serves as your master record of imports. First it imports globals...
1. Eric Meyer's [Reset CSS]([https://meyerweb.com/eric/tools/css/reset/)
2. Some generic variables
3. Some generic mixins
4. Some generic extends

... then it imports your site specific stuff from the `partials` folder. If you want to add css libraries as well (Dan Eden's [animate.css](https://daneden.github.io/animate.css/) provided here as an example), do that as well.

Everything will then compile into `css/site.css`

I'll explain some of the global mixins and extends here....

##  Mixins

Here's some mixins you can use all over the place in your Sass. Fields with a default are marked with a colon (ex: `$align:stretch`). Fields without a colon have no default value.  

####  @include flex-container($direction:row, $align:stretch, $wrap:wrap)
This will create a container element with `display:flex` and the default values you want in most flex containers. If you want to change the `align-items` property, do that with the `$align` variable.

**example:**  
```scss
@include flex-container();
```

---
####  @include flex-item($basis, $grow:1, $shrink:1, $alignSelf:auto);
Meant to be used on any children of `flex-container()`. If you allow the item to grow, it will, where convenient. If not, it has an explicit width.

**example:**
```scss
@include flex-item(25%,0,1);
// 25% width, but not bigger. However, smaller is okay.
```

---
####  @include flex-center();
Needs no variables. Creates a `flex-container()` which will vertically and horizontally center its children.

**example:**
```scss
@include flex-center();
```

---
####  @include linear-gradient($direction, $fromColor, $toColor);
Creates a simple linear gradient from one color to another. Includes lots of browser vendors if you want them.

**example:**
```scss
@include flex-container(to right, $red, $blue);
// gradient goes from your red color (left side) to your blue color (right side)
```

---
####  @include radial-gradient($from, $to);
Always from the center in this case.

**example:**
```scss
@include radial-gradient(#999900, #186895);
```

---
####  @include position($type, $top:null, $right:null, $bottom:null, $left:null)
This one I use constantly, just to define a shorthand to typing five different attributes. If left null, each direction will stay undefined.

**example:**  
```scss
@include position(absolute,0,null,null,0);
// absolute box at the top left, right and bottom are undefined.
```

---

####  inner($width:$max-width,$padding:20px)

I usee this as an easy way to define a centered internal column that will shrink on lower resolutions (for example, a box that's 1200 pixels wide, and centered on the screen, but if your browser is smaller than that, it will be 100% of the screen with padding on the side). This doesn't *need* arguments. If no arguments are given, this will assume whatever is defined as `$max-width` in your project, and 20 pixels on the left and right side.

**example:**
```scss
@include inner()
```

---

####  respond-to($media)

Accepts either `desktop` or `mobile` as values. Any code put inside will be media queried using your site's `$mobile-max` and `$desktop-min` values.

**example:**
```scss
@respond-to(desktop) {
  .mobile-menu  {  display:none;  }
  .desktop-menu  {  display:block;  }
}
```

---

  

##  Extends
Not quite as many of them, but still stuff I use all the time.

####  %truncate;
This will tell your element not to wrap, and any text that runs too long will be cut of with an ellipsis.
```scss
@extend %truncate;
```

---
####  @extend %commalist;
This will turn your ol or ul into a comma separated list (with the word "and" and without an oxford comma). So the markup for 

<ul><li>one</li><li>two</li><li>three</li><li>four</li></ul>
becomes

<strong>one, two, three and four</strong>
```scss
@extend %commalist;
```
