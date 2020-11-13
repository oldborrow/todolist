import React from 'react'
import './App.css'
import './styles.css'
class App extends React.Component {
  state = {
    tasks: [{
      id: 123,
      name: 'first',
      description: 'What needs to b',
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
  OneComponent = ({props, click}) => {
    return (
      <div class = "onetask">
        <div class = "name">{props.name}</div>
        <div>{props.description}</div>
        <div>{String(props.completed)}</div>
        <button onClick = {() => click(props.id)}>
          Change status
        </button>
      </div>
    )
  }
  render() {
    return (
      <div>
      {this.state.tasks.map(it => <this.OneComponent 
      props = {it}
      click = {this.Change}/>)}
      </div>
   )
  }
}

export default App