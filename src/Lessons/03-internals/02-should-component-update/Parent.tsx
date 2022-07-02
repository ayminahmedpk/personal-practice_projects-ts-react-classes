import React from "react";

import Child from "./Child";

type ParentState = {
  fieldOne: number;
  fieldTwo: number;
}

class Parent extends React.Component<{}, ParentState> {
  constructor(props: {}) {
    super(props)
  
    this.state = {
       fieldOne: 0,
       fieldTwo: 0,
    }
  }

  updateFieldOne = () => {this.setState({
    ...this.state,
    fieldOne: Math.floor(Math.random()*100),
  })}
  
  updateFieldTwo = () => {this.setState({
    ...this.state,
    fieldTwo: Math.floor(Math.random()*100),
  })}
  
  name: string = "Parent";  // explicit type assignment

  render() {
    return (
      <div className="component">
        <p className="component__name"> {`${this.name} component`} </p>
        <button onClick={this.updateFieldOne}>Update field one</button>
        <button onClick={this.updateFieldTwo}>Update field two</button>
        <p>Field one: {this.state.fieldOne}</p>
        <p>Field two: {this.state.fieldTwo}</p>
        <Child
          importantProp  = {this.state.fieldOne}
          unimporantProp = {this.state.fieldTwo}
        />
      </div>
    )
  }
}


export default Parent;