import React from "react";
import { render } from "react-dom";
import styled, { injectGlobal } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from './createServiceWorker';
import App from "./App";
import ScrollRestorer from "./ScrollRestorer";
import SiteHeader from "./SiteHeader";
import SiteContent from "./SiteContent";
import SiteFooter from "./SiteFooter";

/* eslint-disable no-unused-expressions */
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
/* eslint-enable no-unused-expressions */

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Root = () => (
  <BrowserRouter>
    <AppContainer>
      <ScrollRestorer />
      <SiteHeader />
      <SiteContent>
        <App />
      </SiteContent>
      <SiteFooter />
    </AppContainer>
  </BrowserRouter>
);

registerServiceWorker();

render(<Root />, document.getElementById("root"));
