import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.querySelector("#root"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const spanElem1 = React.createElement("span", { children: "victory" });
// const element = React.createElement("div", {
//   className: "text",
//   children: ["Hello world", " ", spanElem1],
// });
// console.log("~ element", element);

// ReactDOM.render(element, document.querySelector("#root"));

//JSX
// const jsxElem1 = <span>victory</span>;
// const jsxElem = <div>Hello World, {jsxElem1}</div>;
// console.log("~ jsxElem", jsxElem);

// ReactDOM.render(jsxElem, document.querySelector("#root"));
