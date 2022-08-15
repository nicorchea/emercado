// BUILT-IN Bootstrap script requerido para el formulario

(function () {
  "use strict";

  // Seleccion de todos los forms que queremos aplicar validacion custom de bootstrap
  var forms = document.querySelectorAll(".needs-validation");

  // Loop entre ellos, validacion si esta todo correcto o no.
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
