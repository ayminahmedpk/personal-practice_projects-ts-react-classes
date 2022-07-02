import React from "react";

type ParentTwoProps = {
  setParentTwoMounted: () => void;
}

class ParentTwo extends React.Component<ParentTwoProps> {
  
  name: string = "ParentTwo";  // explicit type assignment

  componentDidMount() {this.props.setParentTwoMounted();}

  render() {
    return (
      <div className="component">
        <p className="component__name"> {`${this.name} component`} </p>
        <div className="portal"></div>
      </div>
    )
  }
}


export default ParentTwo;