import React, { useState } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import styles from './Todo.module.css';

const TodoContainer = () => {
    const [todos, setTodos] = useState([]);

    const delTodo = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)]);
    };

    const addTodoItem = (title) => {
        const newTodo = {
            id: new Date().getTime(),
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    // eslint-disable-next-line no-param-reassign
                    todo.title = updatedTitle;
                }
                return todo;
            }),
        );
    };

    return (
        <div className={styles.container}>
            <InputTodo addTodoProps={addTodoItem} />
            <TodoList
                todos={todos}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate}
            />

        </div>
    );
};

export default TodoContainer;