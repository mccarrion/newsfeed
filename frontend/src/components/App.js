import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Home} />
          <Route path="/login"  component={Login} />
          <Route path="/signup" component={SignUp} />
          <Router exact path="/@:username" component={Profile} />
          <Router path="/@:username/comments" component={Comments} />
          <Router path="/@:username/favorites" component={Favorites} />
          <Route exact path="/:subject" component={Subject} />
          <Route path="/:subject/:title" component={Article} />
        </header>
      </div>
    );
  }
}

export default App;
