import React, {useCallback, useRef, useState} from 'react'
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

import {TodoProvider} from "./TodoContext";

const App = () => {

    const initialTodos = [
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
    ];

    return (
        <TodoProvider initialTodos={initialTodos}>
            <TodoTemplate>
                <TodoInsert />
                <TodoList />
            </TodoTemplate>
        </TodoProvider>
    );
}

export default App;
