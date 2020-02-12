import React, { PureComponent } from "react";

class Todo extends PureComponent{
  handleDelete = () => {
    const { onDeleteTodo, todo } = this.props;
    onDeleteTodo(todo.id);
  }

  handleCheckboxClick = (event) => {
    const {  todo, onComplete } = this.props;
    onComplete(todo.id, event.target.checked)
  }

  render() {
    const { todo } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          name={todo.title}
          id={todo.id}
          checked={todo.completed}
          onChange={this.handleCheckboxClick}
        />
        &nbsp;&nbsp;
        <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>&nbsp;&nbsp;
        <u onClick={this.handleDelete}>delete</u>
      </div>
    );
  }
}

export default Todo;
// TODO: add proptypes