class Task {
  constructor () {}

  doTask () {}
}

const toDoLists = []
const newTask = new Task(1, 'Go Fishing')
toDoLists.push(newTask)
console.log(toDoLists)
toDoLists[0].doTask()
console.log(toDoLists)
