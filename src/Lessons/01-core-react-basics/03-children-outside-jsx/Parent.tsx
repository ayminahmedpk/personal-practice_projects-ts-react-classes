

import React, { Component } from 'react'

import Child from './Child';
import Grandchild from './Grandchild';

export default class Parent extends Component {
  name: string = 'Parent';
  render() {
    return (
      <div className="component">
        <p className="component__name">{this.name}</p>
        <Child>
          <Grandchild/>
        </Child>
      </div>
    )
  }
}
