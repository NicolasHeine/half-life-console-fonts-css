# Half-Life Console CSS Font

<img alt="Font specimen" src="https://github.com/NicolasHeine/Half-Life-Console-Fonts-CSS/blob/master/img/fonts.jpg?raw=true" />

> A CSS project by [Nicolas Heine](http:www.nicolasheine.fr)

I ❤️ CSS, you can follow me on [Codepen](https://codepen.io/nicolasheine/)

> Highly inspired by [CSSans Pro](https://github.com/ZeroSpree/CSSans.Pro) (by [Andronache Izabela](https://www.instagram.com/izadraws/) and [Codrin Pavel](https://twitter.com/zerospree))

## Table of Contents

* [Overview](#overview) - all characters & CSS classes
* [Quick start - JSless](#quick-start---jsless)
* [Quick start with Javascript](#quick-start-with-javascript) - Let JS do the writing
* [Options](#options)
  * [Colors](#colors)
  * [Dimensions](#dimensions)
  * [Word spacing](#word-spacing)
  * [Letter spacing](#letter-spacing)
  * [Line spacing](#line-height)
  * [Align text](#align-text)
* [Accessibility](#accessibility) - Don't forget it
* [TODO List](#todo)

## Overview

#### Uppercase
* A - Z `<b class="h-l2:LETTER"></b>`

#### Lowercase
* a - z `<b class="h-l2:letter"></b>`

#### Numbers
* 0 - 9 `<b class="h-l2:NUMBER"></b>`

#### Symbols
* .:,';()!?+-\*/=[] `<b class="h-l2:CHARACTER"></b>`

## Quick start - JSless

Download the minify version of CSS of the font you want from the repo:
* [`/dist/css/`](https://github.com/NicolasHeine/Half-Life-Console-Fonts-CSS/tree/master/dist/css)

### How to use

```html
<div class="h-l1">
  <span class="h-l1__accessible">Hello World!</span>
  <span class="h-l1__word">
    <b class="h-l1:H"></b>
    <b class="h-l1:e"></b>
    <b class="h-l1:l"></b>
    <b class="h-l1:l"></b>
    <b class="h-l1:o"></b>
  </span>
  <span class="h-l1__word">
    <b class="h-l1:W"></b>
    <b class="h-l1:o"></b>
    <b class="h-l1:r"></b>
    <b class="h-l1:l"></b>
    <b class="h-l1:d"></b>
    <b class="h-l1:!"></b>
  </span>
</div>
```

> If you want to use the font 2, just replace `h-l1` by `h-l2`.

## Quick start with Javascript

Download the minify version of CSS (like we saw [before](#quick-start---jsless)) + download the minify version of Javascript:
* [`/dist/js/`](https://github.com/NicolasHeine/Half-Life-Console-Fonts-CSS/tree/master/dist/js)

> Like for the CSS, choose the font you want!

### How to use

Use the main class of the font to choose which text should be transform:
```html
<div class="h-l1">Hello World!</div>
```

The script will automaticly transform it like we saw [before](#quick-start---jsless).

## Options

Each fonts have multiple settings.

> You can change the prefix from `h-l1` to `h-l2` for the second font.

### Colors
```
--h-l1-color: black;
```

### Dimensions
```
--h-l1-height: 4px;
--h-l1-width: 4px;
```

> This is the size of 1 tile of background-shadow.

There is 7 differents sizes available, you can change the size by using one of these classes:

```
.h-l1--xxs (1w - 1h)
.h-l1--xs (2w - 2h)
.h-l1--s (3w - 3h)
.h-l1--m (4w - 4h) Default
.h-l1--l (5w - 6h)
.h-l1--xl (5w - 7h)
.h-l1--xxl (5w - 8h)
```

### Word spacing
```
--h-l1-word-spacing: calc(2 * var(--h-l1-width));
```

### Letter spacing
```
--h-l1-letter-spacing: calc(var(--h-l1-width) / 2);
```

### Line spacing
```
--h-l1-line-space: calc(3 * var(--h-l1-height));
```

### Align text
You can use `text-align` for left/center/right.

There is some class to help you:
```
<div class="h-l1 h-l1--left">
  <span class="h-l1__word">...</span>
</div>

<div class="h-l1 h-l1--center">
  <span class="h-l1__word">...</span>
</div>

<div class="h-l1 h-l1--right">
  <span class="h-l1__word">...</span>
</div>
```

> As usual, change `h-l1` to `h-l2` for the second font.

## Accessibility
> If you use the javascript version, this is automatically done

Accessibility is important, you always need a good SEO or a good screen reader support.

When you use these CSS fonts, please don't forget to add the accessible class to your text
```
<span class="h-l1__accessible">I am readable!</span>
```

## TODO
- [ ] Add old browser support
- [ ] Add second color for the inner of second font
- [ ] Add Javascript function to update text dynamically
- [x] Add other font-size (or use em)
- [ ] Add specials characters
