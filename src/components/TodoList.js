import React, { useRef } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, List, ListItem } from "@mui/material";

const TodoList = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const todoInputRef = useRef(true);

  const changeFocus = () => {
    todoInputRef.current.disabled = false;
    todoInputRef.current.focus();
  };

  const updateList = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      todoInputRef.current.disabled = true;
    }
  };

  //after adding the todo I have provided 3 options
  //- editing the todo
  //-marking the as complete
  //-deleting the todo

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 440,
        margin: "auto",
        backgroundColor: "whitesmoke",
        boxShadow: "10px 5px 5px lightblue",
        borderRadius: "10px",
      }}
    >
      <ListItem key={item.id} className="card">
        <textarea
          className="text"
          ref={todoInputRef}
          disabled={todoInputRef}
          defaultValue={item.item}
          variant="filled"
          onKeyUp={(e) => {
            updateList(item.id, todoInputRef.current.defaultValue, e);
            //console.log(inputRef.current.defaultValue);
          }}
        />

        <div className="btns">
          <Button
            onClick={() => changeFocus()}
            endIcon={<BorderColorIcon />}
          ></Button>
          {item.completed === false && (
            <Button
              style={{ color: "green" }}
              onClick={() => completeTodo(item.id)}
              endIcon={<CheckIcon />}
            ></Button>
          )}
          <Button
            style={{ color: "red" }}
            onClick={() => removeTodo(item.id)}
            endIcon={<ClearIcon />}
          ></Button>
        </div>
        {item.completed && <span className="completed">Task Completed ✅</span>}
      </ListItem>
    </List>
  );
};

export default TodoList;
