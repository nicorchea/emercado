"use strict";

function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

// BUILT-IN Bootstrap script requerido para el formulario

(function () {
  "use strict";

  // Seleccion de todos los forms que queremos aplicar validacion custom de bootstrap
  var forms = document.querySelectorAll(".needs-validation");

  // Loop entre ellos, validacion si esta todo correcto o no acompañado de las alertas de error o exito.
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          showAlertError();
        } else {
          showAlertSuccess();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Solucion posible sin usar BOOTSTRAP

// const btn = document.getElementById("regBtn");

// btn.addEventListener("click", function () {
//   let nombre = document.getElementById("nombre").value;
//   let apellido = document.getElementById("apellido").value;
//   let email = document.getElementById("email").value;
//   let psw1 = document.getElementById("password1").value;
//   let psw2 = document.getElementById("password2").value;
//   let terminos = document.getElementById("terminos");

//   if (
//     nombre !== "" &&
//     apellido !== "" &&
//     email !== "" &&
//     psw1 == psw2 &&
//     terminos.checked
//   ) {
//     document.getElementById("alert-success").style.display = "block";
//     showAlertSuccess();
//   } else {
//     document.getElementById("alert-danger").style.display = "block";
//     showAlertError();
//   }
// });

// REVISAR SOLUCION
// const myForm = document.getElementById("form");
// form.addEventListener("submit", handleSubmit);
// let timer;

// function handleSubmit(event) {
//   console.log("submitTimer set");
//   event.preventDefault();
//   timer = setTimeout(() => {
//     this.submit();
//     console.log("Submitted after 5 seconds");
//   }, 2000);
// }
// function cancel() {
//   clearTimeout(timer);
//   console.log("Submit Canceled");
// }
