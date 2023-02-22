import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/todoSlice";
import TodoList from "./TodoList";

const mapState = (state) => {
  return {
    todos: state,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

function ShowTodo(props) {
  const [todoSort, setTodoSort] = useState("active");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(props.todos.filter((todos) => !todos.completed).length);
  }, [props.todos]);

  return (
    <div>
      <p
        style={{
          color: "white",
          fontFamily: "Georgia, serif",
          fontSize: "20px",
        }}
      >
        {count} tasks remaining
      </p>
      <div>
        <button
          className="btn active"
          onClick={() => {
            setTodoSort("active");
          }}
        >
          Show active Tasks
        </button>

        <button
          className="btn complete"
          onClick={() => setTodoSort("completed")}
        >
          Show Completed Tasks
        </button>
        <button className="btn all" onClick={() => setTodoSort("all")}>
          Show all Tasks
        </button>
      </div>

      <ul>
        {props.todos.length > 0 && todoSort === "active"
          ? props.todos.map((item) => {
              return (
                item.completed === false && (
                  <>
                    <TodoList
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  </>
                )
              );
            })
          : null}

        {props.todos.length > 0 && todoSort === "completed"
          ? props.todos.map((item) => {
              return (
                item.completed === true && (
                  <TodoList
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}

        {props.todos.length > 0 && todoSort === "all"
          ? props.todos.map((item) => {
              return (
                <TodoList
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default connect(mapState, mapDispatch)(ShowTodo);
