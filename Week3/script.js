const data = [
  {
    id: 1,
    title: 'Belajar HTMl',
    description: 'Belajar HTML di lab CHEVA',
    deadline: new Date().toLocaleDateString(),
  },
];

function addToDo(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const deadline = document.getElementById('deadline').value;

  data.push({
    id: data.length + 1,
    title,
    description,
    deadline: new Date(deadline).toLocaleDateString(),
  });

  render();
}

function render() {
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
  data.splice(id, 1);

  render();
}

render();
