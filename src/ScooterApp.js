const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp extends Scooter {
  constructor(station1, station2, station3, registeredUsers) {
    super(Scooter, User);
    this.station1 = station1;
    this.station2 = station2;
    this.station3 = station3;
    this.registeredUsers = registeredUsers;
  }
  registeredUser(username, password, age) {}
  loginUser(username, password) {}
  logoutUser(username) {}
  createScooter(station) {}
  dockScooter(scooter, station) {}
  rentScooter(scooter, user) {}
  print() {}
}

module.exports = ScooterApp;
