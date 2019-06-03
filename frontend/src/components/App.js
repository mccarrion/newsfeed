import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Article from './article/Article';
import Footer from './common/Footer';
import Header from './common/Header';
import Home from './common/Home';
import Privacy from './common/Privacy';
import Terms from './common/Terms';
import Logout from './user/Logout';
import Profile from './user/Profile';
import SignIn from './user/SignIn';
import SignUp from './user/SignUp';

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
          <Route exact path="/@:username" component={Profile} />
          {/* <Router path="/@:username/comments" component={Comments} /> */}
          {/* <Router path="/@:username/favorites" component={Favorites} /> */}
          {/* <Route exact path="/:subject" component={SubjectFeed} /> */}
          <Route path="/:subject/:title" component={Article} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
