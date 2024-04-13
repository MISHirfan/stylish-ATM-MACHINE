#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"

// initialize user balance and pin code
let mybalance = 10000;
let mypin = 4321;

// print welcome message
console.log(" Welcome to coding_with_mehwish - ATM MACHINE");

// prompt the user to enter thier pin
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.green("enter your pin code")
    }
])
if(pinanswer.pin === mypin){
    console.log(chalk.yellow("\npin is correct, login succesfully!\n"));
    //console.log(`current amount balance is ${mybalance}`)

    let operation = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation",
            choices: ["withdraw amount", "check balance"]
        }
    ])
    {

    if(operation.operation === "withdraw amount"){
        let withdrawAns = await inquirer.prompt([
           {
            name: "withdraw",
            type: "list",
            message: "select a withdrawl method:",
            choices:["fast cash","enter amount"]
           } 
        ])
        if(withdrawAns.withdrawmethod === "fast cash"){
        let fastcash = await inquirer.prompt([
            {
                name: "fast cash",
                type: "list",
                message: "select amount:",
                choices: [1000, 2000, 5000, 10000]
            }
        ])
        if(fastcash.fastcash > mybalance){
           console.log(chalk.red("insufficiant balance"))
        }
 
     else{
        mybalance -= fastcash.amount;
        console.log(`${fastcash.fastcash} "withdraw succesfully`);
        console.log(`your remaining balance is: ${mybalance}`);

        }
    }
    else if(withdrawAns.withdrawmethod === "enter amount")
       {let amountAns = await inquirer.prompt([
            {name: "amount",
            type: "number",
            message: "enter the amount to withdraw:"
            }   
    ])
 if(amountAns > mybalance){
     console.log("insufficiant balance");

    }
     else{
        mybalance -= amountAns;
        console.log(`${amountAns.amount} "withdraw succesfully`);
        console.log(`your remaining balance is: ${mybalance}`);

        }
        
         }
    }
}
if(operation.operation === "check balance"){
    console.log(`your accont balance is: ${mybalance}`);
    }
}
else{
    console.log(chalk.red("pin is incorrect, try again!"));
}