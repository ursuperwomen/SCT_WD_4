const taskList = document.getElementById('taskList');

document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskTime = document.getElementById('taskTime');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.classList.add('task-item');

    // Create a checkbox for marking the task as completed
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            listItem.classList.add('completed');
        } else {
            listItem.classList.remove('completed');
        }
    });

    // Set the task text without the due date and time
    const taskTextNode = document.createTextNode(taskText);
    listItem.appendChild(checkbox); // Add checkbox to the beginning of the list item
    listItem.appendChild(taskTextNode); // Add task text to the list item

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up to the list item
        taskList.removeChild(listItem);
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear the input fields
    taskInput.value = '';
    taskDate.value = '';
    taskTime.value = '';
});