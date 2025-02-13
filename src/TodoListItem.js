import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md'
import './TodoListItem.scss'
import cn from 'classnames'
import {useTodoDispatch} from "./TodoContext";

const TodoListItem = ({todoItem}) => {

    const {id, text, checked} = todoItem;

    const dispatch = useTodoDispatch();

    return (
        <div className='TodoListItem'>
            <div className={cn('checkbox', {checked})} onClick={() => dispatch({type: "TOGGLE", id: id})} >
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={()=>dispatch({type: "REMOVE", id: id})}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
}

export default TodoListItem;