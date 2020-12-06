import React from 'react'
import './App.css'
//import './styles.back.scss'
import {rootReducer} from '../../reducers/rootReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { CreateTask } from '../CreateTask/CreateTask'
import { Tasks } from '../CreatedTasks/Tasks'
const store = createStore(rootReducer)

class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
      <Tasks/>
      <CreateTask/>
      </Provider>
   )
  }
}

export default App