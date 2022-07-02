import React, { Component } from 'react'

export default class Child extends Component {

  name = 'Child'; // implicit type assignment / type inference

  componentDidUpdate() {console.log(`${this.name}: [Re-render] - componentDidUpdate()`);}

  render() {
    return (
      <div className="component">
        <p className="component__name"> {`${this.name} of ParentOne`}</p>
        <p>Random count to hint at re-renders: {Math.floor(Math.random() * 100)}</p>
        <p>Inspect console for componentDidUpdate results from child</p>
      </div>
    )
  }
}