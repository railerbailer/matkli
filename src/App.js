import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

const Overview = lazy(() => import("./components/overview"));
const ItemDescription = lazy(() => import("./components/itemDescription"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>SUSPENSE</div>}>
        <Route path="/" exact component={Overview} />
        <Route path="/:foodName" exact component={ItemDescription} />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
