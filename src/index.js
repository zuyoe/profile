import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
ReactDOM.render(
  //App 컴포넌트를 BrowserRouter 로 감싸서
  // APP 안에서 라우터 기능을 활용하도록 함.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
