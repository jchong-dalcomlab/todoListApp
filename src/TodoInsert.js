import React, {useCallback, useState} from 'react';
import {MdAdd} from 'react-icons/md'
import './TodoInsert.scss'

const TodoInsert = ({onInsert}) => {

    const [value, setValue] = useState('');

    const onChange = useCallback(eventArg => {
        setValue(eventArg.target.value);
    }, []);

    const onSubmit = useCallback(eventArg => {
        onInsert(value);
        setValue('');
        eventArg.preventDefault();
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