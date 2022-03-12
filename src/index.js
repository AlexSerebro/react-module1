import React, { Children } from "react";
import ReactDOM from "react-dom";
import { renderIntoDocument } from "react-dom/test-utils";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const spanElem1 = React.createElement("span", { children: "victory" });
// const element = React.createElement("div", {
//   class: "text",
//   children: ["Hello world", " ", spanElem1],
// });
console.log("~ element", element);

ReactDOM.render(element, document.querySelector("#root"));
