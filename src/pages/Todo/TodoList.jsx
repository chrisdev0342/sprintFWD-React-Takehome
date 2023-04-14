import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    const { todos } = props;
    const { deleteTodoProps, setUpdate } = props;
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodoProps={deleteTodoProps}
                    setUpdate={setUpdate}
                />
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.isRequired,
};

TodoList.propTypes = {
    deleteTodoProps: PropTypes.func.isRequired,
    setUpdate: PropTypes.func.isRequired,
};

export default TodoList;