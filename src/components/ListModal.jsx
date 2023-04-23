import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TaskModal = ({isOpen, toggleModal}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Add Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label htmlFor="taskName">Task Name</label>
            <input type="text" className="form-control" id="taskName" />
          </div>
          <div className="form-group">
            <label htmlFor="taskDescription">Task Description</label>
            <textarea className="form-control" id="taskDescription" rows="3"></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <button type="button" className="btn btn-secondary" onClick={toggleModal}>Cancel</button>
        <button type="button" className="btn btn-primary">Save</button>
      </ModalFooter>
    </Modal>
  );
};

export default TaskModal;
