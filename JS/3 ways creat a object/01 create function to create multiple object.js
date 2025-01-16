const user = {
  name: "rakesh",
  age: 25,
  emai: "rakesh4654@gamil.com",
  address: "Dhaka",
  getname: function () {
    return `My name is ${this.name}`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

// console.log(user);
const getName = user.getname();
console.log(getName);
