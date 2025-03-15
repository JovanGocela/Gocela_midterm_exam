// Define the Task interface
export interface Task {
    id: number;
    name: string;
    description: string;
}

// Use proper type for tasks array
const tasks: Task[] = [];

// add a new task
function addTask(task: Task): void {
    tasks.push(task);
}

// view all tasks
function viewTasks(): Task[] {
    return tasks;
}

// update a task
function updateTask(id: number, task: Task): void {
    tasks[id] = task;
}

// delete a task by id
function deleteTask(id: number): void {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
}

// test the functions
addTask({ id: 1, name: 'Task 1', description: 'Description 1' });
console.log(viewTasks());
updateTask(0, { id: 1, name: 'Task 2', description: 'Description 2' });
console.log(viewTasks());
deleteTask(0);
console.log(viewTasks());
