import React, { Component } from "react";
import uuid, { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
class App extends Component {
  state = {
    items: [
      // { id: 1, title: "wake up" },
      // { id: 1, title: "wake breakfast" }
    ],
    id: uuidv4(),
    item: "",
    EditItem: false
  };

  handelChange = e => {
  this.setState({
    item:e.target.value
  })
  // console.log(this.state.item)
  };
  handelSubmit = (e) => {
    e.preventDefault();
    const newItem={
      item:this.state.item,
      id:this.state.id,
    }
    const uppdateItems=[...this.state.items, newItem];
    this.setState({
      items:uppdateItems,
      item:"",
      id:uuidv4(),
      EditItem:false
    })
  };
  clearList = () => {
    console.log("clear List");
  };
  handelDelete = id => {
    console.log(`handel delete ${id}`);
  };
  handelEdit = id => {
    console.log(`handel edit ${id}`);
  };

  render() {
    console.log(this.state.items)
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center"> Todo Input </h3>
            <TodoInput
              item={this.state.item}
              handelChange={this.handelChange}
              handelSubmit={this.handelSubmit}
              EditItem={this.state.EditItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handelDelete={this.handelDelete}
              handelEdit={this.handelEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
