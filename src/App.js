import React from "react";
import { Route, HashRouter } from "react-router-dom";
import HomePage from './components/HomePage';

function App() {
  return (
    <HashRouter>
          <Route exact path={`/`} component={HomePage} />
          {/* <Route exact path={`/basket`} component={BasketPage} />
          <Route exact path={`/order`} component={OrderForm} /> */}
    </HashRouter>
  );
}

export default App;
