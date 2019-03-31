import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Article from './article/Article';
import Header from './common/Header';
import Footer from './common/Footer';
import Privacy from './common/Privacy';
import Terms from './common/Terms';
import Home from './common/Home';
import SignIn from './user/SignIn';
import Profile from './user/Profile';
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
