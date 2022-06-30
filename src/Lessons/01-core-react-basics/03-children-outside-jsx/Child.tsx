

import React, { Component } from 'react'

type ChildProps = {
  children: React.ReactNode,
}

export default class Child extends Component<ChildProps> {
  name: string = 'Child';
  render() {
    return (
      <div className="component">
        <p className="component__name">{this.name}</p>
        {this.props.children}
      </div>
    )
  }
}
