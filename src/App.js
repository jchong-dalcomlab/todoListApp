import React, {useCallback, useRef, useState} from 'react'
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

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

    const [todos, setTodos] = useState(
        initialTodos
    );

    const nextId = useRef(todos.length);

    const onInsert = useCallback(text => {
        const newTodo = {
            id: nextId.current,
            text: text,
            checked: false,
        };
        setTodos(todos.concat(newTodo));
        nextId.current += 1;
    }, [todos]);

    const onRemove = useCallback(id=> {
        const removedTodos = todos.filter(todo => todo.id !== id);
        setTodos(removedTodos);
    }, [todos]);

    const onToggle = useCallback(id=> {
        setTodos(
            todos.map(todo=>
                todo.id === id ? {...todo, checked: !todo.checked}: todo
            )
        );
    }, [todos]);

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
}

export default App;
