import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Article from './components/article/Article';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/common/Home';
import Privacy from './components/common/Privacy';
import Terms from './components/common/Terms';
import Logout from './components/user/Logout';
import Profile from './components/user/Profile';
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} 
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin"  component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/logout" component={Logout} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route exact path="/:username" component={Profile} />
          {/* <Router path="/:username/comments" component={Comments} /> */}
          {/* <Router path="/:username/favorites" component={Favorites} /> */}
          {/* <Route exact path="/:subject" component={SubjectFeed} /> */}
          <Route path="/:subject/:title" component={Article} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
