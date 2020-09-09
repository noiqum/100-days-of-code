import React from 'react';

import './App.css';
import Head from './components/head/head';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from './components/container/container';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import Login from './components/auth/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Head />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Container} />
          <Route path='/signin' component={Login} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
