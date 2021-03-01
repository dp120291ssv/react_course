import React, { Component } from "react";

export default class Items extends Component {
  render() {
    return (
      <div id="container">
        <ul>
          {this.props.todos.map((el) => {
            return <li key={el.id} className={(el.completed) ? 'completed' : 'active'}>{el.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
