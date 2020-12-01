import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';
import './App.css';
import LandingPage from './component/pages/LandingPage'
import Country from './component/pages/Country'

const App =()=> {
  return (
    <Fragment>
      <Router>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/Country' component={Country} />
      </Router>
      </Fragment>
  );
}

export default App;
