import React from "react";
import { render } from "@testing-library/react";
import TodoList from "../TodoList";

describe("TodoList", () => {
  it("TodoList show", () => {
    const Dom = render(<TodoList/>);
    const domEle = Dom.getByRole('ul');
    expect(domEle).toBeInTheDocument();
  });
});