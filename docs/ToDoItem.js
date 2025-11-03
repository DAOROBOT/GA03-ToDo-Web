const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function createNewTaskElement(taskText) {
    const listItem = document.createElement('li');
    listItem.className = 'flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200 transition-shadow duration-200 hover:shadow-sm';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskContent.className = 'text-sm sm:text-base text-gray-700 flex-grow cursor-pointer';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'flex space-x-2 ml-4 flex-shrink-0'; 
    
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Done';
    completeButton.className = 'text-xs sm:text-sm font-semibold text-green-600 hover:text-green-500 transition-colors';
    completeButton.addEventListener('click', toggleComplete);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.className = 'text-xs sm:text-sm font-semibold text-red-600 hover:text-red-500 transition-colors';
    deleteButton.addEventListener('click', removeTask);

    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);
    
    listItem.appendChild(taskContent);
    listItem.appendChild(buttonContainer);

    return listItem;
}

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const newTask = createNewTaskElement(taskText);
        taskList.appendChild(newTask); 
        taskInput.value = ''; 
    }
});


function toggleComplete(e) {
    const listItem = e.target.closest('li'); 
    
    const taskContentSpan = listItem.querySelector('span'); 

    taskContentSpan.classList.toggle('completed');

    if (taskContentSpan.classList.contains('completed')) {
        e.target.textContent = 'Unmark';
        listItem.classList.remove('bg-gray-50');
        listItem.classList.add('bg-green-50');
    } else {
        e.target.textContent = 'Done';
        listItem.classList.remove('bg-green-50');
        listItem.classList.add('bg-gray-50');
    }
}

function removeTask(e) {
    const listItem = e.target.closest('li'); 
    
    listItem.parentNode.removeChild(listItem);
}
