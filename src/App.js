import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home/Home";
import SinglePage from "./pages/SinglePage/SinglePage";
import RubixState from "./context/rubix/RubixState";
import SingleItemState from "./context/singleItem/SingleItemState";

function App() {
  return (
    <RubixState>
      <SingleItemState>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/single/:item/:id" children={<SinglePage />}></Route>
        </Switch>
      </SingleItemState>
    </RubixState>
  );
}

export default App;
