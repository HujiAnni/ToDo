import React from "react";
import * as ReactDOM from "react-dom";
// import {
//   getByLabelText,
//   getByTestId,
//   getQueriesForElement,
// } from "@testing-library/react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// function render(component) {
//   const root = document.createElement("div");
//   ReactDOM.render(component, root);
//   return getQueriesForElement(root);
// }

test("ToDo", () => {
  // const root = document.createElement("div");
  // ReactDOM.render(<App />, root);
  // const { getByText, getByPlaceholderText } = getQueriesForElement(root);

  const { getByText, getByPlaceholderText, getByDisplayValue, getByTestId } =
    render(<App />);

  //after rendering our component
  // use DOM APIs (query selector) to make assertions

  // expect(root.querySelector("h1").textContent).toBe("TO DO LIST");
  // expect(getByText("TO DO LIST")).not.toBeNull();
  getByText("TO DO LIST");

  // expect(root.querySelector("input").placeholder).toBe("Add Todo...");
  // expect(getByPlaceholderText("Add Todo...")).not.toBeNull();
  getByPlaceholderText("Add Todo...");
});

test("add items to list", () => {
  const { getByText, getByPlaceholderText } = render(<App />);

  getByText("TO DO LIST");
  const input = getByPlaceholderText("Add Todo...");
  fireEvent.change(input, { target: { value: "wash car" } });
  fireEvent.keyDown(input, { key: "enter", keyCode: 13 });
  // confirm data
});

//userEvent expresses intent better
// test("remove items from list", () => {
//   const { getByText, getByPlaceholderText } = render(<App />);

//   const input = getByPlaceholderText("Add Todo...");
//   fireEvent.change(input, { target: { value: "wash car" } });
//   // fireEvent.keyDown(input, { key: "enter", keyCode: 13 });
//   const task = getByDisplayValue("wash car");
//   // userEvent.type(input, "Learn Spanish");
// });
