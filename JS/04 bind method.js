function about(favMusician, song) {
  console.log(this.firstName, this.age, favMusician, song);
}

const user1 = {
  firstName: "john",
  age: 23,
};

const bind = about.bind(user1, "kailesh kher", "teri deewani");
bind();
