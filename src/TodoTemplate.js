import React from 'react';
import './TodoTemplate.scss'

const TodoTemplate = ({children}) => {

    return (
        <div className='TodTemplate'>
            <div className='app-title'>일정관리</div>
            <div className='content'>{children}</div>
        </div>

    );
}

export default TodoTemplate;