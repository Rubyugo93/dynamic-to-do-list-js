document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Add functionality to remove the task
        removeButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        // Append the remove button to the list item
        taskItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add task when button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
