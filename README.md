# [@fav/prop.assign][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Copys own enumerable properties of source objects to destination object.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/prop.assign
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but even old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/prop.assign/` directory manually.*


## Usage

For Node.js:

```js
var assign = require('@fav/prop.assign');
```

For Web browsers:

```html
<script src="fav.prop.assign.min.js"></script>
<script>
var assign = fav.prop.assign;
</script>
```


## API

### <u>assign(dest [, ...srcs) : object</u>

Copys all enumerable own properties from one or more source objects to a destination object and returns a destination object.

***NOTE:*** *This function behave same with `Object.assign` except when first argument is nullish and when properties of first argument object are read only.*

#### Parameters:

| Parameter |   Type   | Description              |
|-----------|:--------:|--------------------------|
| *dest*    |  object  | The destination object.  |
| *srcs*    |  object  | The source object(s).    |

#### Returns:

The destination object.

**Type:** object


## Checked                                                                      

### Node.js (4〜9)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.7   |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |



## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-prop.assign/
[npm-img]: https://img.shields.io/badge/npm-v0.0.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/prop.assign
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-prop.assign.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-prop.assign
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-prop.assign?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-prop-assign
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-prop.assign/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-prop.assign?branch=master
