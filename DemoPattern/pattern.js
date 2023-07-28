function Person(name, age) {
  this.name = name;
  this.age = age;

  this.showName = () => console.log(this.name);
}

function PersonPrototype(prototype) {
  const _prototype = prototype;

  this.clone = () => {
    let person = new Person();
    person.name = _prototype.name;
    person.age = _prototype.age;

    return person;
  }
}

const store = (() => {
  let instance;

  function initialize() {
    const profile = new Person("ABC", 25);

    profile.setAge = function (age) {
      this.age = age
    };

    profile.setName = function (name) {
      this.name = name
    };

    return {
      profile
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

// const person = new Person("Codestus.com", 20);
// const prototypeOfPerson = new PersonPrototype(person);
// const tester = prototypeOfPerson.clone();

// tester.showName() // "Codestus.com"

const myStore = store.getInstance();
myStore.profile.showName();