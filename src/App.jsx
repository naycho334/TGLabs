import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { lazy, Suspense } from "react";

import CustomCSSBaseline from "./styles/CustomCSSBaseline";
import useViewPort from "./hooks/useViewPort";
import Loading from "./components/Loading";
import HelmetExport from "react-helmet";
import mainTheme from "./styles/theme";
import { endpoints } from "./routes";

import "react-perfect-scrollbar/dist/css/styles.css";

const ICOInformationsPage = lazy(() => import("./pages/ICOInformations"));
const PageNotFound = lazy(() => import("./pages/Errors/PageNotFound"));
const ProductsPage = lazy(() => import("./pages/Products"));
const LoginPage = lazy(() => import("./pages/Login"));
const HomePage = lazy(() => import("./pages/Home"));
// const RegisterPage = lazy(() => import("./pages/Register"));

const App = () => {
  const viewPort = useViewPort({ xs: 0.75, sm: 0.85, md: 0.95, lg: 1 });

  return (
    <MuiThemeProvider theme={mainTheme}>
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

            {/* Login page */}
            <Route
              path={endpoints.login.index}
              component={LoginPage}
              strict
              exact
            />

            {/* Products page */}
            <Route
              path={endpoints.products.index}
              component={ProductsPage}
              strict
              exact
            />

            {/* ICOInformations page */}
            <Route
              path={endpoints.ico_info.index}
              component={ICOInformationsPage}
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
    </MuiThemeProvider>
  );
};

export default App;
