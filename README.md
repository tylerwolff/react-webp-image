# React webp image

[![npm package][npm-badge]][npm]
![](https://img.shields.io/bundlephobia/minzip/react-webp-image?label=gzip%20size)
[![Travis][build-badge]][build]
[![Coveralls][coveralls-badge]][coveralls]

A simple react component for rendering **webp** images with an image fallback for older browsers. It uses the `<picture>` tag to support older browsers without the need for feature detection or a polyfill.

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
import imgPath from "assets/photo.png";
import webpPath from "assets/photo.webp";

<Img src={imgPath} webp={webpPath} alt="I'm a webp image" />;
```

Any additional props will be passed down to the img tag.

## Why use webp?
WebP is a modern image format that provides superior lossless and lossy compression for images on the web. WebP lossless images are 26% smaller in size compared to PNGs. WebP lossy images are 25-34% smaller than comparable JPEG images at equivalent SSIM quality index.

[Learn more about webp](https://developers.google.com/speed/webp/)

[build-badge]: https://img.shields.io/travis/tylerwolff/react-webp-image/master.svg
[build]: https://travis-ci.org/tylerwolff/react-webp-image
[npm-badge]: https://img.shields.io/npm/v/react-webp-image.svg
[npm]: https://www.npmjs.org/package/react-webp-image
[coveralls-badge]: https://img.shields.io/coveralls/tylerwolff/react-webp-image/master.svg
[coveralls]: https://coveralls.io/github/tylerwolff/react-webp-image
