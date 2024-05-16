import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";

import "./ToDoList.css";
import { todoActions, todoSelector } from "../../redux/reducers/todoReducer";

function ToDoList() {
  const todos = useSelector(todoSelector);
  const disptach = useDispatch();

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                disptach(todoActions.toggleTodo(index));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
