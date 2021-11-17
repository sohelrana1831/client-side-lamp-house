import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import ExploreLight from "./pages/ExploreLight/ExploreLight";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Purchase from "./pages/Purchase/Purchase";
import Register from "./pages/Register/Register";
import AuthProvider from "./shared/Context/AuthContext";
import PrivateRoute from "./shared/PrivateRoute/PrivateRoute";
function App() {
  return (
    <div
      className="bg-cover bg-no-repeat relative bg-fixed"
      // style={{
      //   backgroundImage: `url(https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80)`,
      // }}
    >
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/explore-light">
              <ExploreLight />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/purchase/:id">
              <Purchase />
            </PrivateRoute>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
