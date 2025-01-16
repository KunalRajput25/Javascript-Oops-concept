function createUser(name, age, email, gender) {
  const user = Object.create(createUser.prototype);
  user.name = name;
  user.age = age;
  user.email = email;
  user.gender = gender;
  return user;
}
createUser.prototype.about = function () {
  return `Name: ${this.name}, Age: ${this.age}`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.singSong = function () {
  return "La La La";
};

user1 = createUser("kunal", 25, "john@gmail", "male");
console.log(user1);

aboutUser1 = user1.about();
console.log(aboutUser1);

user2 = createUser("karan", 20, "karan@gmail", "male");
console.log(user2);
