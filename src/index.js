import * as hello2 from "./hello2.js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import css from './styles.css';

hello2.hello();
console.log("HELLO SCRIPT!!");
ReactDOM.render(<App />, document.getElementById("root"));
