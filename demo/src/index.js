import React, { Component } from "react";
import { render } from "react-dom";

import Img from "../../src";

// Image examples
import jpgSource from "../images/1.jpg";
import webpSource from "../images/1.webp";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>React Webp Image Demo</h1>
        <Img
          src={jpgSource}
          webp={webpSource}
          alt="I will render a webp image"
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
