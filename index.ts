#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let conditions = true;
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in your to do's?"
        },
    ]);
    todos.push(addTask.todo);
    console.log(addTask.todo + " Task Added Sucessfully");
    let addMore = await inquirer.prompt([
        {
            name: "Addmore",
            type: "confirm",
            default: "false",
            message: "Would you like to add more?",
        }
    ]);
    conditions = addMore.Addmore;
}
console.log("Your ToDo-list: ", todos);
