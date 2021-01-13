

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", submitHandler);
  document.querySelector("ul").addEventListener("click", remove_a_task)
});


function remove_a_task(event) {
  if (event.target.innerText === "X") {
    event.target.parentNode.remove();
  }
}


function submitHandler(event) {
  event.preventDefault();
  create_new_task(event.target.newtask.value);
}

function create_new_task(new_description) {
  const ul_tag = document.querySelector("ul");
  const li_tag = document.createElement("li");
   li_tag.innerText = new_description;
  ul_tag.appendChild(li_tag);
  const delete_button = document.createElement("button");
  delete_button.innerText = "X";
  li_tag.appendChild(delete_button);
  taskList.push(new_description)
 
}





