import React from "react";
import MenuList from "./MenuList";
import { gettodos, deltodos, addtodos } from "../services/gettodos";
import ToDo from "./Todo";

class Menu extends React.Component {
  state = {
    todos: [],
  };
  async componentDidMount() {
    const todos = await gettodos();
    this.setState({ todos: todos.data });
  }
  handleDelete = (id) => {
    deltodos(id).then((res) =>
      this.setState({
        todos: [...this.state.todos.filter((todo) => todo.id !== id)],
      })
    );
  };
  handleMarked = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  handleCreated = title => {
    addtodos(title).then((res) => {
      this.setState({ todos: [...this.state.todos, res.data] });
    });
  };
  handleUpdate = (id,title) => {
    let removeOld = this.state.todos.filter(todo=> todo.id !== id)
    addtodos(id,title).then((res) => {
      this.setState({todos: [...removeOld,res.data]})
    });
  };
  render() {
    return (
      <div className="card_container">
        <ToDo onAdd={this.handleCreated} />
        {this.state.todos.reverse().map((to) => (
          <MenuList
            onMark={this.handleMarked}
            onHandle={this.handleDelete}
            onUpdate={this.handleUpdate}
            key={to.id}
            todos={to}
          />
        ))}
      </div>
    );
  }
}
export default Menu;
