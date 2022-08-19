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
  let deleteButton = document.createElement('button')
  let editButton = document.createElement('button')

  deleteButton.textContent = '❌'
  deleteButton.addEventListener('click', handleDelete)

  editButton.textContent = '✏️'
  editButton.addEventListener('click', buildEditForm)

  p.textContent = `${task} `
  p.id = determinePriority(document.querySelector('select')) +' '+ task
  p.style.color = document.querySelector('select').value
  p.appendChild(deleteButton)
  p.appendChild(editButton)

  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}

function buildEditForm(e) {
  e.target.parentNode.remove()
  let editForm = document.createElement('form')
  let editLabel = document.createElement('label')
  let editInput = document.createElement('input')
  let editSubmit = document.createElement('input')

  editForm.id = 'editTaskForm'
  editForm.method = 'POST'

  editLabel.for = 'editTaskDescription'
  editLabel.textContent = 'Edit Task '

  editInput.type = 'text'
  editInput.id = 'editTaskDescription'
  editInput.name = 'editTaskDescription'
  editInput.placeholder = 'example'

  editSubmit.type = 'submit'
  editSubmit.textContent = 'Change Item'

  editSubmit.addEventListener('click', handleEdit)

  editForm.appendChild(editLabel)
  editForm.appendChild(editInput)
  editForm.appendChild(editSubmit)
  document.querySelector('#tasks').appendChild(editForm)
}

function determinePriority(priority) {
  if (priority.value === "Red") {
    return `high`
  } else if (priority.value === "Yellow") {
    return `medium`
  }else {
    return `low`
  }
}