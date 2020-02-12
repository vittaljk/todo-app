import React, { Component } from 'react'
import Todo from './Todo';

export class TodoList extends Component {
    state = {
        todos: [
            { id: 1, title: 'One', completed: false},
            { id: 2, title: 'Two', completed: false},
            { id: 3, title: 'Three', completed: false},
            { id: 4, title: 'Four', completed: false},
            { id: 5, title: 'Five', completed: false},
        ],
        addTodoText: ''
    }

    addTodo = () => {
        this.setState((state) => ({
          todos: [
            ...state.todos,
            { id: Date.now(), title: state.addTodoText }
          ],
          addTodoText: ''
        }));
    }

    deleteTodo = id => {
        let todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({
            todos
        });
    }

    completeTodo = (id, completed) => {
        const { todos } = this.state;
        // TODO: move it to function
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed } ;
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        })
    }

    handleTodoTextChange = e => {
        this.setState({
            addTodoText: e.target.value
        })
    }
    render() {
        return (
            <>
                <div>
                    {this.state.todos && this.state.todos.map(todo => (
                        <Todo 
                            key={todo.id} 
                            todo={todo}
                            onDeleteTodo={this.deleteTodo}
                            onComplete={this.completeTodo} 
                        />
                    ))}
                </div>
                <input type="text" value={this.state.addTodoText} onChange={this.handleTodoTextChange}/>
                <button onClick={this.addTodo}>Add todo</button>
            </>
        )
    }
}

export default TodoList
