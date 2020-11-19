/*
let productObject = {
  price: 100,
  asin: "X29228992830",
  Weight: "4lbs",
  description: "Keurig",
  color: "silver",
};

console.log(productObject.asin);
*/

/*
class Product {
  constructor(pr, asin, weight, desc, nm, color, quantity, hL) {
    this.price = pr;
    this.asin = asin;
    this.weight = weight;
    this.description = desc;
    this.name = nm;
    this.color = color;
    this.quantity = quantity;
    this.hazardLevel = hL;
  }
  sell(money) {
    if (money >= this.price && this.quantity > 0) {
      this.quantity -= 1;
      return true;
    }
    return false;
  }
}

let kuerig = new Product(
  100,
  "X29228992830",
  "4lbs",
  "A thing that makes coffee",
  "Keurig",
  "silver",
  10,
  "low"
);

let toaster = new Product(
  999,
  "X29228992830",
  "1lbs",
  "A thing that makes toast",
  "toaster",
  "silver",
  2,
  5
);

let ps5 = new Product(
  500,
  "X29228992830",
  "20lbs",
  "A thing that makes video games run",
  "toaster",
  "white",
  0,
  0
);

console.log(toaster.sell(10000));
console.log(toaster.quantity);

console.log(kuerig.description);
*/

const coinWithoutClass = {
  state: 0,

  flip: function () {
    console.log("coin.flip() has been invoked.");
  },

  toString: function () {
    console.log("coin.toString() has been invoked.");
  },

  toHTML: function () {
    let image = document.createElement("img");

    console.log("coin.toHTML() has been invoked.");

    return image;
  },
};

console.group("coinWithoutClass");
console.log(coinWithoutClass);
console.groupEnd();

const coin1 = new Coin(1);
const coin2 = new Coin(0);
const coin3 = new Coin(1);
console.log({ coin1, coin2, coin3 });

const coin4 = new Coin(0);
console.log({ coin1, coin2, coin3, coin4 });
