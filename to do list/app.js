const taskInput = document.getElementById('task');
const addBtn = document.getElementById('add');
const list = document.getElementById('list');


addBtn.addEventListener('click', () => {
    const task = taskInput.value;
    if (task !== ''){
        const li =document.createElement('li');
        li.textContent = task;
        list.appendChild(li);
        taskInput.value = '';
    }
});