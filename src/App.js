import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Switch, Route, withRouter } from 'react-router-dom';
import EventsList from './pages/EventsList';
import EventPage from './pages/EventPage';
import CreateEvent from './pages/CreateEvent';
import AuthPage from './pages/AuthPage';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App(props) {
  console.log(props);
  const { pathname } = props.location;
  const homepage = pathname === '/' && <Header />
  const paths = pathname.split('/')
  const otherpages = !paths.includes('auth')
    && <Navbar fixed="sticky navbar" displayNav="nav-logo logo" />
  return (
    <>
      {homepage || otherpages}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/events/:slug" component={EventPage} />
        <Route  exact path="/events" component={EventsList} />
        <Route exact path="/create-event" component={CreateEvent} />
        <Route path="/auth" component={AuthPage} />

      </Switch>

    </>
  );
}

export default withRouter(App);
