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
import "@fontsource/roboto";

// Commun components
const DashboardPage = lazy(() => import("./components/DashboardPage"));
const PageNotFound = lazy(() => import("./pages/Errors/PageNotFound"));
const LoginPage = lazy(() => import("./pages/Login"));

// Admin dashboard pages
const AdminRewardsInformation = lazy(() =>
  import("./pages/Admin/RewardsInformation")
);
const AdminICOInformation = lazy(() => import("./pages/Admin/ICOInformation"));
const AdminTransactions = lazy(() => import("./pages/Admin/Transactions"));
const AdminSettings = lazy(() => import("./pages/Admin/Settings"));
const AdminProducts = lazy(() => import("./pages/Admin/Products"));
const AdminSupport = lazy(() => import("./pages/Admin/Support"));
const Users = lazy(() => import("./pages/Admin/Users"));
const User = lazy(() => import("./pages/Admin/User"));

// User dashboard pages
const UserRewardsInformation = lazy(() =>
  import("./pages/User/RewardsInformation")
);
const UserICOInformation = lazy(() => import("./pages/User/ICOInformation"));
const UserICODashboard = lazy(() => import("./pages/User/ICODashboard"));
const UserReferrals = lazy(() => import("./pages/User/Referrals"));
const UserSettings = lazy(() => import("./pages/User/Settings"));
const UserWithdraw = lazy(() => import("./pages/User/Withdraw"));
const UserRewards = lazy(() => import("./pages/User/Rewards"));
const UserFAQ = lazy(() => import("./pages/User/FAQ"));

// Public pages
const ICOInformationsPage = lazy(() => import("./pages/ICOInformations"));
const ServicesPage = lazy(() => import("./pages/Services"));
const HomePage = lazy(() => import("./pages/Home"));

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

            {/* Services page */}
            <Route
              path={endpoints.services.index}
              component={ServicesPage}
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

            {/* User dashboard */}
            <Route
              path={endpoints.dashboard.user.home.index}
              strict
              render={() => (
                <DashboardPage isAdmin={false}>
                  {/* ICO Information */}
                  <Route
                    path={[
                      endpoints.dashboard.user.ico_dashboard.index,
                      endpoints.dashboard.user.home.index,
                    ]}
                    component={UserICODashboard}
                    strict
                    exact
                  />

                  {/* ICO Information */}
                  <Route
                    path={endpoints.dashboard.user.ico_information.index}
                    component={UserICOInformation}
                    strict
                    exact
                  />

                  {/* Rewards */}
                  <Route
                    path={endpoints.dashboard.user.rewards.index}
                    component={UserRewards}
                    strict
                    exact
                  />

                  {/* Rewards Information */}
                  <Route
                    path={endpoints.dashboard.user.rewards_information.index}
                    component={UserRewardsInformation}
                    strict
                    exact
                  />

                  {/* Referrals */}
                  <Route
                    path={endpoints.dashboard.user.referrals.index}
                    component={UserReferrals}
                    strict
                    exact
                  />

                  {/* Withdraw */}
                  <Route
                    path={endpoints.dashboard.user.withdraw.index}
                    component={UserWithdraw}
                    strict
                    exact
                  />

                  {/* FAQ */}
                  <Route
                    path={endpoints.dashboard.user.faq.index}
                    component={UserFAQ}
                    strict
                    exact
                  />

                  {/* Settings */}
                  <Route
                    path={endpoints.dashboard.user.settings.index}
                    component={UserSettings}
                    strict
                    exact
                  />
                </DashboardPage>
              )}
            />

            {/* Admin dashboard */}
            <Route
              path={endpoints.dashboard.admin.home.index}
              strict
              render={() => (
                <DashboardPage isAdmin={true}>
                  {/* ICO Information */}
                  <Route
                    path={[
                      endpoints.dashboard.admin.ico_information.index,
                      endpoints.dashboard.admin.home.index,
                    ]}
                    component={AdminICOInformation}
                    strict
                    exact
                  />

                  {/* Rewards Information */}
                  <Route
                    path={endpoints.dashboard.admin.rewards_information.index}
                    component={AdminRewardsInformation}
                    strict
                    exact
                  />

                  {/* Transactions */}
                  <Route
                    path={endpoints.dashboard.admin.transactions.index}
                    component={AdminTransactions}
                    strict
                    exact
                  />

                  {/* Users */}
                  <Route
                    path={endpoints.dashboard.admin.users.index}
                    component={Users}
                    strict
                    exact
                  />

                  {/* User */}
                  <Route
                    path={endpoints.dashboard.admin.user.index}
                    component={User}
                    strict
                    exact
                  />

                  {/* Products */}
                  <Route
                    path={endpoints.dashboard.admin.products.index}
                    component={AdminProducts}
                    strict
                    exact
                  />

                  {/* Support */}
                  <Route
                    path={endpoints.dashboard.admin.support.index}
                    component={AdminSupport}
                    strict
                    exact
                  />

                  {/* Settings */}
                  <Route
                    path={endpoints.dashboard.admin.settings.index}
                    component={AdminSettings}
                    strict
                    exact
                  />
                </DashboardPage>
              )}
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
