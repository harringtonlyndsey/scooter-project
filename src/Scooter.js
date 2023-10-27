class Scooter {
  constructor(station) {
    this.station = station;
    this.user = user;
    this.serial = serial;
    this.charge = charge;
    this.isBroken = isBroken;
  }
  static nextSerial() {
    let serial = 1;
    return serial++;
  }
  rent(user) {
    if (scooter && Scooter.charge > 20 && !scooter.isBroken) {
      console.log(`${user.name} has checked out a scooter.`);
    } else {
      console.log("Scooter needs charging or repairing.");
    }
  }
  dock(station) {}

  async charge() {
    console.log("Starting charge");
    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100;
    console.log("Charge complete");
  }
}

const scooter = new Scooter();

module.exports = Scooter;
