

import React, { Component } from 'react'

import Parent from './Parent';

import CountContext from './CountContext';

type GrandparentState = {
  count: number;
}


export default class Grandparent extends Component {

  state = {count: 0}
  
  increment = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState((state) => ({
      ...state,
      count: this.state.count + 1,
    }));
  };
  
  decrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState((state) => ({
      ...state,
      count: this.state.count - 1,
    }));
  };

  name: string = 'Grandparent';
  render() {
    return (
      <CountContext.Provider value={{
        count: this.state.count,
        increment: this.increment,
        decrement: this.decrement
      }}>
        <div className="component">
          <p className="component__name">{this.name}</p>
          <p>This component's count: {this.state.count}</p>
          <Parent/>
        </div>
      </CountContext.Provider>
    )
  }
}
