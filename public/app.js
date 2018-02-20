const init = function () {
  const button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  const select = document.querySelector('select');
  select.addEventListener('change', handleSelectChanged);

  const todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);
}

  const populate = function (todos) {
    todos.forEach(function(item){
      addItem(item);
  })
  // this function needs to:
  // - loop through the array of todos, invoking addItem() for each todo item
}

const addItem = function (item) {
  const ul = document.querySelector('#todo-list');
  const li = document.createElement('li');
  li.innerText = item;
  ul.appendChild(li);

  // this function needs to:
  // - create an li element containing the string 'item'
  // - append the li to the "todo-list" ul
}

const handleButtonClick = function () {
  // this function needs to
  const toDoItem = document.getElementById('new-item');
  const itemValue = toDoItem.value;
  console.log(itemValue);
  const addedItem = addItem(itemValue);
  save(itemValue);


  // - get hold of the input box's value
  // - append it to the "todo-list" ul by invoking addItem()
  // - add it to local storage by invoking save()
}

const save = function (newItem) {
  const jsonString = localStorage.getItem('todoList');
  const todosArray = JSON.parse(jsonString) || [];
  console.log(todosArray);
  todosArray.push(newItem);
  const updatedJsonString = JSON.stringify(todosArray);
  localStorage.setItem('todoList', updatedJsonString);
  // this function needs to:
  // - get the data back from local storage and parse to an array
  // - add the newItem to the array
  // - stringify the updated array
  // - save it back to localstoage
}

window.addEventListener('load', init);
