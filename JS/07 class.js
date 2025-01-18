//ye ho gyi class

//class1st
class Cars {
  constructor(carName, carModel, carYear, carColor, carPrice, carOwner) {
    this.carName = carName;
    this.carModel = carModel;
    this.carYear = carYear;
    this.carColor = carColor;
    this.carPrice = carPrice;
    this.carOwner = carOwner;
  }
  carDetails() {
    return `Car name: ${this.carName} Model: ${this.carModel} Year: ${this.carYear} Color: ${this.carColor} Price: ${this.carPrice} Owner: ${this.carOwner}`;
  }
}

user1 = new Cars("Toyota", "Corolla", 2019, "Black", 2000000, "Rakesh Sharma");
console.log(user1);
const carOwner = user1.carOwner;
console.log(carOwner);

//class2nd
class Cars2 extends Cars {
  constructor(
    carName,
    carModel,
    carYear,
    carColor,
    carPrice,
    carOwner,
    carspecs
  ) {
    super(carName, carYear, carColor, carModel, carPrice, carOwner);
    this.carspecs = carspecs;
  }
  carspeed() {
    return `Car speed is 120km/h`;
  }
}

user2 = new Cars2(
  "vitara breeza",
  2023,
  "white",
  "suzuki",
  3000000,
  "Rakesh Sharma",
  "4x4"
);
console.log(user2.carspecs);
console.log(user2.carspeed());
