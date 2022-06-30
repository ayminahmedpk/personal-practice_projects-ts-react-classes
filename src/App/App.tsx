import React from "react";

import Parent from "../Lessons/01-core-react-basics/03-children-outside-jsx/Parent";

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Parent/>
      </>
    )
  }
}