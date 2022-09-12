"use strict";

// * ---------- LOCAL STORAGE ----------

// Guarda el email en la local storage
const setEmail = () => {
  localStorage.setItem("email", emailInput.value);
};

// Obtiene el email de la local storage-
const getEmail = () => {
  const email = localStorage.getItem("email");
  let userName = email.split("@")[0];
  return userName;
};

// * ---------- CONDICION ----------

// Si hay un boton de submit setea el email
if (document.getElementById("submit")) {
  const btn = document.getElementById("submit");

  btn.onclick = () => {
    setEmail();
  };
} else {
  // Si no hay boton de submit, muestra el correo en la navBar
  const profile_link = document.getElementById("profile");

  const addToHTML = () => {
    profile_link.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle me-1  " viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
  </svg> ${getEmail()}`;
  };

  addToHTML();
}
