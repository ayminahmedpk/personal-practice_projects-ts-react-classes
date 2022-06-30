

import React, { Component } from 'react'

export default class Grandchild extends Component {
  name: string = 'Grandchild';
  render() {
    return (
      <div className="component">
        <p className="component__name">{this.name}</p>
      </div>
    )
  }
}
