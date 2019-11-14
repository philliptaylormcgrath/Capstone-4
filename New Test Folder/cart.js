// var shoppingCart = (function() {
//   cart = [];
//   function Item(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   function addToCart() {
//
//
//   }
var shoppingCart = [];
var totalCost = [];

function addToCartMercury() {
  if (shoppingCart.includes("Mercury")){
    console.log("Mercury already in cart! There is only one Mercury!")
  } else {
  shoppingCart.push("Mercury");
  totalCost.push(13500);

  }
}

function addToCartVenus(){
  if (shoppingCart.includes("Venus")){
    console.log("Venus already in cart! There is only one Venus!")
  } else {
  shoppingCart.push("Venus");
  totalCost.push(24000);

  }
}
function addToCartEarth(){
  if (shoppingCart.includes("Earth")){
    console.log("Earth already in cart! There is only one Earth!")
  } else {
  shoppingCart.push("Earth");
  totalCost.push(1000000);

  }
}
function addToCartMars(){
  if (shoppingCart.includes("Mars")){
    console.log("Mars already in cart! There is only one Mars!")
  } else {
  shoppingCart.push("Mars");
  totalCost.push(36000);

  }
}

function addToCartJupiter(){
  if (shoppingCart.includes("Jupiter")){
    console.log("Jupiter already in cart! There is only one Jupiter!")
  } else {
  shoppingCart.push("Jupiter");
  totalCost.push(60000);

  }
}
function addToCartSaturn(){
  if (shoppingCart.includes("Saturn")){
    console.log("Saturn already in cart! There is only one Saturn!")
  } else {
  shoppingCart.push("Saturn");
  totalCost.push(44000);

  }
}
function addToCartUranus(){
  if (shoppingCart.includes("Uranus")){
    console.log("Uranus already in cart! There is only one Uranus!")
  } else {
  shoppingCart.push("Uranus");
  totalCost.push(18000);

  }
}
function addToCartNeptune(){
  if (shoppingCart.includes("Neptune")){
    console.log("Neptune already in cart! There is only one Neptune!")
  } else {
  shoppingCart.push("Neptune");
  totalCost.push(14000);

  }
}

function addToCartPluto(){
  if (shoppingCart.includes("Pluto")){
    console.log("Pluto already in cart! There is only one Pluto!")
  } else {
  shoppingCart.push("Pluto");
  totalCost.push(500);

  }
}

function addToCartPlanetX(){
  if (shoppingCart.includes("Planet X")){
    console.log("Planet X already in cart! There is only one Planet X! Maybe...?")
  } else {
  shoppingCart.push("Planet X");
  totalCost.push(0);


  }
}
function printArrays(){
  for (index = 0; index < shoppingCart.length; index++) {
    console.log(shoppingCart[index] + '\t' + totalCost[index]);
  }
}
