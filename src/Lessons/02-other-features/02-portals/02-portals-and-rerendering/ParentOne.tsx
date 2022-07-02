import React from "react";
import ReactDOM from "react-dom";

import Child from "./Child";

type ParentOneProps = {
  isSiblingMounted: boolean;
}

type ParentOneState = {
  count: number;
}

class ParentOne extends React.Component<ParentOneProps, ParentOneState> {

  constructor(props:ParentOneProps) {
    super(props)
    this.state = { count: 0 }
  }
  
  name: string = "ParentOne";  // explicit type assignment

  updateState = () => {this.setState({count: Math.floor(Math.random() * 100)})}
  
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
        <p>ParentOne count: {this.state.count}</p>
        <button onClick={this.updateState}>Update</button>
        {this.props.isSiblingMounted? this.renderChild() : '' }
      </div>
    )
  }
}


export default ParentOne;