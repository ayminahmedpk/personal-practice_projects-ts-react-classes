import React from "react";
import ReactDOM from "react-dom";

import Child from "./Child";

type ParentOneProps = {
  isSiblingMounted: boolean;
}

class ParentOne extends React.Component<ParentOneProps> {
  
  name: string = "ParentOne";  // explicit type assignment
  
  renderChild = () => {
    // ! means the value will never be null
    // we can have this confidence, because we are checking before rendering
    // through the isSiblingMounted prop
    let portal = document.querySelector('.portal')!;
    return (
      ReactDOM.createPortal(
        <Child/>,
        portal
      )
    )
  }

  render() {
    return (
      <div className="component">
        <p className="component__name"> {`${this.name} component`} </p>
        {this.props.isSiblingMounted? this.renderChild() : '' }
      </div>
    )
  }
}


export default ParentOne;