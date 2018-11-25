import React, { Component } from "react";

export default class extends Component {
  render() {
    const { src, webp } = this.props;

    return (
      <picture>
        <source srcset={webp} type="image/webp" />
        <source srcset={src} />
        <img src={src} {...this.props} />
      </picture>
    );
  }
}
