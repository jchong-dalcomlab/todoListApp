import React, { createContext, useContext, useEffect, useReducer, useRef, ReactNode, Dispatch } from 'react';

interface Todo {
    id: number;
    text: string;
    checked: boolean;
}

type Action =
    | { type: 'INSERT'; todo: Todo }
    | { type: 'REMOVE'; id: number }
    | { type: 'TOGGLE'; id: number }
    | { type: 'SET_TODOS'; todos: Todo[] };

const TodoStateContext = createContext<Todo[] | undefined>(undefined);
const TodoDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);
const TodoNextIdContext = createContext<React.MutableRefObject<number> | undefined>(undefined);

function todoReducer(state: Todo[], action: Action): Todo[] {
    switch (action.type) {
        case 'INSERT':
            return state.concat(action.todo);
        case 'REMOVE':
            return state.filter((todo) => todo.id !== action.id);
        case 'TOGGLE':
            return state.map((todo) => (todo.id === action.id ? { ...todo, checked: !todo.checked } : todo));
        case 'SET_TODOS':
            return action.todos;
        default:
            throw new Error(`Unhandled action type`);
    }
}

interface TodoProviderProps {
    initialTodos: Todo[];
    onUpdateTodos?: (todos: Todo[]) => void;
    children: ReactNode;
}

export function TodoProvider({ initialTodos, onUpdateTodos, children }: TodoProviderProps) {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);
    const todoIndex = useRef<number>(initialTodos.length + 1);

    useEffect(() => {
        onUpdateTodos?.(todos);
    }, [todos]);

    useEffect(() => {
        dispatch({ type: 'SET_TODOS', todos: initialTodos });
    }, [initialTodos]);

    return (
        <TodoStateContext.Provider value={todos}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={todoIndex}>{children}</TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState(): Todo[] {
    const context = useContext(TodoStateContext);
    if (!context) throw new Error('useTodoState must be used within a TodoProvider');
    return context;
}

export function useTodoDispatch(): Dispatch<Action> {
    const context = useContext(TodoDispatchContext);
    if (!context) throw new Error('useTodoDispatch must be used within a TodoProvider');
    return context;
}

export function useTodoNextId(): React.MutableRefObject<number> {
    const context = useContext(TodoNextIdContext);
    if (!context) throw new Error('useTodoNextId must be used within a TodoProvider');
    return context;
}
