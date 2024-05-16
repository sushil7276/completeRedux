import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../../redux/actions/todoActions";

import "./ToDoForm.css";
import { todoActions } from "../../redux/reducers/todoReducer";
import {
  notificationSelector,
  resetNotification,
} from "../../redux/reducers/notoficationReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);

  if (message) {
    setTimeout(() => {
      dispatch(resetNotification());
    }, 3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    dispatch(todoActions.addTodo(todoText));
  };

  return (
    <div className="container">
      {/* conditionally show the below div with alert message */}
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
