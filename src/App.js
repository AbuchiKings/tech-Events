import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import EventsList from './pages/EventsList';
import EventPage from './pages/EventPage';
import CreateEvent from './pages/CreateEvent';
import AuthPage from './pages/AuthPage';

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={EventsList} />
        <Route exact path="/events/:slug" component={EventPage} />
        <Route exact path="/create-event" component={CreateEvent} />
        <Route  path="/auth" component={AuthPage} />

      </Switch>

    </>
  );
}

export default App;
