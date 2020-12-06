import { TASK_ADD, DONE_CHANGE} from "../actions/tasks"


const initialState = {
    tasks: [{
            id: 0,
            name: 'zero',
            description: 'first',
            completed: false
    }, {
      id: 1,
      name: 'two',
      description: 'second',
      completed: false
    }]
}

function updateObjectInArray(array, action) {
    return array.map((item, index) => {
      if (index !== action.index) {
        // This isn't the item we care about - keep it as-is
        return item
      }
  
      // Otherwise, this is the one we want - return an updated value
      return {
        ...item,
        ...action.item
      }
    })
  }

function insertItem(array, action) {
    let newArray = array.slice()
    newArray.splice(action.index, 0, action.item)
    return newArray
  }

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
      case TASK_ADD: {
        return insertItem(state, action)
      }
      case DONE_CHANGE: {
        return updateObjectInArray(state, action)
      }
      default:
        return state
    }
  }