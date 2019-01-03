import React from "react";
import RightDrawer_CT from "./RightDrawer-CT";
import AddButton_CT from "./AddButton-CT";
import { CssBaseline } from "@material-ui/core";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import ImageCrop_CT from "./ImageCrop-CT";
import SitePanel_CT from "./SitePanel-CT";
import CropArea_CT from "./CropArea-CT";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
    </div>
  </Router>
);

const Test = () => (
  <div>
    <CropArea_CT />
  </div>
);

const Home = () => (
  <div>
    <CssBaseline />
    <AddButton_CT />
    <SitePanel_CT />
    <RightDrawer_CT />
    <ImageCrop_CT />
  </div>
);

export default App;
