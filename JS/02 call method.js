function about(favMusician, song) {
  // console.log(`my name is ${this.firstName} and my age is ${this.age}`);
  console.log(this.firstName, this.age, favMusician, song);
}

const user1 = {
  firstName: "rakesh",
  age: 25,
};
const user2 = {
  firstName: "rakhi",
  age: 20,
};

// user1.about.call(user2);
about.call(user1, "honey singh", "brown rang");
// about.call(user2);
