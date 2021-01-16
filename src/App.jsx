import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './Home'
import Video from './pages/video'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/demos/video'>
          <Video />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
