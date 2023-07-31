const menu = {
  _meal: "_",
  _price: 0,
  set mealToCheck(meal) {
    if (typeof meal == "string") {
      this._meal = meal;
    } else {
      console.log("Type Error: Meals are strings");
    }
  },
  set priceToCheck(price) {
    if (typeof price == "number") {
      this._price = price;
    } else {
      console.log("Type Error: Prices are numbers");
    }
  },
  get todaysSpecials() {
    if (typeof this._meal == "string" && typeof this._price == "number") {
      return `Todays Special is ${this._meal} for $${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

menu.mealToCheck = "Pasta Ragu";
menu.priceToCheck = 21.99;

console.log(menu._price)

console.log(menu.todaysSpecials);
