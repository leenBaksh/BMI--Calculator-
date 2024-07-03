import inquirer from "inquirer";
import chalk from "chalk";
// Prompt the user for weight and height
const answer = await inquirer.prompt([
    {
        message: "Enter your weight in kg:",
        type: "number",
        name: "weightInKg",
    },
    {
        message: "Enter your height in meters:",
        type: "number",
        name: "heightInM",
    },
]);
// Calculate BMI
let bmi = answer.weightInKg / (answer.heightInM * answer.heightInM);
// Print the BMI
console.log(chalk.magentaBright(`Your BMI is ${bmi.toFixed(2)}`));
