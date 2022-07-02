import React, { Component } from 'react'

type ChildProps = {
  importantProp: number;
  unimporantProp: number
}

export default class Child extends Component<ChildProps> {

  name = 'Child'; // implicit type assignment / type inference

  shouldComponentUpdate(nextProps:ChildProps) {
    return (nextProps.importantProp != this.props.importantProp)
  }

  componentDidUpdate() {console.log('[Re-render] - componentDidUpdate()')}

  render() {
    return (
      <div className="component">
        <p className="component__name"> {`${this.name} component`} </p>
        <p>Re-renders only if important prop changed</p>
        <p>Important prop: {this.props.importantProp}</p>
        <p>Unimportant prop: {this.props.unimporantProp}</p>
      </div>
    )
  }
}