import React, { Component } from 'react'

type ChildState = {count: number;};

export default class Child extends Component<{}, ChildState> {

  constructor(props:{}) {
    super(props)
  
    this.state = { count: 0 }
  }

  name = 'Child'; // implicit type assignment / type inference

  updateState = () => {this.setState({count: Math.floor(Math.random()*100)});}

  componentDidMount()    {console.log('[Mount]\t\t\t- componentDidMount()');}

  componentDidUpdate()   {console.log('[Re-render]\t\t- componentDidUpdate()');}
  
  componentWillUnmount() {console.log('[Unmount]\t\t- componentWillUnmount()');}
  
  // Can only be implemented once, otherwise leads to error
  // componentDidUpdate() {console.log('[Re-render] - componentDidUpdate()');}
  
  render() {
    return (
      <div className="component">
        <p className="component__name"> {`${this.name} component`} </p>
        <p>Inspect console for lifecycle methods</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.updateState}>Update State</button>
      </div>
    )
  }
}