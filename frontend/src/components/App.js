import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Home} />
          <Route path="/login"  component={Login} />
          <Route path="/signup" component={SignUp} />
          <Router exact path="/@:username" component={UserProfile} />
          <Router path="/@:username/comments" component={UserComments} />
          <Router path="/@:username/favorites" component={UserFavorites} />
          <Route exact path="/:subject" component={Subject} />
          <Route path="/:subject/:title" component={Article} />
        </header>
      </div>
    );
  }
}

export default App;
