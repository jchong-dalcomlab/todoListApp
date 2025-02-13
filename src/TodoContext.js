import React, {createContext, useContext, useReducer, useRef} from 'react';

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

function todoReducer(state, action) {
    switch (action.type) {
        case 'INSERT' :
            return state.concat(action.todo);
        case 'REMOVE' :
            return state.filter(todo => todo.id !== action.id);
        case 'TOGGLE' :
            return state.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked} : todo );
        default :
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export function TodoProvider({initialTodos, children}) {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);
    const todoIndex = useRef(initialTodos.length + 1);

    return (
        <TodoStateContext.Provider value={todos}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={todoIndex}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

// Custom Hooks
export function useTodoState() {
    return useContext(TodoStateContext);
}

export function useTodoDispatch() {
    return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
    return useContext(TodoNextIdContext);
}