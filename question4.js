// Initialize an empty array to store tasks
var tasks = [];

// Add a new task to the tasks array
function addTask(task) {
    tasks.push(task);
}

// View all tasks in the tasks array
function viewTasks() {
    return tasks;
}

// Update an existing task by its index
function updateTask(id, task) {
    tasks[id] = task;
}

// Delete a task by its index
function deleteTask(id) {
    tasks.splice(id, 1);
}

// Test the functions
addTask({ id: 1, name: 'Task 1', description: 'Description 1' }); // Add a task
console.log(viewTasks()); // View all tasks

updateTask(0, { id: 1, name: 'Task 2', description: 'Description 2' }); // Update the task
console.log(viewTasks()); // View updated tasks

deleteTask(0); // Delete the task
console.log(viewTasks()); // View tasks after deletion
