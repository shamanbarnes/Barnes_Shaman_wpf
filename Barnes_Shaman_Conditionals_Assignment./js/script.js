// Name: Shaman Barnes 
// Class: Scalable Data Infrastructures
// Assignment: Conditionals

var loanAmount 		= Number(prompt("Please enter your loan amount")); // User should enter there loan amount
var numberOfMonths 	= Number(prompt("Enter the amount of months")); // User should enter the amount of months for loan
var income			= Number(prompt("Enter your monthly income")); //  User should enter their monthly income

if(loanAmount <= 0 || isNaN(Number(loanAmount)) ); // if loan amount is not a number or less than 0
{
    var loanAmount = prompt("Please enter a valid loan amount"); // prompt enter valid amount 
}

if(numberOfMonths <= 0 || isNaN(Number(numberOfMonths)) ); // if user enter incorrect months 
{
    var numberOfMonths = prompt("Please enter valid number of months"); // ask user to re-enter correct months 
}


var interest 		= 4.5 / 100; //  Fixed interest rate for the loan
var fullLoanAmount  = loanAmount * (1 + interest ); // Calculates the total amount borrowed with intrest rate
var monthlyPayment  = fullLoanAmount / numberOfMonths; // Calculating user monthly payments

var payments 		        = (loanAmount * interest) + loanAmount / numberOfMonths; // Calculates the loan amount 
var loanAmount              = parseInt(loanAmount); // making sure the user enters a number 
var numberOfMonths          = parseInt(numberOfMonths); // User should enter a number for months 
var percentageOfMonthly     = (monthlyPayment / income) * 100; // percentage of your monthly income

console.log("Your original amount is " + loanAmount +"."); // prints out user loan amount 
console.log("Your full loan amount will be " + fullLoanAmount +"."); // prints out user full loan amount 
console.log("Your monthly payments will be " + monthlyPayment +"."); // prints out user monthly payments 
console.log("Percentage of your monthly income is " + percentageOfMonthly + "%."); // prints out the user monthly percentage


console.log(monthlyPayment <= income  ? "Loan Granted" : "Loan not granted"); // Calculates if monthly payment is less than than income 
 // Prints out if loan is granted 
 // Prints out if loan insn't granted 



