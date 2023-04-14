import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Todo.module.css';

const InputTodo = (props) => {
    const [inputText, setInputText] = useState({
        title: '',
    });

    const { addTodoProps } = props;

    const onChange = (e) => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.title.trim()) {
            addTodoProps(inputText.title);
            setInputText({
                title: '',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formConatiner}>
            <input
                type="text"
                className={styles.inputText}
                placeholder="Add todo..."
                value={inputText.title}
                onChange={onChange}
                name="title"
            />
            <button type="button" className={styles.inputSubmit} onClick={handleSubmit}>
                +
            </button>
        </form>
    );
};

InputTodo.propTypes = {
    addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;