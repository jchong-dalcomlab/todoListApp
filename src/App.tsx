import React, {useEffect, useState} from 'react'
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import {TodoProvider} from "./TodoContext";

interface Todo {
    id: number;
    text: string;
    checked: boolean;
}

interface UserTodo {
    userName: string;
    userId: number;
    todos: Todo[];
}

const App: React.FC = () => {

    const initialAllData: UserTodo[] = [
        {
            userName: '홍길동',
            userId: 1,
            todos: [
                {
                    id: 1,
                    text: '사용자 인터페이스 구성',
                    checked: true,
                },
                {
                    id: 2,
                    text: '사용자 인터페이스 스타일링',
                    checked: true,
                },
                {
                    id: 3,
                    text: '비즈니스 로직 구현',
                    checked: false,
                },
            ],
        },
        {
            userName: '심청이',
            userId: 2,
            todos: [
                {
                    id: 1,
                    text: '신입사원 인사카드 생성',
                    checked: false,
                },
                {
                    id: 2,
                    text: '전산장비 정리',
                    checked: false,
                },
                {
                    id: 3,
                    text: '세금계산서 발행',
                    checked: false,
                },
            ],
        },
    ];

    const [userKey, setUserKey] = useState<number>(0);
    const [allUsersTodos, setAllUsersTodos] = useState<UserTodo[]>(initialAllData);

    const onSelect = (key: string): void => {
        console.log(`Selected Key: ${key}`);
        setUserKey(parseInt(key, 10)-1);
    }

    function getOnUpdateTodos(): (updatedTodos: Todo[]) => void {
        return (updatedTodos: Todo[]): void => {
            const newUsers = [...allUsersTodos];
            newUsers[userKey].todos = updatedTodos;
            setAllUsersTodos(newUsers);
        };
    }

    return (
        <TodoProvider
            initialTodos={allUsersTodos[userKey].todos}
            onUpdateTodos={getOnUpdateTodos()}
        >
            <TodoTemplate allUsersTodos={allUsersTodos} onSelect={onSelect}>
                <TodoInsert />
                <TodoList />
            </TodoTemplate>
        </TodoProvider>
    );
}

export default App;