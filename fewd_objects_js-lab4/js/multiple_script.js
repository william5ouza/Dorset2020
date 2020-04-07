// Define a constructor function template for hotels
function Hotel(name, rooms, booked,breakfast) {
    // Object properties
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.breakfast = breakfast;
    this.checkAvailablity = function() {
        return this.rooms - this.booked;
        //if (breakfast === 'true'){
            //return this.breakfast;
        //}
        
    };
}

// Define to instances of the hotel and their arguments
var clayHotel = new Hotel('Clayton', 68, 3,true);
var lemonHotel = new Hotel('Lemon', 56, 15,true);
var WillBnB = new Hotel('BnBreaky',48, 23, false);
var DubHostel = new Hotel('Dublin', 78, 56, false);

// Declare a variable to hold the name of the hotel and room availability 
var details1 = clayHotel.name + ' Rooms: ';
    // add content to an existing variable----
    details1 += clayHotel.checkAvailablity();
// Get the hotel1 div
var elHotel1 = document.getElementById('hotel1');
// Add the variables created onto the empty div
elHotel1.textContent = details1;

var details2 = lemonHotel.name + ' Rooms: ';
    details2 += lemonHotel.checkAvailablity();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

var details3 = WillBnB.name + ' Rooms: ';
    details3 += WillBnB.checkAvailablity();
var elHotel3 = document.getElementById('hotel3');
elHotel3.textContent = details3;

var details4 = DubHostel.name + ' Rooms: ';
    details4 += DubHostel.checkAvailablity();
var elHotel4 = document.getElementById('hotel4');
elHotel4.textContent = details4;

