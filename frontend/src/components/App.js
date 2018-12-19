import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Article from './Article/Article';
import ArticleList from './Article/ArticleList';
import Login from './User/Login';
import Profile from './User/Profile';
import SignUp from './User/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/login"  component={Login} />
          <Route path="/signup" component={SignUp} />
          <BrowserRouter exact path="/@:username" component={Profile} />
          {/* <Router path="/@:username/comments" component={Comments} /> */}
          {/* <Router path="/@:username/favorites" component={Favorites} /> */}
          <Route exact path="/:subject" component={ArticleList} />
          <Route path="/:subject/:title" component={Article} />
        </header>
      </div>
    );
  }
}

export default App;
