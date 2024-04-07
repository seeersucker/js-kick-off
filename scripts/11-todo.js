let userInputEl1 = document.querySelector('.inputEl1');
let outcomeEl = document.querySelector('.outcomeJS');
let taskList2 = [];

// Todo List Practice 1
function addTask(){
  const taskList = [];
  if(userInputEl1.value !== ''){
    taskList.push(userInputEl1.value);
    console.log(taskList);
    userInputEl1.value = '';
  }
}

// Todo List Practice 2
function renderTaskList(){

  let todoListHTML = '';

  for(let i = 0; i < taskList2.length; i++){

    // Deconstructing assignment for keeping code short and clean
    const {name, due} = taskList2[i];

    const newTask = `

      <div>${name}</div> 
      <div>${due}</div>

      <button onclick="
        taskList2.splice(${i}, 1);
        renderTaskList();
      "class="deleteButton"
      >Delete</button>

    `;

    todoListHTML += newTask;
  }

  outcomeEl.innerHTML = todoListHTML; 
}


function addTodo(){
  let userInputEl2 = document.querySelector('.inputEl2');
  const dateInputEl = document.querySelector('.dateInputJS');

  taskList2.push({
    name: userInputEl2.value, 
    due: dateInputEl.value
  });
  
  userInputEl2.value = '';
  dateInputEl.value = '';
}


