import React, { Component } from "react";
import "./List.css";
export default class List extends Component {
  state = {
    input: "",
    items: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input:""
    });
  };

  deleteItem = key => {
    const allItems = this.state.items;
    allItems.splice(key,1);
    this.setState({
      items:allItems      
    })
  };
  render() {
    const { input, items } = this.state;
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Add List</h1>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="enter the text"
          ></input>
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i className="fas fa-trash" onClick={()=>this.deleteItem(index)}></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
