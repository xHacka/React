import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TodoItem.scss";

export const TodoItem = ({ task, toggleHandler, deleteHandler, editHandler }) => {
    return (
        <div className="todo">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleHandler(task.id)}
            />
            <p className={task.completed ? "checked" : ""}>{task.text}</p>
            <div className="todo-btns">
                <FontAwesomeIcon
                    className="todo-btn"
                    icon={faPencil}
                    onClick={() => editHandler(task)}
                />
                <FontAwesomeIcon
                    className="todo-btn"
                    icon={faTrash}
                    onClick={() => deleteHandler(task.id)}
                />

            </div>
        </div>
    );
};
