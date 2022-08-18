document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Select the main section of the form, this allows you to prevent the page from reloading on submit
  let form = document.querySelector('#create-task-form')

  form.addEventListener('submit', (e) => {
    // preventDefault() prevents the page from reloading when the Submit event is ran
    e.preventDefault()
    // buildTask is the function that processes everything that happens
    buildTask(e.target.newTaskDescription.value)
    // resets the input field
    form.reset()
  })
});

function buildTask(task) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.textContent = '❌'
  btn.addEventListener('click', handleDelete)
  p.textContent = `${task} `
  p.id = 'taskItem'
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}