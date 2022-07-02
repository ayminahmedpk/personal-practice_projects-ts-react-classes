import React from "react";

import Child from "./Child";

class Parent extends React.Component {
  
  name: string = "Parent";  // unnecessary explicit type assignment

  render() {
    return (
      <div className="component">
        <p className="component__name"> {`${this.name} component`} </p>
        <Child/>
      </div>
    )
  }
}


export default Parent;