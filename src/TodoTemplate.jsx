import React from 'react';
import './TodoTemplate.scss'
import UsersDropDown from "./UsersDropDown";

const TodoTemplate = ({allUsersTodos, onSelect, children}) => {

    return (
        <div className='TodTemplate'>
            <div className='app-title'><UsersDropDown users={allUsersTodos} onSelect={onSelect} />&nbsp;일정관리</div>
            <div className='content'>{children}</div>
        </div>
    );
}

export default TodoTemplate;