import React, { Component } from 'react';

import './NavBar.css';

class NavBar extends Component {
  render() {
    const { toggle } = this.props;
    return (
      <div className="navbar">
        <div className="toggle-btn" onClick={() => toggle()}>
          <i style={{ color: 'white' }} className="fa fa-bars fa-2x"></i>
        </div>
      </div>
    );
  }
}

export default NavBar;
