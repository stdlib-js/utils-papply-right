<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# papplyRight

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Partially apply function arguments from the right.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
papplyRight = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-papply-right@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/utils-papply-right/tags). For example,

```javascript
papplyRight = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-papply-right@v0.2.2-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var papplyRight = require( 'path/to/vendor/umd/utils-papply-right/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-papply-right@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.papplyRight;
})();
</script>
```

#### papplyRight( fcn\[, ...args] )

Partially applies function arguments from the right.

```javascript
function say( text, name ) {
    return text + ', ' + name + '.';
}

var toSusan = papplyRight( say, 'Susan B. Anthony' );

var str = toSusan( 'Thank you' );
// returns 'Thank you, Susan B. Anthony.'

str = toSusan( 'Never forget' );
// returns 'Never forget, Susan B. Anthony.'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The implementation does **not** set the `length` of the returned function. Accordingly, the returned function `length` is **always** `0`.
-   The evaluation context is **always** `null`.
-   The difference between this function and [`papply`][@stdlib/utils/papply] is the order in which arguments are applied. This function fixes the rightmost arguments.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-papply-right@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var fcn;
var x;
var y;
var z;
var v;
var i;

function add( x, y, z, w, t, s ) {
    return x + y + z + w + t + s;
}

fcn = papplyRight( add, 5, 4, 3 );

for ( i = 0; i < 100; i++ ) {
    x = floor( randu() * 5 );
    y = floor( randu() * 10 );
    z = floor( randu() * 15 );
    v = fcn( x, y, z );
    console.log( '%d+%d+%d+5+4+3 = %d', x, y, z, v );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-papply`][@stdlib/utils/papply]</span><span class="delimiter">: </span><span class="description">partially apply function arguments.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-papply-right.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-papply-right

[test-image]: https://github.com/stdlib-js/utils-papply-right/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/utils-papply-right/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-papply-right/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-papply-right?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-papply-right.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-papply-right/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-papply-right/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-papply-right/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-papply-right/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-papply-right/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-papply-right/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-papply-right/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-papply-right/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-papply-right/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/papply]: https://github.com/stdlib-js/utils-papply/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
