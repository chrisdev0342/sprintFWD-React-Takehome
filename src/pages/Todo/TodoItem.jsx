import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Todo.module.css';

const TodoItem = (props) => {
    const [editing, setEditing] = useState(false);

    const { todo, index } = props;
    const { completed, id, title } = todo;
    const { deleteTodoProps, setUpdate } = props;

    const handleEditing = () => {
        setEditing(true);
    };
    const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
            setEditing(false);
        }
    };

    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
    };

    const viewMode = {};
    const editMode = {};
    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }

    return (
        <li className={styles.item}>
            <div className={styles.itemList} style={viewMode}>

                <span style={completed ? completedStyle : null}> {index + 1}. {title}</span>
                <div>
                    <button type="button" onClick={() => deleteTodoProps(id)}>
                        delete
                    </button>
                    <button type="button" onClick={handleEditing}>
                        Edit
                    </button>
                </div>
            </div>
            <div className={styles.updateInputContainer}>
                <input
                    type="text"
                    style={editMode}
                    className={styles.textInput}
                    value={title}
                    onChange={(e) => {
                        setUpdate(e.target.value, id);
                    }}
                    onKeyDown={handleUpdatedDone}
                />
                <button style={editMode} onClick={() => setEditing(false)}>update</button>
            </div>
        </li>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.isRequired,
    index: PropTypes.isRequired
};

TodoItem.propTypes = {
    deleteTodoProps: PropTypes.func.isRequired,
    setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;