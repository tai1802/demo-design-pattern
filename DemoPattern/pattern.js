function Car(name) {
  this.name = name;

  // Default values
  this.color = "White";
}

// Creating a new Object to decorate
const tesla = new Car("Tesla Model 3");

// Decorating the object with new functionality

tesla.setColor = function (color) {
  this.color = color;
};

tesla.setPrice = function (price) {
  this.price = price;
};

const store = (() => {
  let instance;

  function initialize() {
    return {
      sum: function () {
        let nums = Array.prototype.slice.call(arguments);
        return nums.reduce((numb, total) => numb + total, 0);
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = new initialize();
      }
      return instance;
    },
  };
})();

const firstU = store.getInstance();
const secondU = store.getInstance();

console.log(firstU === secondU);

console.log(firstU.sum(1, 2, 3, 4, 5));
