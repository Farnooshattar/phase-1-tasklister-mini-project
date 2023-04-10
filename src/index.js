document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
  e.preventDefault()
  handleToDo(e.target.querySelector('#new-task-description').value)
  form.reset()
   })
  function handleToDo(todo){
    let p = document.createElement('p')
    p.textContent=`${todo}   `
    document.querySelector('#list').appendChild(p)
    let btn = document.createElement('button')
    btn.textContent = 'x'
    p.appendChild(btn)
    btn.addEventListener('click', (e) => e.target.parentNode.remove())
  }
  document.querySelector('#new-task-description').addEventListener('click', 
  ()=>alert("I was clicked!"))






  // document.querySelector('.delete-button').addEventListener('mouseover',
  // (e)=>e.target.value=" ")
  // document.querySelector('.delete-button').addEventListener('click',
  // (e)=>e.target.parentNode.remove())
});
