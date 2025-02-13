import React from 'react'
import TodoListItem from "./TodoListItem";
import './TodoList.scss'
import {useTodoState} from "./TodoContext";

const TodoList = () => {

    const todos = useTodoState();

    return (
        <div className='TodoList'>
            {
                todos.map(todo => (
                    <TodoListItem key={todo.id} todoItem={todo} />
                ))
            }
        </div>
    );
}

export default TodoList;