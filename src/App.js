import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './layouts/Main'
import LandingPage from './pages/LandingPage'

export default function App() {
  return (
    <Switch>
      <Route exact path='/' 
        render={() => (
          <Main>
            <LandingPage />
          </Main>
        )}
      />
    </Switch>
  );
};


