import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function Todo({ todos, markComplete, delTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={markComplete}
          delTodo={delTodo}
        />
      ))}
    </div>
  );
}

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todo;
