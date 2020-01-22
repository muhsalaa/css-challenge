import React, { Component } from 'react';

import './SideBar.css';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
  render() {
    const { isOpen } = this.props;
    return (
      <header className={`sidebar-navigation ${isOpen ? 'sidebar-navigation__active' : ''}`}>
        <div className="sidebar-navigation__logo">
          <h1>100-Challenges</h1>
        </div>
        <div className="sidebar-navigation__items">
          <ul>
            <li><NavLink to="/ch_one">
              <i className="fa fa-instagram fa-lg"></i>
              Challenge One
            </NavLink></li>
            <li><NavLink to="/ch_two">
              <i className="fa fa-dribbble fa-lg"></i>
              Challenge Two
            </NavLink></li>
          </ul>
        </div>
      </header>
    );
  }
}

export default SideBar;
