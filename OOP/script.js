// Object Oriented Programming

// Creating an object

let user = new Object({
  firstName: "Srikar",
  lastName: "Kusumanchi",
  "user Hobbies": ["soccer", "badminton", "basketball"],
  getFullName: (user) => {
    return `${user.firstName} ${user.lastName}`;
  },
});

// Displaying object information

console.log(user.firstName, user.lastName);
console.log(user.getFullName(user));
console.log(user["user Hobbies"]);

// Finding information in an object

if ("firstName" && "lastName" in user) {
  console.log("First and last name exist");
}

if ("user Hobbies" in user) {
  console.log("Hobbies exist");
}

if ("randomAttr" in user) {
  console.log("randomAttr exists");
} else {
  console.log("randomAttr doesn't exist");
}

// Iteration in objects

for (let prop in user) {
  console.log(user[prop]);
}

// Classes

class User {
  constructor(firstName, lastName, userHobbies) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userHobbies = userHobbies;
  }

  getFullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}

let Srikar = new User("Srikar", "Kusumanchi", [
  "badminton",
  "basketball",
  "soccer",
]);
console.log(Srikar);
console.log(Srikar.getFullName());

// Class Inheritance

class AdminUser extends User {
  setPassword = () => {
    this.password = password;
  };
}

let John = new AdminUser("John", "Doe", ["Hunting", "Programming"]);
console.log(John);
