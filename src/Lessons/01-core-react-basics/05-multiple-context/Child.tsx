

import React, { Component } from 'react'

import Grandchild from './Grandchild';

export default class Child extends Component {
  name: string = 'Child';
  render() {
    return (
      <div className="component">
        <p className="component__name">{this.name}</p>
        <Grandchild/>
      </div>
    )
  }
}
