import React, { Component } from 'react'
import Todo from './Todo';

export class TodoList extends Component {
    state = {
        todos: [
            { id: 1, title: 'One'},
            { id: 2, title: 'Two'},
            { id: 3, title: 'Three'},
            { id: 4, title: 'Four'},
            { id: 5, title: 'Five'}
        ],
        addTodoText: ''
    }

    addTodo = () => {
        this.setState((state) => ({
          todos: [
            ...state.todos,
            { id: state.todos.length + 1, title: state.addTodoText }
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

    completeHandler = (id, e) => {
        let todos = [ ...this.state.todos ];
        todos.forEach(todo => {
            if (todo.id === id) {
                todo.completed = e.target.checked;
            }
        });
        this.setState({
            todos
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
                            deleteTodo={this.deleteTodo.bind(this, todo.id)}
                            completeHandler={this.completeHandler.bind(this, todo.id)} 
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
