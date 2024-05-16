import { useState } from "react";
import { TodoItem, Modal } from "..";
import detective from '../../assets/detective.svg'
import "./TodoList.scss";

export const TodoList = ({ tasks, createHandler, toggleHandler, deleteHandler }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const toggleModal = () => {
        setIsOpen(!isOpen);
        setTitle("New Note");
        setText("")
    };

    const editHandler = (task) => {
        toggleModal()
        setTitle(`# ${task.id}`);
        setText(task.text)
    }

    return (
        <div className="todos">
            {tasks.length !== 0 ?
                tasks.map((task) => {
                    if (!task.hidden) {
                        return (
                            <TodoItem
                                key={task.id}
                                task={task}
                                toggleHandler={toggleHandler}
                                deleteHandler={deleteHandler}
                                editHandler={editHandler}
                            />
                        );
                    }
                })
                :
                <img src={detective} alt="detective" className="todos-empty"/>
            }
            <button className="btn-new" type="button" onClick={toggleModal}>
                +
            </button>
            {isOpen && (
                <Modal
                    title={title}
                    text={text}
                    toggleModal={toggleModal}
                    createHandler={createHandler}
                />
            )}
        </div>
    );
};
