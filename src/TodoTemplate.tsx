import React, {ReactNode} from 'react';
import './TodoTemplate.scss'
import UsersDropDown from "./UsersDropDown";

interface User {
    userId: number;
    userName: string;
}

interface TodoTemplateProps {
    allUsersTodos: User[];
    onSelect: (userId: string) => void;
    children: ReactNode;
}

const TodoTemplate: React.FC<TodoTemplateProps> = ({ allUsersTodos, onSelect, children }) => {

    return (
        <div className='TodTemplate'>
            <div className='app-title'><UsersDropDown users={allUsersTodos} onSelect={onSelect} />&nbsp;일정관리</div>
            <div className='content'>{children}</div>
        </div>
    );
}

export default TodoTemplate;