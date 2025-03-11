function addToDo(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const deadline = document.getElementById('deadline').value;

  const data = JSON.parse(localStorage.getItem('todos')) || [];

  data.push({
    id: data.length + 1,
    title,
    description,
    deadline: new Date(deadline).toLocaleDateString(),
  });

  localStorage.setItem('todos', JSON.stringify(data));

  render();
}

function render() {
  const data = JSON.parse(localStorage.getItem('todos')) || [];
  const todo = document.getElementById('todo');
  todo.innerHTML = '';
  data.map((e, index) => {
    const newElement = `
    <article>
        <h3>${e.title}</h3>
          <p>${e.description}</p>
          <p>Deadline: ${e.deadline}</p>
          <button onclick="deleteToDo(${index})">Hapus</button>
    </article>`;

    todo.innerHTML += newElement;
  });
}

function deleteToDo(id) {
  const data = JSON.parse(localStorage.getItem('todos')) || [];
  data.splice(id, 1);

  localStorage.setItem('todos', JSON.stringify(data));

  render();
}

render();
