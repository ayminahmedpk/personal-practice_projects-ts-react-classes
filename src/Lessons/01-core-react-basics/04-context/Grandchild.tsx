

import React, { Component } from 'react'

import CountContext from './CountContext';

export default class Grandchild extends Component {
  name: string = 'Grandchild';
  
  render() {
    return (
      <CountContext.Consumer>
        {(value) => (
          <div className="component">
            <p className="component__name">{this.name}</p>
            <p>Context' count: {value.count}</p>
            <button onClick={value.decrement}>{'<'}</button>
            <button onClick={value.increment}>{'>'}</button>
          </div>
        )}
      </CountContext.Consumer>
    )
  }
}
