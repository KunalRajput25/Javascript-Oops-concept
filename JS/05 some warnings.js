const user1 = {
  firstName: "john",
  age: 23,
  about: function (favMusician, song) {
    console.log(this.firstName, this.age, favMusician, song);
  },
};

const myFunc = user1.about.bind(user1, "kailesh kher", "teri deewani");
myFunc();
