import React from "react";

function Todo(props) {
  if (!props.todo) {
    return null;
  }
  return (
    <div>
      <input
        type="checkbox"
        name={props.todo.title}
        id={props.todo.id}
        onChange={props.completeHandler}
      />
      &nbsp;&nbsp;
      <span className={props.todo.completed ? 'completed' : ''}>{props.todo.title}</span>&nbsp;&nbsp;
      <u onClick={props.deleteTodo}>delete</u>
    </div>
  );
}

export default Todo;
