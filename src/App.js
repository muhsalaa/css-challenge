import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import ChallengeOne from './challenges/ch1_';
import ChallengeTwo from './challenges/ch2_';

import './App.css';

class App extends React.Component {
  state = {
    open: false,
  }

  toggleSideBar = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <BrowserRouter>
        <main className="main-content">
          <SideBar isOpen={this.state.open} />
          <div className={`main-content__inner ${this.state.open ? 'main-content__inner-active' : ''}`}>
            <NavBar toggle={this.toggleSideBar} />
            <Switch>
              <Redirect from="/" to="/ch_one" exact/>
              <Route path="/ch_one" component={ChallengeOne}/>
              <Route path="/ch_two" component={ChallengeTwo}/>
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
