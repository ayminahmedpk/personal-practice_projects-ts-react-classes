// Passing ref allows parents to access children's DOM elements

// Essentially, what it means is, the 'ref' is received by the child, and then
// assigned to a dom element in the child.

// The real work happens in the Child component.

import React, { Component } from 'react'

import Child from './Child';

export default class Parent extends Component {

  name = 'Parent';

  inputRef:React.RefObject<HTMLInputElement> = React.createRef();

  render() {
    return (
      <div className="component">
        <p className="component__name">{this.name}</p>
        <button onClick={() => {this.inputRef.current?.focus()}}>Focus on child input</button>
        <Child ref={this.inputRef} text='Simple prop'></Child>
        {/* <Child ref={this.inputRef}></Child> */ /*Had Child not expected demo prop*/}
      </div>
    )
  }
}
