let todos = [
  {
    id: 1,
    name: "Teach Class at Nagarro",
    done: true,
    deadline: new Date().toLocaleString()
  },
  {
    id: 2,
    name: "Get Coffee",
    done: false,
    deadline : new Date().toLocaleString()
  }
];

function render(state) {
  return state
    .map(todo => {
      // const li = document.createElement('li')
      // li.classList.add("striked")
      // document.body.append(li)
      const classString = todo.done ? `class = "list-group-item striked"` : `class = "list-group-item"`
      return `<li data-todo="${todo.id}" ${classString}> ${todo.name}><span class = "deadline"> ${todo.deadline} </span></li>`;
    })
    .join("");
}

function paint() {
  $("ul").html(render(todos));
}

function addTodo() {
  // document.getElementById('newTodo') != $('#newTodo')
  const inputBox = $('#newTodo')
  const inputDate = $('#deadlineDate')
  const inputTime = $('#deadlineTime')
  console.log(inputTime.val())
  const deadline = new Date(inputDate.val()+ ' ' +  inputTime.val())
  const dd = deadline.toLocaleString()
  console.log(dd);

  todos.push({
    id: todos.length + 1,
    name: inputBox.val(),
    done: false,
    deadline : dd
  })

  inputBox.val('')

  paint()
}



function removeTodos() {
  todos = todos.filter(todo => !todo.done)

  paint()
}


$('ul').on("click", function (e) {
  const idToFind = e.target.dataset.todo
  const todo = todos.find(todo => todo.id == idToFind)
  todo.done = !todo.done

  paint()
})

$('#newTodo').on("keypress", function (e) {
  if (e.which == 13) {
    addTodo()
  }
})

paint();


function dragItem(){
  todos.dataTranfer.setData()
}
