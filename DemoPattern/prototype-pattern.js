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

const person = new Person("Codestus.com", 20);
const prototypeOfPerson = new PersonPrototype(person);
const tester = prototypeOfPerson.clone();

tester.showName() // "Codestus.com"