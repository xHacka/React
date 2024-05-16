import { useState, useEffect } from 'react';
import { Bar, TodoList } from '..';
import './App.scss';


const CACHE = 'tasks';
const DEFAULTS = [
  // { id: '1', text: 'Note #1', completed: true, hidden: false },
  // { id: '2', text: 'Note #2', completed: false, hidden: false },
];

function load(key) { // 76416854
  const item = window.sessionStorage.getItem(key);
  return item !== null ? JSON.parse(item) : DEFAULTS;
}

export const App = () => {
  const [tasks, setTasks] = useState(() => load(CACHE));

  useEffect(() => {
    sessionStorage.setItem(CACHE, JSON.stringify(tasks));
  }, [tasks]);

  const taskSearchHandler = (text) => {
    const pattern = new RegExp(text, 'i');
    setTasks(
      tasks.map((task) => {
        if (pattern.test(task.text)) {
          task.hidden = false;
        } else {
          task.hidden = true;
        }
        return task;
      })
    );
  };

  const taskFilterHandler = (state) => {
    setTasks(
      tasks.map((task) => {
        if (task.completed == state) {
          task.hidden = true
        } else {
          task.hidden = false
        }
        return task
      })
    )
  }

  const taskCreateHandler = (task) => {
    const taskIndex = tasks.findIndex(task_ => task_.id === task.id);
    if (taskIndex !== -1) { // Update
      tasks[taskIndex] = task
      setTasks([...tasks]);
    } else { // Add
      setTasks([...tasks, task]);
    }
  };

  const taskDeleteHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const taskToggleHandler = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return (
    <>
      <h1 className='title'>Todo list</h1>
      <Bar
        searchHandler={taskSearchHandler}
        filterHandler={taskFilterHandler}
      />
      <TodoList
        tasks={tasks}
        createHandler={taskCreateHandler}
        toggleHandler={taskToggleHandler}
        deleteHandler={taskDeleteHandler}
      />
    </>
  );
}
 
