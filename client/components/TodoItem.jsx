import { useState } from "react";
import TodoStatus from "../utils/helper";

const TodoItem = ({ todo }) => {
  const [todoState, setTodoState] = useState(todo);
  const handleTodoState = () => {
    if (todoState.status === TodoStatus.Active) {
      setTodoState({ ...todoState, status: TodoStatus.Snoozed });
    } else if (todoState.status === TodoStatus.Snoozed) {
      setTodoState({ ...todoState, status: TodoStatus.Active });
    }
  };

  const handleIsCompleted = () => {
    if (todoState.status === TodoStatus.Active) {
      setTodoState({ ...todoState, status: TodoStatus.Completed });
    } else if (todoState.status === TodoStatus.Completed) {
      setTodoState({ ...todoState, status: TodoStatus.Active });
    }
  };

  const [todoTitle, setTodo] = useState(todoState.title);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const [isEditable, setEditable] = useState(false);
  const handleIsEditable = () => {
    setEditable(!isEditable);
  };

  return (
    <ul className="list-group list-group-horizontal rounded-0">
      <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
        <div className="form-check">
          <input
            className="form-check-input me-0"
            type="checkbox"
            id="flexCheckChecked2"
            aria-label="..."
            onClick={handleIsCompleted}
          />
        </div>
      </li>
      <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
        <div class="input-group">
          {isEditable ? (
            <>
              {" "}
              <input
                type="text"
                className={`form-control lead fw-normal text-monospace  ${
                  todoState.status === TodoStatus.Completed
                    ? "text-decoration-line-through"
                    : ""
                } ${
                  todoState.status === TodoStatus.Snoozed ? "text-muted" : ""
                } mb-0`}
                placeholder="edit todo"
                aria-label="Edit Todo"
                aria-describedby="basic-addon2"
                value={todoTitle}
                onChange={handleChange}
              />
              <div class="input-group-append">
                <button
                  class="btn btn-lg btn-outline-success mx-2"
                  type="button"
                >
                  <i
                    className="bi-save"
                    onClick={() => {
                      setTodoState({ ...todoState, title: todoTitle });
                      setEditable(!isEditable);
                    }}
                  ></i>
                </button>
                <button
                  class="btn btn-lg btn-outline-danger mx-2"
                  type="button"
                >
                  <i
                    className=""
                    onClick={() => {
                      setTodo("");
                      setTodoState({ ...todoState, title: todoTitle });
                      setEditable(!isEditable);
                    }}
                  >
                    X
                  </i>
                </button>
              </div>
            </>
          ) : (
            <p
              className={`lead fw-normal text-monospace  ${
                todoState.status === TodoStatus.Completed
                  ? "text-decoration-line-through"
                  : ""
              }  ${
                todoState.status === TodoStatus.Snoozed ? "text-muted" : ""
              } mb-0`}
            >
              {todoState.title}
            </p>
          )}
        </div>
      </li>
      <li className="list-group-item px-3 py-1 d-flex align-items-center border-0 bg-transparent">
        <div
          className={`py-2 px-3 me-2 border ${
            todoState.status === TodoStatus.Snoozed
              ? "border-warning"
              : todoState.status === TodoStatus.Active
              ? "border-success"
              : todoState.Completed === TodoStatus.Completed
              ? "border-info"
              : ""
          } rounded-3 d-flex align-items-center bg-light`}
        >
          <p className="small mb-0 ">
            <a
              className="btn"
              data-mdb-toggle="tooltip"
              title="Change state"
              onClick={handleTodoState}
            >
              <i className="mx-auto bi-hourglass text-primary"></i>
            </a>
          </p>
        </div>
      </li>
      <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
        <div className="d-flex flex-row justify-content-end mb-1">
          <a
            href="#!"
            className="text-info"
            data-mdb-toggle="tooltip"
            title="Edit todo"
          >
            <i className="bi-pencil me-3" onClick={handleIsEditable}></i>
          </a>
          <a
            href="#!"
            className="text-danger"
            data-mdb-toggle="tooltip"
            title="Delete todo"
          >
            <i className="bi-trash-alt"></i>
          </a>
        </div>
        <div className="text-end text-muted">
          <a
            href="#!"
            className="text-muted"
            data-mdb-toggle="tooltip"
            title="Created date"
          >
            <p className="small mb-0">
              <i className="bi-info me-2"></i>
              {String(todoState.date)}
            </p>
          </a>
        </div>
      </li>
    </ul>
  );
};
export default TodoItem;
