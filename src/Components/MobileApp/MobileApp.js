import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatArea from "./ChatArea/ChatArea";
import Login from "./AuthScreens/Login";
import Signup from "./AuthScreens/Signup";
import ForgetPassword from "./AuthScreens/ForgetPassword";
import NewPassword from "./AuthScreens/NewPassword";

const MobileApp = ({ auth }) => {
  return (
    <div className="app_mobile">
      <div className="app_mobile_body">
        {!auth.isAuthenticated ? (
          <Router>
            <Switch>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/" exact>
                <Login auth={auth} />
              </Route>
              <Route path="/signin">
                <Login auth={auth} />
              </Route>
              <Route
                path="/forgot-password/:email"
                render={(props) => <ForgetPassword {...props} auth={auth} />}
              />
              <Route
                path="/forgot-password"
                render={(props) => <ForgetPassword {...props} auth={auth} />}
              />
              <Route
                path="/new-password/:email"
                render={(props) => <NewPassword {...props} auth={auth} />}
              />
            </Switch>
          </Router>
        ) : (
          <Router>
            <Switch>
              <Route path="/" exact>
                <Sidebar auth={auth} />
              </Route>
              <Route
                path="/rooms/:roomId/:name/:description/:img"
                render={(props) => <ChatArea {...props} auth={auth} />}
              />
            </Switch>
          </Router>
        )}
      </div>
    </div>
  );
};

export default MobileApp;
