import React, { Component } from 'react'

type ChildProps = {
  inputRef: React.RefObject<HTMLInputElement>,
}

export default class Child extends Component<ChildProps> {

  name = 'Child';

  render() {
    return (
      <div className="component">
        <p className="component__name">{this.name}</p>
        <button onClick={() => {this.props.inputRef.current?.focus()}}>Focus on input</button>
      </div>
    )
  }
}
