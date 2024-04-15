#! /usr/bin/env node
import inquirer from "inquirer";
const currency: any = {
  USD: 1,
  EUR: 0.93,
  GBP: 0.76,
  KWD:0.308,
  SAR:3.749,
  AFN:71.252,
  INR: 74.57,
  PKR: 280,
};
let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from currency ",
    type: "list",
    choices: ["USD", "EUR", "GBP","KWD","SAR","AFN", "INR", "PKR",],
  },
  {
    name: "to",
    message: "Enter to currency",
    type: "list",
    choices: ["USD", "EUR", "GBP","KWD","SAR","AFN", "INR", "PKR",],
  },
  {
    name: "amount",
    message: "Enter Amount",
    type: "number",
  },
]);
let from_amount = currency[user_answer.from];
let to_amount = currency[user_answer.to];
let amount = user_answer.amount;
let final_amount = (amount / from_amount) * to_amount;

console.log("Your total " + user_answer.to + " is = " + final_amount);
