class Scooter {
  // this remembers which serial to use next
  static nextSerial = 1

  static getNextSerial() {
    // look at the nextSerial state and remember it
    const serial = Scooter.nextSerial

    // increment it for the next scooter
    Scooter.nextSerial++

    // put the serial we remembered onto the new scooter
    return serial
  }

  constructor(station) {
    this.station = station
    this.user = null

    // We don't specify the serial number as a param
    // Instead, we user the nextSerial() method to make the serial number
    this.serial = Scooter.getNextSerial()

    // other properties which aren't specified as params
    // but have sensible default values
    this.charge = 100
    this.isBroken = false
    this.isRented = false
  }

  rent(user) {
    if (this.charge > 20 && !this.isBroken && !this.isRented) {
      this.isRented = true
      console.log(`${user.name} has checked out a scooter.`)
    } else {
      console.log('Scooter needs charging or repairing or is already rented.')
    }
  }

  dock(station) {
    this.station = station
    this.isRented = false
  }

  async charge() {
    console.log('Starting charge')
    await new Promise(resolve => setTimeout(resolve, 2000)) // wait 2 seconds
    this.charge = 100
    console.log('Charge complete')
  }
}

const s1 = new Scooter('Manchester')
const s2 = new Scooter('London')
const s3 = new Scooter('Edinburgh')

console.log(s1)
console.log(s2)
console.log(s3)

module.exports = Scooter
