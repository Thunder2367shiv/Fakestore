import './App.css';
import Navbar from './components/Navbarmine';
import News from './components/Datafetch';
import React, { useState } from 'react';
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="red" progress={progress} />
        <Switch>
          <Route exact path="/"> <News setProgress={setProgress} key="home" category="" /> </Route>
          <Route exact path="/women's clothing"> <News setProgress={setProgress} key="women'sclothing" category="women's clothing" /> </Route>
          <Route exact path="/men's clothing"> <News setProgress={setProgress} key="men'sclothing" category="men's clothing" /> </Route>
          <Route exact path="/jewelery"> <News setProgress={setProgress} key="jewelery" category="jewelery" /> </Route>
          <Route exact path="/electronics"> <News setProgress={setProgress} key="electronics" category="electronics" /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
