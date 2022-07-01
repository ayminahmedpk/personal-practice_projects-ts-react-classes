import React, { Component } from 'react'

import Child from './Child';

export default class Parent extends Component {

  name = 'Parent';

  inputRef:React.RefObject<HTMLInputElement> = React.createRef();

  render() {
    return (
      <div className="component">
        <p className="component__name">{this.name}</p>
        <input ref={this.inputRef} type="text" />
        <Child inputRef={this.inputRef} ></Child>
      </div>
    )
  }
}
