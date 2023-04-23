import React from 'react';

const TodoList = ({title, count, tasks}) => {
  return (
    <div className="list-card bg-purple">
      <div className="list-card-header">
        <h2>{title}</h2>
        <span className="badge badge-secondary">{count} tasks</span>
      </div>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item">
            <input type="checkbox" id={task.id} name={task.id} checked={task.completed} />
            <label htmlFor={task.id}>{task.name}</label>
          </li>
        ))}
      </ul>
      <div className="list-card-footer">
        <button type="button" className="btn btn-light">Add Task</button>
        <button type="button" className="btn btn-light">Edit List</button>
      </div>
    </div>
  );
};

export default TodoList;
