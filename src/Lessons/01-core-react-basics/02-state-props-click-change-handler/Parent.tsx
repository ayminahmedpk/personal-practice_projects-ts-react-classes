import React, { Component } from 'react'

import Child from './Child';

type ParentProps = {};

type ParentState = {
  count: number,
  text: string,
}

export default class Parent extends Component<ParentProps, ParentState> {

  state = {
    count: 0,
    text: '<default text>',
  }

  incrementHandler = (event: React.MouseEvent<HTMLButtonElement>):void => {
    this.setState( (state) => ({
      ...state,
      count: state.count + 1,
    }));
  }
  
  decrementHandler = (event: React.MouseEvent<HTMLButtonElement>):void => {
    this.setState( (state) => ({
      ...state,
      count: state.count - 1,
    }));
  }

  textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
    event.persist(); // React.ChangeEvent needs this for the async setState call
    this.setState( (state) => ({
      ...state,
      text: event.target.value,
    }))
  }

  name = 'Parent';
  render() {
    return (
      <div className="component">
        <p className="component__name">{`${this.name} component`}</p>
        <p>Parent count: {this.state.count}</p>
        <button onClick={this.decrementHandler}>{'<'}</button>
        <button onClick={this.incrementHandler}>{'>'}</button>
        <p>Parent text: {this.state.text}</p>
        <Child
          countObject={{
            count: this.state.count,
            increment: this.incrementHandler,
            decrement: this.decrementHandler
          }}
          textObject={{
            text: this.state.text,
            textChangeHandler: this.textChangeHandler,
          }}/>
      </div>
    )
  }
}
