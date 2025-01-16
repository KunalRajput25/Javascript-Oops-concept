function about(favMusician, song) {
  console.log(this.firstName, this.age, favMusician, song);
}

const user1 = {
  firstName: "Rakesh",
  age: 25,
};

about.apply(user1, ["yo yo honey singh", "dope shope"]);
