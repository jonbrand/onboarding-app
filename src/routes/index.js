import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Public routes
import SignIn from '../pages/SignIn';

// Private routes
import Dashboard from '../pages/Dashboard';


const Routes = () => {
  return (
    <Switch>
      <Route component={SignIn} exact path="/" />

      <Route component={Dashboard} path="/dashboard" />
    </Switch>
  );
};

export default Routes;