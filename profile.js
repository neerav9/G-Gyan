document.addEventListener("DOMContentLoaded", function() {
    // Generate course cards
    const coursesSection = document.getElementById('courses');
    for (let i = 1; i <= 5; i++) {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        coursesSection.appendChild(courseCard);
    }

    // Generate skills progress bars
    const skillsSection = document.getElementById('skills');
    for (let i = 1; i <= 3; i++) {
        const skillBar = document.createElement('div');
        skillBar.classList.add('skill-bar');
        skillsSection.appendChild(skillBar);
    }

    // Add task button functionality
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task-input');
    const submitTaskButton = document.getElementById('submit-task-button');
    const todoList = document.getElementById('todo-list');

    // Add task button functionality
        addTaskButton.addEventListener('click', function() {
            newTaskInput.style.display = 'inline-block';
            submitTaskButton.style.display = 'inline-block';
            newTaskInput.focus();
        });

        submitTaskButton.addEventListener('click', function() {
            const task = newTaskInput.value.trim();
            if (task) {
                const listItem = document.createElement('li');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                listItem.appendChild(checkbox);
                listItem.innerHTML += task;
                todoList.appendChild(listItem);
                newTaskInput.value = '';
            }
            newTaskInput.style.display = 'none';
            submitTaskButton.style.display = 'none';
        });

        // Task completion functionality
        todoList.addEventListener('change', function(e) {
            const target = e.target;
            if (target.tagName === 'INPUT' && target.type === 'checkbox') {
                const listItem = target.parentNode;
                listItem.classList.add('completed');
                setTimeout(function() {
                    listItem.remove();
                }, 1000);
            }
        });



    submitTaskButton.addEventListener('click', function() {
        const task = newTaskInput.value.trim();
        if (task) {
            const listItem = document.createElement('li');
            listItem.textContent = task;
            todoList.appendChild(listItem);
            newTaskInput.value = '';
        }
        newTaskInput.style.display = 'none';
        submitTaskButton.style.display = 'none';
    });

    newTaskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitTaskButton.click();
        }
    });
});
