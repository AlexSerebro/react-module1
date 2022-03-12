import ReactDOM from "react-dom";
import paintings from "./paintings.json";

// import React, { Children } from "react";
// import ReactDOM from "react-dom";
// import { renderIntoDocument } from "react-dom/test-utils";
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

const data = paintings[0];

const painting = (
  <div>
    <img src={data.url} alt={data.title} width="480" />
    <h2>{data.title}</h2>
    <p>
      Author<a href={data.author.url}>{data.author.tag}</a>
    </p>
    <p>Price:{data.price} credit</p>
    <p>some text</p>
    <button type="button">Add to cart</button>
  </div>
);

ReactDOM.render(painting, document.querySelector("#root"));
