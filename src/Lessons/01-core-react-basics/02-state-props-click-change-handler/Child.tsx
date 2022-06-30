import React from "react";

type ChildProps = {
  countObject : {
    count: number,
    increment: (event: React.MouseEvent<HTMLButtonElement>) => void
    decrement: (event: React.MouseEvent<HTMLButtonElement>) => void
  }
  textObject : {
    text: string,
    textChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  }
}

export default class Child extends React.Component<ChildProps> {
  name = 'Child';
  render() {
    return (
      <div className="component">
        <p className="component__name">{`${this.name} component`}</p>
        <p>Prop count: {this.props.countObject.count}</p>
        
          <input
            type="text"
            value={this.props.textObject.text}
            onChange={this.props.textObject.textChangeHandler}
          />
        
      </div>
    )
  }
}