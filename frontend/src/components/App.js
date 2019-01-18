import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Article from './article/Article';
import ArticleList from './article/ArticleList';
import Header from './common/Header';
// import Home from './common/Home';
import SignIn from './user/SignIn';
import Profile from './user/Profile';
import SignUp from './user/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
          <Switch>
            <Route exact path="/" component={ArticleList} />
            <Route path="/signin"  component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route exact path="/@:username" component={Profile} />
            {/* <Router path="/@:username/comments" component={Comments} /> */}
            {/* <Router path="/@:username/favorites" component={Favorites} /> */}
            <Route exact path="/:subject" component={ArticleList} />
            <Route path="/:subject/:title" component={Article} />
          </Switch>
      </div>
    );
  }
}

export default App;
