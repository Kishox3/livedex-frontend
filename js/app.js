// livedex-frontend/js/app.js

const API_URL = "http://localhost:5000/api";
const token = localStorage.getItem('token');
if (!token) window.location = "login.html";

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer " + token
};

const tbody = document.getElementById("items-body");
const form = document.getElementById("item-form");
let editingId = null;

async function cargarItems() {
  const r = await fetch(`${API_URL}/livedex`, { headers });
  const data = await r.json();
  tbody.innerHTML = "";
  data.forEach(item => {
    tbody.innerHTML += `
      <tr>
        <td>${item.nombre}</td>
        <td>${item.tipo || ''}</td>
        <td>${item.descripcion || ''}</td>
        <td>${item.imagen ? `<img src="${item.imagen}" width="50"/>` : ''}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editarItem('${item._id}')">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="eliminarItem('${item._id}')">Eliminar</button>
        </td>
      </tr>
    `;
  });
}
window.cargarItems = cargarItems;
cargarItems();

form.onsubmit = async function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this).entries());
  let url = `${API_URL}/livedex`;
  let method = "POST";
  if (editingId) {
    url += `/${editingId}`;
    method = "PUT";
  }
  await fetch(url, {
    method,
    headers,
    body: JSON.stringify(data)
  });
  editingId = null;
  form.reset();
  cargarItems();
};

window.eliminarItem = async function(id) {
  await fetch(`${API_URL}/livedex/${id}`, {
    method: "DELETE",
    headers
  });
  cargarItems();
};

window.editarItem = async function(id) {
  const r = await fetch(`${API_URL}/livedex`, { headers });
  const items = await r.json();
  const item = items.find(i => i._id === id);
  if (!item) return;
  form.nombre.value = item.nombre;
  form.descripcion.value = item.descripcion;
  form.tipo.value = item.tipo;
  form.imagen.value = item.imagen;
  editingId = id;
};

document.getElementById('logoutBtn').onclick = function() {
  localStorage.removeItem('token');
  window.location = "login.html";
};