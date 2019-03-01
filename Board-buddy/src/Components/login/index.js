import React, { Component } from 'react';
import "./style.css";

class Form extends Component {
    render() {
        return(
    <div>

<div className="row1">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input disabled value="I am not editable" id="disabled" type="text" class="validate"/>
          <label for="disabled">Disabled</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" class="validate"/>
          <label for="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email">Email</label>
        </div>
      </div>
   
    </form>
  </div>
      
    </div>
     
        )
    }
}

export default Form