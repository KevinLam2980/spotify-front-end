import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from "./util/PrivateRoute";

import './App.css';


//Component Imports
import Search from './components/Search';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from "./components/Dashboard"
import UserCard from "./components/UserCard"

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path="/" component={SignUp} />

        {/* Below will turn into Private Routes */}
        <PrivateRoute exact path="/user" component={UserCard} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;


// BQDRmYTmKDBYxDoRozMhVukvv0tlgTGrJ3msbQQagDnGEEoS7ZOqs0QTlpfAT4AaZs4WZEjA7UEjd669BiGMqjfCUCddfahFIvRY6v2LF0FwTfuzMQjkKqhniqA8c5bAAsFw1P2jJnHHjvpZnmmMmJfc-p_qk7q-zHAJ5K6hU4xluYiYuEjoNhfcGZGc
// BQDRmYTmKDBYxDoRozMhVukvv0tlgTGrJ3msbQQagDnGEEoS7ZOqs0QTlpfAT4AaZs4WZEjA7UEjd669BiGMqjfCUCddfahFIvRY6v2LF0FwTfuzMQjkKqhniqA8c5bAAsFw1P2jJnHHjvpZnmmMmJfc
