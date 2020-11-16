import React from 'react'
import './App.css'
import './styles.back.scss'
import OneComponent from './OneComponent.js'
import TaskAdd from './TaskAdd'

class App extends React.Component {
  state = {
    tasks: [{
      id: 123,
      name: 'first',
      description: 'What needs to be done',
      completed: true
    }, {
      id: 1235,
      name: 'sec',
      description: 'What needs to be',
      completed: false
    }, {
      id: 1236,
      name: 'third',
      description: 'What needs to be done',
      completed: true
    }, {
      id: 1237,
      name: 'fourth',
      description: 'Whatto be done',
      completed: true
    }, {
      id: 1238,
      name: 'fifth',
      description: 'What needs t be done',
      completed: true
    }, {
      id: 1239,
      name: '6',
      description: 'What needs to be done',
      completed: false
    }, {
      id: 1240,
      name: '7',
      description: 'What neds to be done',
      completed: false
    }, {
      id: 1241,
      name: '8',
      description: 'What nee be done',
      completed: true
    }, {
      id: 1242,
      name: '9',
      description: 'What ne to be done',
      completed: false
    }, {
      id: 1243,
      name: '10',
      description: 'What needs to be one',
      completed: true
    }]
  }
  Change = (id) => {
    this.setState(cur => {
      let copy = cur.tasks.map(it => {
        return ({
          id : it.id,
          name : it.name,
          description : it.description,
          completed : it.completed
        })
      })
      for (let i = 0; i < copy.length; i++) {
        if (copy[i].id === id) {
          const new_val = 1 - copy[i].completed
          copy[i].completed = new_val
        }
      }
      console.log("Task " + id + " completed status = COMPLETED")
      return {
        list : copy,
      }
    })
  }

  addTask = (id, name, description, completed) => {
    this.setState(currentState => {
      const newTasks = [...currentState.tasks, {
        name: name,
        id: id,
        description: description,
        completed: completed
      }]
      return {
        tasks: newTasks
      }
    })
  }


  updateCompleted = (id) => {
    this.setState(currentState => {
      const newTasks = [...currentState.tasks]
      const index = newTasks.findIndex(t => t.id === id)
      const newCompeleted = !newTasks[index].completed

      newTasks[index] = { ...newTasks[index], completed: newCompeleted }
      
      return {
        tasks: newTasks}
    })
  }
  
  render() {
    return (
      <div>
      {this.state.tasks.map(it => <OneComponent id = {it.id} name = {it.name} description = {it.description} completed = {it.completed} update = {this.updateCompleted}/>)}
      <TaskAdd update = {this.addTask}/>
      </div>
   )
  }
}

export default App