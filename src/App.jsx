import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { CssBaseline } from "@material-ui/core";
import { lazy, Suspense } from "react";

import CustomCSSBaseline from "./styles/CustomCSSBaseline";
import useViewPort from "./hooks/useViewPort";
import Loading from "./components/Loading";
import HelmetExport from "react-helmet";
import { endpoints } from "./routes";

import "react-perfect-scrollbar/dist/css/styles.css";

const PageNotFound = lazy(() => import("./pages/Errors/PageNotFound"));
const LoginPage = lazy(() => import("./pages/Login"));
const HomePage = lazy(() => import("./pages/Home"));

const App = () => {
  const viewPort = useViewPort({ xs: 0.75, sm: 0.85, md: 0.95, lg: 1 });

  return (
    <PerfectScrollbar className="globalScrollbar">
      {/* Custom style */}
      <CssBaseline />
      <CustomCSSBaseline />

      {/* Customize view port */}
      <HelmetExport>{viewPort}</HelmetExport>

      {/* Lazy load */}
      <Suspense fallback={<Loading />}>
        {/* Routes */}
        <BrowserRouter>
          <Switch>
            {/* Home page */}
            <Route
              path={endpoints.home.index}
              component={HomePage}
              strict
              exact
            />

            {/* Login page */}
            <Route
              path={endpoints.login.index}
              component={LoginPage}
              strict
              exact
            />

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
    </PerfectScrollbar>
  );
};

export default App;
