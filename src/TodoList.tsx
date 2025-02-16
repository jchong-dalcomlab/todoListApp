import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { useTodoState } from './TodoContext';

interface Todo {
    id: number;
    text: string;
    checked: boolean;
}

const TodoList: React.FC = () => {
    const todos: Todo[] = useTodoState();

    return (
        <div className='TodoList'>
            {todos.map((todo) => (
                <TodoListItem key={todo.id} todoItem={todo} />
            ))}
        </div>
    );
};

export default TodoList;