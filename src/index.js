import React, { Component } from "react";

export default class extends Component {
  render() {
    const { src, webp } = this.props;

    return (
      <picture>
        <source srcSet={webp} type="image/webp" />
        <source srcSet={src} />
        <img src={src} {...this.props} />
      </picture>
    );
  }
}
