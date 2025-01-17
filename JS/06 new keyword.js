//new keyword 3 kam karta hai
//1. new object banata hai
//2. us object ko this keyword se bind karta hai
//3. us object ko return karta hai
//yani ki   this = {}  return this

function Createuser(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

Createuser.prototype.getName = function () {
  return `Name is ${this.name} and age is ${this.age} and address is ${this.address}`;
};

Createuser.prototype.is18 = function () {
  return `${this.age >= 18}`;
};

const user1 = new Createuser("Rahul", 2, "Delhi");
console.log(user1.getName());

console.log(user1.is18());

for (let key in user1) {
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
}
