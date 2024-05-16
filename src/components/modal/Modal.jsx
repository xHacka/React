import { useState } from "react";
import "./Modal.scss";

export const Modal = ({ title, text, toggleModal, createHandler }) => {
    const [todo, setTodo] = useState(text);
    const id = title[0] === '#' ? title.split(' ')[1].trim() : null

    const createTodo = (text) => {
        text = text.trim();
        if (!text) {
            return;
        }   
        createHandler({
            id: id || Math.random().toString(16).slice(2),
            text: text,
            completed: false,
            hidden: false,
        });
        toggleModal();
    };

    return (
        <div>
            <div className="modal-overlay" onClick={toggleModal}>
                <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <span className="close" onClick={toggleModal}>
                        &times;
                    </span>
                    <h1>{title}</h1>
                    <input
                        type="text"
                        name="modal-input"
                        className="modal-input"
                        autoFocus
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button
                        className="modal-btn modal-btn-cancel"
                        type="button"
                        onClick={toggleModal}
                    >
                        Cancel
                    </button>
                    <button
                        className="modal-btn modal-btn-apply"
                        type="button"
                        onClick={() => createTodo(todo)}
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};
