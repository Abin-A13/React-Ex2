import React from "react";

const UpTodo = () => {
  return (
    <form onSubmit={this.onSubmit} className="addform">
      <input
        type="text"
        name="title"
        placeholder="ADD TASK ...."
        onChange={this.onChange}
        value={this.state.inputValue}
      />
      <input type="submit" value="Update" />
    </form>
  );
};

export default UpTodo;
