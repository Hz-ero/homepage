import React from "react";
import RightDrawer_CT from "./RightDrawer-CT";
import FullScreen_CP from "../components/FullScreen-CP.jsx";
import AddButton_CT from "./AddButton-CT";
import Test_CP from "../components/Test-CP.jsx";
import { CssBaseline } from "@material-ui/core";
import { HashRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test_CP} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <CssBaseline />
    <AddButton_CT />
    <FullScreen_CP />
    <RightDrawer_CT />
  </div>
);

export default App;
