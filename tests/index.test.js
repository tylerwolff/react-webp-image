import React from "react";
import expect from "expect";
import { render, unmountComponentAtNode } from "react-dom";

import Img from "src/";

describe("React webp image", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("renders a <picture> element by default", () => {
    render(<Img />, node, () => {
      expect(node.innerHTML).toContain("<picture>");
    });
  });

  it("renders a <source> with webp path when provided", () => {
    render(<Img src="test.jpg" webp="test.webp" />, node, () => {
      expect(node.innerHTML).toContain(
        '<picture><source srcset="test.webp" type="image/webp"><source srcset="test.jpg"><img src="test.jpg"></picture>'
      );
    });
  });

  it("adds any additional props to <img> when passed in", () => {
    render(
      <Img src="test.jpg" webp="test.webp" alt="this is a test" />,
      node,
      () => {
        expect(node.innerHTML).toContain(
          '<picture><source srcset="test.webp" type="image/webp"><source srcset="test.jpg"><img src="test.jpg" alt="this is a test"></picture>'
        );
      }
    );
  });
});
