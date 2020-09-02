var miles_per_gallonEle =document.body.querySelector(".miles_per_gallon");
var headOneEle =document.body.querySelector(".headOne");
var headTwoEle =document.body.querySelector(".headTwo");
var headThreeEle =document.body.querySelector(".headThree");
var headFourEle =document.body.querySelector(".headFour");
var buttonEle =document.body.querySelector(".editButton");
var miles;
var price;

function inputInfo(){
  var inputMiles = Number(prompt("How many miles per year do you drive on average?"));
  var inputPrice = Number(prompt("Whats the average price of gas per gallon in your area?"));
  miles=inputMiles;
  price=inputPrice;
  textFunction(miles,price);
}

function textFunction(miles,price){
  headOneEle.innerHTML="Driving a car that gets 12 MPG for "+miles+" miles at $"+price+" per gallon, will cost "+(miles/12)*price;
  headTwoEle.innerHTML="Driving a car that gets 17 MPG for "+miles+" miles at $"+price+" per gallon, will cost "+(miles/17)*price;
  headThreeEle.innerHTML="Driving a car that gets 26 MPG for "+miles+" miles at $"+price+" per gallon, will cost "+(miles/26)*price;
  headFourEle.innerHTML="Driving a car that gets 29 MPG for "+miles+" miles at $"+price+" per gallon, will cost "+(miles/29)*price;
}


buttonEle.addEventListener("click", function(){
  inputInfo();
})