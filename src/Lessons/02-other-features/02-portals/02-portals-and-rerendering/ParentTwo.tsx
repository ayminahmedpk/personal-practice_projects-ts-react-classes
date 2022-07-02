import React from "react";

type ParentTwoProps = {
  setParentTwoMounted: () => void;
}

type ParentTwoState = {
  count: number;
}

class ParentTwo extends React.Component<ParentTwoProps, ParentTwoState> {

  constructor(props:ParentTwoProps) {
    super(props)
    this.state = { count: 0 }
  }
  
  name: string = "ParentTwo";  // explicit type assignment

  componentDidMount() {this.props.setParentTwoMounted();}

  updateState = () => {this.setState({count: Math.floor(Math.random() * 100)})}

  render() {
    return (
      <div className="component">
        <p className="component__name"> {`${this.name} component`} </p>
        <p>ParentTwo count: {this.state.count}</p>
        <button onClick={this.updateState}>Update</button>
        <div className="portal"></div>
      </div>
    )
  }
}


export default ParentTwo;