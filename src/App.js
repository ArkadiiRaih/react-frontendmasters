import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";

// here for Details and Search params we use dynamic import, so they load only when it's required
const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const themeHook = useState("peru");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Suspense fallback={<h1>Loading route ...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById("root"));
