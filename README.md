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

# papplyRight

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Partially apply function arguments from the right.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-papply-right
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var papplyRight = require( '@stdlib/utils-papply-right' );
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

```javascript
var randu = require( '@stdlib/random-base-randu' );
var floor = require( '@stdlib/math-base-special-floor' );
var papplyRight = require( '@stdlib/utils-papply-right' );

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

-   <span class="package-name">[`@stdlib/utils/papply`][@stdlib/utils/papply]</span><span class="delimiter">: </span><span class="description">partially apply function arguments.</span>

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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-papply-right.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-papply-right

[test-image]: https://github.com/stdlib-js/utils-papply-right/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-papply-right/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-papply-right/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-papply-right?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-papply-right.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-papply-right/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-papply-right/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-papply-right/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-papply-right/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-papply-right/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/papply]: https://github.com/stdlib-js/utils-papply

<!-- </related-links> -->

</section>

<!-- /.links -->
