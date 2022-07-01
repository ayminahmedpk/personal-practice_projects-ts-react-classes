

import React, { Component } from 'react'

import CountContext from './CountContext';
import TextContext from './TextContext';

export default class Grandchild extends Component {
  name: string = 'Grandchild';
  
  render() {
    return (
      <CountContext.Consumer>
        {(countContextValue) => (
          <TextContext.Consumer>
            {(textContextValue) =>(
              <div className="component">
                <p className="component__name">{this.name}</p>
                <p>Context' count: {countContextValue.count}</p>
                <div>
                  <button onClick={countContextValue.decrement}>{'<'}</button>
                  <button onClick={countContextValue.increment}>{'>'}</button>
                </div>
                <input
                  type="text"
                  onChange={textContextValue.onChange}
                  value={textContextValue.text}
                />
              </div>
            )}
          </TextContext.Consumer>
        )}
      </CountContext.Consumer>
    )
  }
}
