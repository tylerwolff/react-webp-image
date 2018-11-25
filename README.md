# React webp image

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A simple react component for rendering **webp** images with a fallback for older browsers. It uses the `<picture>` tag to support older browsers without the need for a polyfill.

## Installation

```
npm install react-webp-image
```

or

```
yarn add react-webp-image
```

## Usage

```jsx
import Img from "react-webp-image";

<Img src={imgPath} webp={webpPath} alt="I'm a webp image" />;
```

All additional props will be passed down to the rendered img tag

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
