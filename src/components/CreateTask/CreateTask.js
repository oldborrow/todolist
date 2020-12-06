import React from "react"
import {connect} from "react-redux"
import { handleTaskChange, handleDoneChange} from "../../actions/tasks";


const mapStateToProps = (state) => ({
    tasks: state.tasks
  });

const mapDispatchToProps = (dispatch) => ({
    dispatchOnTasksChange: (newTasks) => dispatch(handleTaskChange(newTasks)),
});

const CreateTaskComponent = ({
  tasks,
  dispatchOnTasksChange
}) => {
  const onTasksChange = (e) => {
    dispatchOnTasksChange(e.target.value);
  };
  return (
    <div>
      <h1>Create task</h1>
    <button onChange={onTasksChange} />
    </div>
  )
}

export const CreateTask = connect(mapStateToProps, mapDispatchToProps)(CreateTaskComponent)