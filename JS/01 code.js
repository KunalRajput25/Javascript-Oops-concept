function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
  firstName: "kunal",
  age: 25,
  about: personInfo,
};

person1.about();

// console.log("hello");

const person2 = {
  firstName: "rakesh",
  age: 20,
  about: personInfo,
};

person2.about();

const person3 = {
  firstName: "nisha",
  age: 18,
  about: personInfo,
};

person3.about();
