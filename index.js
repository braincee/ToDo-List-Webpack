const Tasks = [
  {
    task: 'Work on my Portfolio Project',
    completed: false,
    index: 0,
  },
  {
    task: 'Practise Coding Challenges',
    completed: false,
    index: 1,
  },
];

const display = document.querySelector('.display');

const implementTasks = () => {
  Tasks.forEach((list) => {
    display.innerHTML += `<li class="list-1" data-key="${list.task}">
      <div class="list-2">
        <button type="button" class="list-button" data-key="${list.index}"></button>
        <input class="task" type="text" value="${list.task}">
      </div>
      <button data-key="${list.index}" class="list-3"><i class="fas fa-ellipsis-v"></i></button>
    </li>`;
  });
};
implementTasks();