import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import { useTodoDispatch, useTodoNextId } from './TodoContext';

interface TodoInsertProps {
    onInsert?: (text: string) => void;
}

const TodoInsert: React.FC<TodoInsertProps> = ({ onInsert }) => {
    const [value, setValue] = useState<string>('');
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }, []);

    const onSubmit = useCallback((event: React.FormEvent) => {
        event.preventDefault();
        if (!value.trim()) return;

        dispatch({
            type: 'INSERT',
            todo: { id: nextId.current, text: value, checked: false },
        });

        nextId.current += 1;
        setValue('');
    }, [dispatch, nextId, value]);

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input placeholder='Insert todo item ...' value={value} onChange={onChange} />
            <button type='submit'>
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;
