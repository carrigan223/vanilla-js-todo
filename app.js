//selectors
document.querySelector("form").addEventListener("submit", handleSubmitForm);
//event handlers

/* 
    Inside this function we’re first making sure that the default 
    form submit behaviour of the browser is not taking place by calling 
    e.preventDefault(). Next we’re retrieving an reference to the input element 
    by using the querySelector method once again. We’re storing that element reference 
    in input, so that we’re able to access the input value by using input.value.
*/

function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") addTodo(input.value);
  input.value = "";
}

//helpers

/* 
   First of all a reference to the ul element is retrieved. Next a new li 
   element is created by using the document.createElement method. This is new 
   element is stored in the variable li. This is the list element which is containing 
   the output which is done for every todo element. Therefore we’re inserting the inner 
   HTML code of the li element by assigning the code string to property innerHTML of the li element.
*/

function addTodo(todo) {
  let ul = document.querySelector("ul"); //selecting list
  let li = document.createElement("li"); //creating list item

  li.innerHTML = `
    <span class="todo-item">${todo}</span>
    <button name="checkButton"><i class="fas fa-check-square"></i></button>
    <button name="deleteButton" ><i class="fas fa-trash"></i></button>
    `; //the html to inject on element creation/ the todo param is being passed to it note back tics

  li.classList.add("todo-list-item");
  ul.appendChild(li);
}

document
  .querySelector("ul")
  .addEventListener("click", handleClickDeleteOrCheck);

//determining which button was clicked
function handleClickDeleteOrCheck(e) {
  if (e.target.name == "checkButton") {
    checkTodo(e);
  }
  if (e.target.name == "deleteButton") {
    deleteTodo(e);
  }
}

function checkTodo(e) {
  let item = e.target.parentNode;
  if (item.style.textDecoration == "line-through") {
    item.style.textDecoration = "none";
  } else {
    item.style.textDecoration = "line-through";
  }
}

function deleteTodo(e) {
  let item = e.target.parentNode;

  item.addEventListener("transitionend", function () {
    item.remove();
  });

  item.classList.add("todo-list-item-fall");
}


document.getElementById("clearAll").addEventListener("click", handleClearAll);

function handleClearAll(e) {
  document.querySelector("ul").innerHTML = "";
}
