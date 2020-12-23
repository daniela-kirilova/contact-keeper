import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import "./App.css";

const App = () => {
  return (
    <Router>
    <Fragment>
      <Navbar />
      <div className='container'>
      
      
      </div>
    </Fragment>
  </Router>
  )
};

export default App;
