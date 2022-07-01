

import React, { Component } from 'react'

import Parent from './Parent';

import CountContext from './CountContext';
import TextContext from './TextContext'

type GrandParentProps = {};

type GrandparentState = {
  count: number,
  text: string,
}


export default class Grandparent extends Component<GrandParentProps, GrandparentState> {

  constructor(props:GrandParentProps) {
    super(props)
  
    this.state = {
      count: 0,
      text: 'default'
    }
  }
  
  // if you want to avoid explicit constructor
  // state = {count: 0}
  
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

  onChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    event.persist();  // React.ChangeEvent requires this for async setState
    this.setState((state) => ({
      ...state,
      text: event.target.value,
    }))
  }

  name: string = 'Grandparent';
  render() {
    return (
      <TextContext.Provider value={{
        text: this.state.text,
        onChange: this.onChange,
      }}>
        <CountContext.Provider value={{
          count: this.state.count,
          increment: this.increment,
          decrement: this.decrement
        }}>
          <div className="component">
            <p className="component__name">{this.name}</p>
            <p>This component's text: {this.state.text}</p>
            <p>This component's count: {this.state.count}</p>
            <Parent/>
          </div>
        </CountContext.Provider>

      </TextContext.Provider>
    )
  }
}
