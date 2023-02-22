import "./App.css";
import Header from "./components/Header";
import ShowTodo from "./components/ShowTodo";
import Todo from "./components/Todo";
import "./css/todo.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <ShowTodo />
    </div>
  );
}

export default App;
