import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AddTodo } from './components/AddTodo';
import About from './components/pages/About';
import Header from './components/layouts/Header';
import Todo from './components/Todo';
import './App.css';

import Axios from 'axios';

function App() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    Axios.get(
      'http://jsonplaceholder.typicode.com/todos?_limit=10'
    ).then((res) => setTodo(res.data));
  }, [setTodo]);

  function addTodo(title) {
    Axios.post('http://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then((res) => {
        setTodo([...todos, res.data]);
      })
      .catch((e) => console.log('error', e));
  }

  function markComplete(id) {
    setTodo(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function delTodo(id) {
    Axios.delete(
      `http://jsonplaceholder.typicode.com/todos/${id}`
    ).then((res) => setTodo(todos.filter((todo) => todo.id !== id)));
  }

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={addTodo} />
                <Todo
                  todos={todos}
                  markComplete={markComplete}
                  delTodo={delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
