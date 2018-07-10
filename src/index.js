import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import ButtonSetup from './components/ButtonSetup';
import DefaultLayout from './layouts/DefaultLayout';

ReactDOM.render(
  <Router>
    <Switch>
      <DefaultLayout path='/' component={ButtonSetup} />
    </Switch>
  </Router>,
  document.getElementById('root'));
