# Sass Mixins

Here's some mixins you can use all over the place in your Sass. Fields with a default are marked with a colon (ex: `$align:stretch`). Fields without a colon have no default value.

1. **@include flex-container($direction:row, $align:stretch, $wrap:wrap);**
This will create a container element with `display:flex` and the default values you want in most flex containers. If you want to change the `align-items` property, do that with the `$align` variable.
**example:** `@include flex-container()`;

2. **@include flex-item($basis, $grow:1, $shrink:1, $alignSelf:auto);**
Meant to be used on any children of `flex-container()`. If you allow the item to grow, it will, where convenient. If not, it has an explicit width.
**example:** `@include flex-item(25%,0,1);` // 25% width, but not bigger. However, smaller is okay.
3. **@include linear-gradient($direction, $fromColor, $toColor);**
Creates a simple linear gradient from one color to another. Includes lots of browser vendors if you want them.
**example:** `@include flex-container(to left, $red, $blue);`

