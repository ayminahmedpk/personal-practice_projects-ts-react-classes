

import React, { Component } from 'react'

import Child from './Child';

export default class Parent extends Component {
  name: string = 'Parent';
  render() {
    return (
      <div className="component">
        <p className="component__name">{this.name}</p>
        <Child/>
      </div>
    )
  }
}
