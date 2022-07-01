// Using the 'ref' keyword in JSX and passing it a callback function, and that
// callback function implicitly getting the node and assigning it to a variable.

import React, { Component } from 'react'

export default class Parent extends Component<{}> {
  inputField: HTMLInputElement;
  
  constructor(props: {}) {
    super(props);
    this.inputField = {} as HTMLInputElement;
  }

  setInputFieldRef = (element: HTMLInputElement) => {this.inputField = element;};
  focusInputField  = () => {this.inputField?.focus();};

  name = 'Parent';

  render() {
    return (
      <div className="component">
        <p className="component__name">{this.name}</p>
        <input type="text" ref={this.setInputFieldRef}/>
        <button onClick={this.focusInputField}>Focus input field</button>
      </div>
    )
  }
}
