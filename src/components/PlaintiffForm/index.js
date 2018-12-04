import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Button, Span } from "./styles";

class FormsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Please provide as much info as possible!</h2>
        <fieldset>
        <legend>Plaintiff Form:</legend>
        <div>
        <label>
        What is your name?
        <input type="text" required  name="name" placeholder="full name"/>
        </label>
        </div>
        <div>
        <label>
        Your residential Address?
        <input type="text" required  />
        </label>
        </div>
        <div>
        <label>
        Is this an apartment building or other multiple family dwelling?
        <input type="text" required />
        </label>
        </div>
        <div>
        <label>
        Your residential telephone number?
      <input type="text" required />
        </label></div>
        <div>
        <label>
        Any former address you have left to avoid abuse?
        <input type="text" required/>
        </label>
        </div>
        <div>
        <label>
        What is the name of your workplace?
        <input type="text"  />
        </label>
        </div>
        <div>
        <label>
        What is your workplace telephone number?What is your school?
        <input type="text" />
        </label>
        </div>
        <div>
        <label>
        What is your school?
        <input type="text" />
        </label>
        </div>
        <div>
        <label>
        What is the address of your school?
        <input type="text" />
        </label>
        </div>
        <div>
        <label>
        Who are people authorized to have access to have this information?
        <input type="text" /></label>
        </div>

         </fieldset>
         <Link to="/list">
            <Button> <Span/> Go back to next form</Button>
          </Link>
          <Link to="/list">
            <Button> <Span/> Select a different form</Button>
          </Link>
          <Link to="/">
            <Button> <Span/> Go back to Homepage</Button>
          </Link>
      </form>
    );
  }
}

export default FormsPage;




