import React, { Component } from 'react';

import './App.css';
import Form from './Components/login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo">Blue-Bull</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">Home</a></li>
                <li><a href="badges.html">Profile</a></li>
              </ul>
            </div>

          </nav>
          <Form />





        </header>
      </div>
    );
  }
}

export default App;
