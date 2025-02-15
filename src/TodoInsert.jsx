import React, {useCallback, useState} from 'react';
import {MdAdd} from 'react-icons/md'
import './TodoInsert.scss'
import {useTodoDispatch, useTodoNextId} from "./TodoContext";

const TodoInsert = ({onInsert}) => {

    const [value, setValue] = useState('');
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onChange = useCallback(eventArg => {
        setValue(eventArg.target.value);
    }, []);

    const onSubmit = useCallback(eventArg => {
        eventArg.preventDefault();
        if(!value?.trim()) return;

        dispatch ({
            type: "INSERT",
            todo: {id: nextId.current, text: value, checked: false},
        });

        nextId.current += 1;
        setValue("");

    }, [onInsert, value]);

    return(
        <form className='TodoInsert' onSubmit={onSubmit}>
        <input
            placeholder='Insert todo item ...'
            value = {value}
            onChange = {onChange}
            />
        <button type='submit'>
            <MdAdd/>
        </button>
        </form>
    );
}

export default TodoInsert;