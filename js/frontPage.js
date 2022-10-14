"use strict";

// * ---------- DECLARACIONES ----------

// CARDS
const SOFA = document.getElementById("sofa");
const BIKE = document.getElementById("bicicleta");
const WARDROBE = document.getElementById("armario");
const PLAYSTATION = document.getElementById("playstation");

// CATEGORIES
const CARS_BTN = document.getElementById("cars");
const TOYS_BTN = document.getElementById("toys");
const FURNITURE_BTN = document.getElementById("furniture");
const TOOLS_BTN = document.getElementById("tools");
const COMPUTERS_BTN = document.getElementById("computers");
const CLOTH_BTN = document.getElementById("cloth");
const HOME_APPLIANCES_BTN = document.getElementById("home-appliances");
const SPORT_BTN = document.getElementById("sport");
const MOBILE_BTN = document.getElementById("mobile");
const ALL_BTN = document.getElementById("all");

// OFERTS
const BEAR = document.getElementById("oso");
const TABLE = document.getElementById("mesa");
const BALL = document.getElementById("pelota");
const DINNING_ROOM = document.getElementById("comedor");

// * ---------- EVENTOS ----------

// CARDS
SOFA.onclick = () => {
  localStorage.setItem("productID", 60802);
  window.location = "product-info.html";
};

BIKE.onclick = () => {
  localStorage.setItem("productID", 50744);
  window.location = "product-info.html";
};

WARDROBE.onclick = () => {
  localStorage.setItem("productID", 60803);
  window.location = "product-info.html";
};

PLAYSTATION.onclick = () => {
  localStorage.setItem("productID", 50743);
  window.location = "product-info.html";
};

// CATEGORIES
CARS_BTN.onclick = () => {
  localStorage.setItem("catID", 101);
  window.location = "products.html";
};

TOYS_BTN.onclick = () => {
  localStorage.setItem("catID", 102);
  window.location = "products.html";
};

FURNITURE_BTN.onclick = () => {
  localStorage.setItem("catID", 103);
  window.location = "products.html";
};

TOOLS_BTN.onclick = () => {
  localStorage.setItem("catID", 104);
  window.location = "products.html";
};

COMPUTERS_BTN.onclick = () => {
  localStorage.setItem("catID", 105);
  window.location = "products.html";
};

CLOTH_BTN.onclick = () => {
  localStorage.setItem("catID", 106);
  window.location = "products.html";
};

HOME_APPLIANCES_BTN.onclick = () => {
  localStorage.setItem("catID", 107);
  window.location = "products.html";
};
SPORT_BTN.onclick = () => {
  localStorage.setItem("catID", 108);
  window.location = "products.html";
};

MOBILE_BTN.onclick = () => {
  localStorage.setItem("catID", 109);
  window.location = "products.html";
};

ALL_BTN.onclick = () => {
  window.location = "categories.html";
};

// OFERTS
BEAR.onclick = () => {
  localStorage.setItem("productID", 50741);
  window.location = "product-info.html";
};

TABLE.onclick = () => {
  localStorage.setItem("productID", 60804);
  window.location = "product-info.html";
};

BALL.onclick = () => {
  localStorage.setItem("productID", 50742);
  window.location = "product-info.html";
};

DINNING_ROOM.onclick = () => {
  localStorage.setItem("productID", 60801);
  window.location = "product-info.html";
};

// * ---------- FUNCIONES ----------

const goToCars = () => {
  localStorage.setItem("catID", 101);
  window.location = "products.html";
};

const goToComputers = () => {
  localStorage.setItem("catID", 105);
  window.location = "products.html";
};
