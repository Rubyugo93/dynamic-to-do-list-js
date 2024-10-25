// Ensure tasks load when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadTasks(); // Check for the loadTasks function: loads tasks on page load

    // Event listener to add a task when the "Add Task" button is clicked
    document.getElementById('add-task-btn').addEventListener('click', () => {
        const taskInput = document.getElementById('task-input');
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText); // Check for saving tasks to Local Storage in addTask
            taskInput.value = ''; // Clear the input field
        }
    });
});

// Function to load tasks from Local Storage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Check for retrieving tasks from Local Storage
    storedTasks.forEach(taskText => addTask(taskText, false)); // Populate task list from Local Storage without duplicating saves
}

// Function to add a new task to the DOM and Local Storage
function addTask(taskText, save = true) {
    const taskList = document.getElementById('task-list');

    // Create the list item for the task
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.textContent = taskText;

    // Create the remove button for the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        taskList.removeChild(taskItem); // Remove task from DOM
        removeTaskFromStorage(taskText); // Update Local Storage
    });

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    // Save the task to Local Storage if it's a new addition
    if (save) {
        saveTaskToStorage(taskText);
    }
}

// Function to save a task to Local Storage
function saveTaskToStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(taskText); // Add the new task to the list
    localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save updated list to Local Storage
}

// Function to remove a task from Local Storage
function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText); // Remove the specific task
    localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Update Local Storage with new list
}
