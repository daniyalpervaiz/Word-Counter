#!/usr/bin/env node
import inquirer from "inquirer";
let answer_Sentence = await inquirer.prompt([{
        message: "Enter The Sentence",
        type: "input",
        name: "sentence"
    }]);
let count_Words = answer_Sentence.sentence.trim().split(" ");
console.log(count_Words);
console.log(`your Sentence words are ${count_Words.length}`);
