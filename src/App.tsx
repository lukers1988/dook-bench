import React from 'react';
import './App.css';
import PostsComponent from "./modules/posts/components/PostsComponent";
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
        <div className="container">

            <nav className="nav">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="container">
            <Switch>
                <Route path="/posts">
                    <PostsComponent />
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
