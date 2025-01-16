//methord
const userMethord = {
  about: function () {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  is18: function () {
    return this.age >= 18;
  },
  singSong: function () {
    return "La La La";
  },
};

function createUser(name, age, email, gender) {
  const user = Object.create(userMethord);
  user.name = name;
  user.age = age;
  user.email = email;
  user.gender = gender;
  return user;
}
user1 = createUser("John", 25, "john@gmail", "male");
console.log(user1);

const aboutUser1 = user1.about();
console.log(aboutUser1);
