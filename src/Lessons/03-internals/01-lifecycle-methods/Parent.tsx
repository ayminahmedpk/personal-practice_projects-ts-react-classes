import React from "react";

import Child from "./Child";

type ParentState = {
  shouldChildExist: boolean;
}

class Parent extends React.Component<{}, ParentState> {

  constructor(props:{}) {
    super(props)
  
    this.state = { shouldChildExist: false }
  }

  toggleChild = () => {this.setState((state) => ({
    ...state,
    shouldChildExist: !state.shouldChildExist,
  }))}
  
  name: string = "Parent";  // explicit type assignment

  render() {
    return (
      <div className="component">
        <p className="component__name"> {`${this.name} component`} </p>
        <button onClick={this.toggleChild}>Toggle Child</button>
        {this.state.shouldChildExist? <Child/> : ''}
      </div>
    )
  }
}


export default Parent;