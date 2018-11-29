import React from "react";

export default props => (
  <picture>
    <source srcSet={props.webp} type="image/webp" />
    <source srcSet={props.src} />
    <img {...props} />
  </picture>
);
