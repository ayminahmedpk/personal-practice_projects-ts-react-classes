import React, { Component } from 'react'

export default class Parent extends Component {

  name = 'Parent';

  inputRef:React.RefObject<HTMLInputElement> = React.createRef();

  render() {
    return (
      <div className="component">
        <p className="component__name">{this.name}</p>
        <button onClick={() => {this.inputRef.current?.focus()}}>Focus on input</button>
        <input ref={this.inputRef} type="text" />
      </div>
    )
  }
}
