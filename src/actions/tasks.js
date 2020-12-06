export const TASK_ADD = "TASK_ADD"
export const DONE_CHANGE = "DONE_CHANGE"

export const handleTaskChange = (task) => ({
    type: TASK_ADD,
    payload: task
  })

export const handleDoneChange = (done) => ({
    type: DONE_CHANGE,
    payload: done
})