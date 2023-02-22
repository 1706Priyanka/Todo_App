import React from "react";
import { Button, Input } from "@mui/material";
import { addTodos } from "../redux/todoSlice";
import { connect } from "react-redux";

import AddIcon from "@mui/icons-material/Add";

const mapState = (state) => {
  return {
    todos: state,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

//input-field, button using class based component

class Todo extends React.Component {
  constructor(props) {
    super(props);
    //initialing the state
    this.state = { todoInput: "" };
  }

  //updating the state
  updateTodoInput = (todoInput) => {
    this.setState({ todoInput });
  };

  //adding the todo
  addUpdatedTodo = () => {
    if (this.state.todoInput === "") {
      alert("Input field is empty");
    } else {
      this.props.addTodo({
        id: new Date().getTime().toString(36),
        item: this.state.todoInput,
        completed: false,
      });
      this.setState({ todoInput: "" });
    }
  };

  render() {
    return (
      <>
        <div>
          <h3
            style={{
              color: "white",
              fontFamily: "Georgia, serif",
              fontSize: "x-large",
            }}
          >
            What needs to be done?
          </h3>
        </div>
        <div>
          <Input
            sx={{ color: "white" }}
            value={this.state.todoInput}
            onChange={(e) => this.updateTodoInput(e.target.value)}
            placeholder="📝 Enter todo..."
            required
          />
          <Button
            variant="contained"
            size="small"
            onClick={this.addUpdatedTodo}
            startIcon={<AddIcon />}
          >
            TODO
          </Button>
        </div>
        <br />
      </>
    );
  }
}

export default connect(mapState, mapDispatch)(Todo);
