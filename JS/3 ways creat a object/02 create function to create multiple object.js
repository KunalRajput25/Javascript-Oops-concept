function createUser(firstName, lastName, age, gender, email, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.gender = gender;
  user.email = email;

  //method kehte hain function ko object me add karne ko

  user.address = address;
  user.is18 = function () {
    return this.age >= 18;
  };

  //about method
  user.about = function () {
    return `${this.firstName} ${this.lastName} is a ${this.age} year old `;
  };
  return user;
}

user1 = createUser(
  "John",
  "Doe",
  30,
  "male",
  "johndoe1361@gmail.com",
  "123 Main St"
);
console.log(user1);

const is18 = user1.is18();
console.log(is18);

const about = user1.about();
console.log(about);
