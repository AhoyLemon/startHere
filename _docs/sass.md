# Sass

## Mixins
Here's some mixins you can use all over the place in your Sass. Fields with a default are marked with a colon (ex: `$align:stretch`). Fields without a colon have no default value.

### Flexbox stuff.

#### @include flex-container($direction:row, $align:stretch, $wrap:wrap);
This will create a container element with `display:flex` and the default values you want in most flex containers. If you want to change the `align-items` property, do that with the `$align` variable.

**example:** `@include flex-container()`;

---

#### @include flex-item($basis, $grow:1, $shrink:1, $alignSelf:auto);
Meant to be used on any children of `flex-container()`. If you allow the item to grow, it will, where convenient. If not, it has an explicit width.

**example:** `@include flex-item(25%,0,1);` // 25% width, but not bigger. However, smaller is okay.

---

#### @include flex-center();
Needs no variables. Creates a `flex-container()` which will vertically and horizontally center its children.

**example:** `@include flex-center()`

---

### Backgrounds

##### @include linear-gradient($direction, $fromColor, $toColor);
Creates a simple linear gradient from one color to another. Includes lots of browser vendors if you want them.

**example:** `@include flex-container(to left, $red, $blue);`

---

#### @include radial-gradient($from, $to);
Always from the center.

**example:** `@include radial-gradient(#999900, #186895);`

---

### Position

#### @include position($type, $top:null, $right:null, $bottom:null, $left:null)
This one I use constantly, just to define a shorthand to typing five different attributes. If left null, each direction will stay undefined.

**example:** `@include position(absolute,0,null,null,0)` // Position absolute, top left. (right and bottom undefined)

---

### Media Queries

### respond-to($media)
Accepts either `desktop` or `mobile` as values. Any code put inside will be media queried using your site's `$mobile-max` and `$desktop-min` values.

**example:**
```scss
@respond-to(desktop) { 
  .mobile-menu { display:none; }
  .desktop-menu { display:block; }
}
```
---

## Extends
Not quite as many of them, but still stuff I use all the time.

#### @extend %truncate;
This will tell your element not to wrap, and any text that runs too long will be cut of with an ellipsis.

---

#### @extend %commalist;
This will turn your ol or ul into a comma separated list (with and and without an oxford comma)
<ul><li>one</li><li>two</li><li>three</li><li>four</li></ul>
becomes
<strong>one, two, three and four</strong>
