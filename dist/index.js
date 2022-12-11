#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let animation = chalkAnimation.karaoke(`let's start the Calculation`);
    await sleep();
    animation.stop();
    console.log(`
._____________________.
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`);
}
await welcome();
async function askQuestion() {
    const answers = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operation do you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number 1: "
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number 2: "
        }
    ]);
    if (answers.operator == "Addition") {
        let value = answers.num1 + answers.num2;
        console.log(chalk.bgCyan(`${answers.num1} + ${answers.num2} = ${value}`));
    }
    else if (answers.operator == "Subtraction") {
        let value = answers.num1 - answers.num2;
        console.log(chalk.bgCyan(`${answers.num1} - ${answers.num2} = ${value}`));
    }
    else if (answers.operator == "Multiplication") {
        let value = answers.num1 * answers.num2;
        console.log(chalk.bgCyan(`${answers.num1} * ${answers.num2} = ${value}`));
    }
    else if (answers.operator == "Division") {
        let value = answers.num1 / answers.num2;
        console.log(chalk.bgCyan(`${answers.num1} / ${answers.num2} = ${value}`));
    }
}
;
async function startAgain() {
    do {
        await askQuestion();
        // var confirmAnswer =async (input) => {
        //     if(input !== "y" || input !=="Y"){
        //         return "Incorrect Entry!";
        //     }
        //     return true;
        // };
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? press y or n",
            // validate: confirmAnswer
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'Yes' || again.restart == 'yes');
}
startAgain();
