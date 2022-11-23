import React from "react";

class ToDo extends React.Component {
  state = {
    inputValue: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.inputValue)
    this.setState({inputValue:''})
  };
  onChange = (e) => this.setState({ inputValue: e.target.value });
  render() {
    return (
      <form onSubmit={this.onSubmit} className="addform">
        <input
          type="text"
          name="title"
          placeholder="ADD TASK ...."
          onChange={this.onChange}
          value={this.state.inputValue}
        />
        <input type="submit" value="ADD" />
      </form>
    );
  }
}

export default ToDo;
