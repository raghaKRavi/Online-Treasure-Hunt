import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Importing Files
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
      </div>
    </Router>
  );
}

export default App;
