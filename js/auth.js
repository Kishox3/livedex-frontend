// livedex-frontend/js/auth.js

// Cambiar localhost por la IP del host Kasten
const API_URL = "http://172.31.17.31:5000/api";

document.getElementById('login-form').onsubmit = async function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this).entries());
  try {
    const r = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const res = await r.json();
    if (r.ok) {
      localStorage.setItem('token', res.token);
      window.location = "index.html";
    } else {
      document.getElementById('msg').textContent = res.error || "Error";
    }
  } catch {
    document.getElementById('msg').textContent = "Error de red";
  }
};

document.getElementById('register-form').onsubmit = async function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this).entries());
  try {
    const r = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const res = await r.json();
    if (r.ok) {
      document.getElementById('msg').textContent = "Registrado! Ya puedes ingresar.";
    } else {
      document.getElementById('msg').textContent = res.error || "Error";
    }
  } catch {
    document.getElementById('msg').textContent = "Error de red";
  }
};
