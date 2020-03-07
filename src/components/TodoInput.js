import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    const { item, handelChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3" onSubmit={handleSubmit}>
        <form >
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>

            <input
              type="text"
              className="form-control text-capitalize"
              value={item}
              onChange={handelChange}
              placeholder=" Add todo item"
            />
          </div>
          <button type="submit" className="btn  btn-block btn-primary mt-3">Add Item</button>
        </form>
      </div>
    );
  }
}
export default TodoInput;
