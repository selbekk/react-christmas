import React from "react";
import { render } from "react-dom";
import { injectGlobal } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SiteHeader from "./SiteHeader";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Covered+By+Your+Grace');
  body {
    color: #333;
    font-family: sans-serif;
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const Root = () => (
  <BrowserRouter>
    <div>
      <SiteHeader />
      <App />
    </div>
  </BrowserRouter>
);

render(<Root />, document.getElementById("root"));
