import React from "react";

import ParentOne from "./ParentOne";
import ParentTwo from "./ParentTwo";

type GrandparentState = {
  didParentTwoMount: boolean;
}

class Grandparent extends React.Component<{}, GrandparentState> {

  constructor(props:{}) {
    super(props)
    this.state = {didParentTwoMount: false}
  }

  setParentTwoMounted = () => {this.setState({didParentTwoMount: true})}
  
  name: string = "Grandparent";  // unnecessary explicit type assignment

  render() {
    return (
      <div className="component">
        <p className="component__name"> {`${this.name} component`} </p>
        <p>Showing that rerenders are based internal React Tree, not DOM Tree </p>
        <button onClick={() => {this.forceUpdate()}}>Update</button>
        <ParentOne isSiblingMounted={this.state.didParentTwoMount}/>
        <ParentTwo setParentTwoMounted={this.setParentTwoMounted} />
      </div>
    )
  }
}


export default Grandparent;