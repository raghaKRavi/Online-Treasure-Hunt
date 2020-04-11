import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Importing Files
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import UserPage from "./components/UserHomePage/UserHomePage";
import CreateNewHunt from "./components/CreateHunt/CreateNewHunt";
import UserHomePage from "./components/UserHomePage";
import SVG from "./components/SvgUserPage";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/createhunt" component={CreateNewHunt} />

        {/* for testing purpose */}
        <Route exact path="/check" component={UserHomePage} />
        <Route exact path="/svg" component={SVG} />
      </div>
    </Router>
  );
}

export default App;
