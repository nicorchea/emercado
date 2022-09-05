"use strict";

// * ---------- LOCAL STORAGE ----------

// Guarda el email en la local storage
const setEmail = () => {
  localStorage.setItem("email", emailInput.value);
};

// Obtiene el email de la local storage-
const getEmail = () => {
  const email = localStorage.getItem("email");
  return email;
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
    profile_link.innerHTML = getEmail();
  };

  addToHTML();
}
