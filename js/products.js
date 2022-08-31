"use stirct";

// * ---------- CATEGORIAS ----------

// Agrega el nombre de la categoria en el titulo segun corresponda

switch (getId()) {
  case "101":
    catName.innerHTML = `Autos`;
    break;
  case "102":
    catName.innerHTML = `Juguetes`;
    break;
  case "103":
    catName.innerHTML = `Muebles`;
    break;
  case "104":
    catName.innerHTML = `Herramientas`;
    break;
  case "105":
    catName.innerHTML = `Computadoras`;
    break;
  case "106":
    catName.innerHTML = `Vestimenta`;
    break;
  case "107":
    catName.innerHTML = `Electrodomésticos`;
    break;
  case "108":
    catName.innerHTML = `Deporte`;
    break;
  case "109":
    catName.innerHTML = `Celulares`;
    break;
}

// * ---------- DECLARACIONES ----------

// Container donde se cargara el contenido
const PRODUCTS_CONTAINER = document.getElementById("products-list-container");

// Boton ordenar ascendente
const BTN_SORT_ASCEN = document.getElementById("sortAsc");

// Boton ordenar descendente
const BTN_SORT_DESC = document.getElementById("sortDesc");

// Boton ordenar por productos vendidos
const BTN_SORT_BY_SELL = document.getElementById("sortBySell");

// Elemento barra de busqueda
const SEARCH_BAR = document.getElementById("search");

// Elemento precio minimo
const MIN_INPUT = document.getElementById("rangeFilterCountMin");

// Elemento precio maximo
const MAX_INPUT = document.getElementById("rangeFilterCountMax");

// Boton filtrar
const BTN_FILTRAR = document.getElementById("rangeFilterCount");

// Boton limpiar
const BTN_LIMPIAR = document.getElementById("clearRangeFilter");

// * ---------- FUNCIONES ----------

// Funcion que agrega al HTML la lista de productos manipulando el DOM
const showProductsList = (currentArray) => {
  let htmlContentToAppend = "";

  if (currentArray.length == 0) {
    PRODUCTS_CONTAINER.innerHTML = "";
  }

  currentArray.forEach((element) => {
    {
      htmlContentToAppend +=
        `
        <div  class="card list-group-item list-group-item-action">
        <div class="row">
        <div class="col-3">
        <img src="` +
        element.image +
        `" alt="product image" class="img-thumbnail">
        </div>
        <div class="col">
        <div class="d-flex w-100 justify-content-between">
        <div class="mb-1">
        <h4>` +
        element.name +
        " - " +
        element.currency +
        " " +
        element.cost +
        `</h4>
        <p> ` +
        element.description +
        `</p>
        </div>
        <small class="text-muted">` +
        element.soldCount +
        ` vendidos</small>
        </div>
    
        </div>
        </div>
        </div>
        `;
    }
    PRODUCTS_CONTAINER.innerHTML = htmlContentToAppend;
  });
};

// * ---------- EVENTOS ---------

// Eventos que se activan al cargar todos los elementos de DOM
document.addEventListener("DOMContentLoaded", function () {
  getJSONData(PRODUCTS_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      currentProductsArray = resultObj.data.products;

      showProductsList(currentProductsArray);
    }

    // Al clickear boton ascendente
    BTN_SORT_ASCEN.onclick = () => {
      let res = currentProductsArray.sort((a, b) => {
        return a.cost - b.cost;
      });
      showProductsList(res);
    };

    // Al clickear boton descendente
    BTN_SORT_DESC.onclick = () => {
      let res = currentProductsArray.sort((a, b) => {
        return b.cost - a.cost;
      });
      showProductsList(res);
    };

    // Al clickear boton vendidos
    BTN_SORT_BY_SELL.onclick = () => {
      let res = currentProductsArray.sort((a, b) => {
        return b.soldCount - a.soldCount;
      });
      showProductsList(res);
    };
  });
});

// Al filtrar por precio minimo y maximo
BTN_FILTRAR.onclick = () => {
  let minCost = MIN_INPUT.value;
  let maxCost = MAX_INPUT.value;

  if (minCost && maxCost == "") {
    const res = currentProductsArray.filter(
      (product) => product.cost >= MIN_INPUT.value
    );
    showProductsList(res);
  } else if (minCost == "" && maxCost) {
    const res = currentProductsArray.filter(
      (product) => product.cost <= MAX_INPUT.value
    );
    showProductsList(res);
  } else if (minCost && maxCost) {
    const res = currentProductsArray.filter(
      (product) =>
        product.cost <= MAX_INPUT.value && product.cost >= MIN_INPUT.value
    );
    showProductsList(res);
  }
};

// Al escribir en la barra de busqueda
SEARCH_BAR.onkeyup = () => {
  const value = SEARCH_BAR.value.toLowerCase();

  const res = currentProductsArray.filter(
    (product) =>
      product.name.toLowerCase().includes(value) ||
      product.description.toLowerCase().includes(value)
  );

  showProductsList(res);
};

// Al clickear boton limpiar
BTN_LIMPIAR.onclick = () => {
  MIN_INPUT.value = "";

  MAX_INPUT.value = "";

  SEARCH_BAR.value = "";

  showProductsList(currentProductsArray);
};
