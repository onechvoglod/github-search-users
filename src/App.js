import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import AlertState from "./context/alert/alertState";
import GithubState from "./context/github/githubState";
import { ModalState } from "./context/modal/modalState";

function App() {
  return (
    <ModalState>
      <GithubState>
        <AlertState>
          <BrowserRouter>
            <div>
              <Navbar />
              <div className="container">
                <Alert />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/profile/:name" component={Profile} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </AlertState>
      </GithubState>
    </ModalState>
  );
}

export default App;
