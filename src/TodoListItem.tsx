import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';
import { useTodoDispatch } from './TodoContext';

interface TodoItemProps {
    todoItem: {
        id: number;
        text: string;
        checked: boolean;
    };
}

const TodoListItem: React.FC<TodoItemProps> = ({ todoItem }) => {
    const { id, text, checked } = todoItem;
    const dispatch = useTodoDispatch();

    return (
        <div className='TodoListItem'>
            <div
                className={cn('checkbox', { checked })}
                onClick={() => dispatch({ type: 'TOGGLE', id })}
            >
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={() => dispatch({ type: 'REMOVE', id })}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;
