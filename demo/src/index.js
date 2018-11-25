import React, { Component } from "react";
import { render } from "react-dom";

import Img from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>React Webp Image Demo</h1>
        <Img />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
