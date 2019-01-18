class Driver(name){
  let driverID = 0
  constructor(name){
    this.name = name
    this.id = ++driverID
  }
}