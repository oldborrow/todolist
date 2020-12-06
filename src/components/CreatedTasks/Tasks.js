import React from "react";
import { connect } from "react-redux";
import OneComponent from "../../OneComponent";
import {handleDoneChange} from "../../actions/tasks";


const mapStateToProps = (state) => ({
    tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
    dispatchOnDoneChange: (done) => dispatch(handleDoneChange(done))
  });

const TasksComponent = ({tasks, dispatchOnDoneChange}) => {

    const onDoneChange = (e) => {
        dispatchOnDoneChange(e.target.value);
      };

    return (
        <div>
            {tasks.map(it => <OneComponent id = {it.id} name = {it.name} description = {it.description} completed = {it.completed} update = {onDoneChange}/>)}
        </div>
      );
}

export const Tasks = connect(mapStateToProps)(TasksComponent);