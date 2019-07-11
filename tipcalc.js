//service question
var tip = prompt ("Was your service at the restaurant excellent,good, or poor?", "Good",)

//cost question
var cost = prompt ("What was the cost of your meal?", 0)
var cost = parseInt(cost)

//how many people question
var people = prompt ("How many people were in your party?", 8)
var people = parseInt(people)

//tax calculation based on service 
var excellenttax = cost * 0.20
var goodtax = cost * 0.15
var poortax = cost * 0.10

//conditional statement to determine how much tax you should pay
if (people >= 8){
  console.log("You should tip 20% which is" + " $" + excellenttax)
  console.log("Your total meal costs" + " $" + (cost + excellenttax))
} else if (tip == "good" ){
  console.log("You should tip 15% which is" + " $" + goodtax)
  console.log("Your total meal costs" + " $" + (cost + goodtax))
} else {
  console.log("You should tip 10% which is" + " $" + poortax)
  console.log("Your total meal costs" + " $" + (cost + poortax))
}
