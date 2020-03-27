const greet = function(){
    return 'Haydo!'; };

var salutation = greet();
console.log(greet(salutation));

function echo(_sound){
    return 'wowowow'; };

console.log(echo());

function greet2(name) {
    console.log('Hello' + " " + name + " " + '!'); };

    greet2('Erika');

var whereIs = function(name) {
    return 'Where is' + " " +name+ " " + '?'; };

var x = whereIs('Jacky');
    console.log(x);

var hi = function(name) {
    return 'Hi'+" " +name+'!'; };


var h1 = hi('Selva');
var h2 = hi('Pola');
var x = h1  + '  '  + h2;
    console.log(x);

function shout() {
    return 'Fire'; };

    console.log(shout()+" " +shout());

var double = function(name) {
    return name + " " + 'and' + " " + name; };

var x = double('Roy'); {
    console.log(x); };

function doSomething(_name) {
    return 'Willy'; };

    console.log(doSomething());

function multiplyFive (number) {
    return number * 5; };

    console.log(multiplyFive(4));

function myFunction(alert) {
    alert = 'Hello' + " " + 'World!';
    return alert; };

    console.log(myFunction());

var isAnswerRight = true;
    if (isAnswerRight) {
    
    console.log('The answer is right');
}   
    else {
    
    console.log('The answer is wrong');
}

    isAnswerRight ? console.log('The answer is wrong') : console.log('The answer is right');


function tellFortune(jobTitle, geographLocation, partnerName, numbOfChildren) {
    
    var fortuneLuck = 'You will be a'+" "+ jobTitle +" "+'in'+" "
    
    + geographLocation +" " +'and married to'+" "+ partnerName +" "+'with' +" "+ numbOfChildren +" "+'kids.';
    
    console.log (fortuneLuck); };  

    tellFortune('Doctor', 'London', 'Denisa', 2);

    tellFortune('CEO', 'Italy', 'Christina', 3);

    tellFortune('Bartender', 'France', 'Mary', 1);