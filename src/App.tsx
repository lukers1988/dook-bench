import React from 'react';
import './App.css';
import PostsContainer from "./modules/posts/components/PostsContainer";
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/posts">Posty</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
        </ul>
        <div className="container">
            <Switch>
                <Route path="/posts">
                    <PostsContainer />
                </Route>
                <Route path="/users">
                    Tu na userów
                </Route>
                <Route path="/">
                    Home
                </Route>
            </Switch>
        </div>

    </div>
  </Router>
  );
}

export default App;
