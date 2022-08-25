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

const ORDER_ASC_BY_PRICE = "PriceASC";
const ORDER_DESC_BY_PRICE = "PriceDESC";
const ORDER_BY_PROD_SELL = "Sell";
const PRODUCTS_CONTAINER = document.getElementById("products-list-container");
const BTN_SORT_ASCEN = document.getElementById("sortAsc");
const BTN_SORT_DESC = document.getElementById("sortDesc");
const BTN_SORT_BY_SELL = document.getElementById("sortBySell");
const MIN_INPUT = document.getElementById("rangeFilterCountMin");
const MAX_INPUT = document.getElementById("rangeFilterCountMax");
const BTN_FILTRAR = document.getElementById("rangeFilterCount");
const BTN_LIMPIAR = document.getElementById("clearRangeFilter");

let currentProductsArray = [];
let currentSortCriteria = undefined;
let minPrice = undefined;
let maxPrice = undefined;

// * ---------- PRODUCTOS----------

// Funcion que devuelve un valor segun criterios ascendentes, descendentes o por orden de ventas (relevancia)
function sortProducts(criteria, array) {
  let result = [];
  if (criteria === ORDER_ASC_BY_PRICE) {
    result = array.sort(function (a, b) {
      if (a.cost < b.cost) {
        return -1;
      }
      if (a.cost > b.cost) {
        return 1;
      }
      return 0;
    });
  } else if (criteria === ORDER_DESC_BY_PRICE) {
    result = array.sort(function (a, b) {
      if (a.cost < b.cost) {
        return 1;
      }
      if (a.cost > b.cost) {
        return -1;
      }
      return 0;
    });
  } else if (criteria === ORDER_BY_PROD_SELL) {
    result = array.sort(function (a, b) {
      let aCount = parseInt(a.soldCount);
      let bCount = parseInt(b.soldCount);

      if (aCount > bCount) {
        return -1;
      }
      if (aCount < bCount) {
        return 1;
      }
      return 0;
    });
  }
  showProductsList();

  return result;
}

// Funcion que agrega al HTML la lista de productos manipulando el DOM
const showProductsList = () => {
  let htmlContentToAppend = "";

  currentProductsArray.forEach((element) => {
    if (
      (minPrice == undefined ||
        (minPrice != undefined && parseInt(element.cost) >= minPrice)) &&
      (maxPrice == undefined ||
        (maxPrice != undefined && parseInt(element.cost) <= maxPrice))
    ) {
      htmlContentToAppend +=
        `
        <div class="list-group-item list-group-item-action">
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

// Evento que se activa al cargar todos los elementos de DOM
document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODUCTS_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      currentProductsArray = resultObj.data.products;

      showProductsList();
    }
  });

  // Funciones que se activan al hacer click en los respectivos botones
  BTN_SORT_ASCEN.onclick = () => {
    sortProducts(ORDER_ASC_BY_PRICE, currentProductsArray);
  };

  BTN_SORT_DESC.onclick = () => {
    sortProducts(ORDER_DESC_BY_PRICE, currentProductsArray);
  };

  BTN_SORT_BY_SELL.onclick = () => {
    sortProducts(ORDER_BY_PROD_SELL, currentProductsArray);
  };

  BTN_LIMPIAR.onclick = () => {
    MIN_INPUT.value = "";

    MAX_INPUT.value = "";

    minPrice = undefined;
    maxPrice = undefined;

    showProductsList();
  };

  BTN_FILTRAR.onclick = () => {
    minPrice = MIN_INPUT.value;
    maxPrice = MAX_INPUT.value;

    if (minPrice != undefined && minPrice != "" && parseInt(minPrice) >= 0) {
      minPrice = parseInt(minPrice);
    } else {
      minPrice = undefined;
    }

    if (maxPrice != undefined && maxPrice != "" && parseInt(maxPrice) >= 0) {
      maxPrice = parseInt(maxPrice);
    } else {
      maxPrice = undefined;
    }

    showProductsList();
  };
});
