import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home/Home";
import SinglePage from "./pages/SinglePage/SinglePage";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/single/:item/:id" children={<SinglePage />}></Route>
      </Switch>
    </Fragment>
  );
}

export default App;
