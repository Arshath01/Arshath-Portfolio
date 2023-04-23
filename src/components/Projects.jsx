import React, { useState } from 'react';
import TodoList from './TodoList';
import TaskModal from './ListModal';

const Project = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showEditListModal, setShowEditListModal] = useState(false);

  const toggleAddTaskModal = () => setShowAddTaskModal(!showAddTaskModal);
  const toggleEditListModal = () => setShowEditListModal(!showEditListModal);

  const personalTasks = [
    { id: 'task1', name: 'Buy groceries', completed: false },
    { id: 'task2', name: 'Finish essay', completed: true },
    { id: 'task3', name: 'Go to gym', completed: false },
  ];

  const workTasks = [
    { id: 'task4', name: 'Reply to emails', completed: false },
    { id: 'task5', name: 'Prepare presentation', completed: false },
    { id: 'task6', name: 'Call client', completed: true },
    { id: 'task7', name: 'Finish report', completed: false },
  ];

  return (
    <div>
      <button onClick={toggleAddTaskModal}>Add Task</button>
      <button onClick={toggleEditListModal}>Edit Lists</button>
      <TodoList listName="Personal" tasks={personalTasks} />
      <TodoList listName="Work" tasks={workTasks} />
      {showAddTaskModal && <TaskModal onClose={toggleAddTaskModal} />}
      {showEditListModal && <TaskModal onClose={toggleEditListModal} />}
    </div>
  );
};

export default Project;
