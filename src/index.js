import React from "react";

export default ({ webp, src, ...rest }) => (
  <picture>
    <source srcSet={webp} type="image/webp" />
    <source srcSet={src} />
    <img src={src} {...rest} />
  </picture>
);
