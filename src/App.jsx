import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { lazy, Suspense } from "react";

import CustomCSSBaseline from "./styles/CustomCSSBaseline";
import Loading from "./components/Loading";
import { endpoints } from "./routes";

const PageNotFound = lazy(() => import("./pages/Errors/PageNotFound"));
const PublicPage = lazy(() => import("./components/PublicPage"));
const HomePage = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <>
      {/* Custom style */}
      <CssBaseline />
      <CustomCSSBaseline />

      {/* Lazy load */}
      <Suspense fallback={<Loading />}>
        {/* Routes */}
        <BrowserRouter>
          <Switch>
            <PublicPage>
              {/* Home page */}
              <Route
                path={endpoints.home.index}
                component={HomePage}
                strict
                exact
              />
            </PublicPage>

            {/* 404 page */}
            <Route
              path={endpoints.error[404]}
              component={PageNotFound}
              strict
              exact
            />

            <Redirect to={endpoints.error[404]} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
