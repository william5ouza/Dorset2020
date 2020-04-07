function Hotel(name, rooms, booked, breakfast){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.breakfast = breakfast;
    this.checkAvailablity = function(){
        return this.rooms - this.booked;
        return this.breakfast;
    
    };
}

var clyatonHotel = new Hotel('Clayton', 128, 25, true);
var lemonHotel = new Hotel('Lemon', 76, 14, true)
var WillBnB = new Hotel('BnBreaky', 48, 23, false);
var DubHostel = new Hotel('Dublin', 78, 56, false);
console.log(clyatonHotel, lemonHotel, WillBnB, DubHostel);