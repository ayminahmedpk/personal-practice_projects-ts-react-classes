import React, { Component } from 'react'

export default class Child extends Component {

  name = 'Child'; // implicit type assignment / type inference

  render() {
    return (
      <div className="component">
        <p className="component__name"> {`${this.name} component`} </p>
      </div>
    )
  }
}