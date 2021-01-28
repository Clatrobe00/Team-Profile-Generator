const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
// 1. // predefine the 3 classes/constructor functions for the three types of employees : manager, engineer, intern - DONE
const employeeQuestions = [{
    type: 'input',
    name: 'name',
    message: 'Enter employee name:'
},
{
    type: 'input',
    name: 'id',
    message: 'Enter employee ID:'
},
{
    type: 'input',
    name: 'email',
    message: 'Enter employee email:'
}];

const engineerQuestions = [{
    type: 'input',
    name: 'github',
    message: 'Enter employee GitHub:'   
}];

const internQuestions = [{
    type: 'input',
    name: 'school',
    message: 'Enter employee school:'   
}];

const managerQuestions = [{
    type: 'input',
    name: 'officeNumber',
    message: 'Enter employee office number:'   
}];

const addNewEmployee = [{
    type: 'list',
    name: 'addNewEmployee',
    message: 'Would you like to add another employee',
    choices: ['intern', 'engineer', 'exit']
}]

const teamName = [{
    type: 'input',
    name: 'teamName',
    message: "Enter your team name"
}]

// write an async init function that builds the initial html, then append the cards to that file.

async function init () {
    //const team = await inquirer.prompt(teamName);
    fs.writeFile(`test.html`, buildBaseHTML(), (err) => {
        if (err) throw err;    
    });
    const managerAnswersA = await inquirer.prompt(employeeQuestions);
    const managerAnswersB = await handleRoleQuestions('manager');
    const manager = constructEmployee(managerAnswersA, managerAnswersB);
    const managerCard = manager.buildHTML()
    cardAppend(managerCard)
    console.log('Done!');
    const nextEmployee = await inquirer.prompt(addNewEmployee);
    if (nextEmployee === 'exit'){
        console.log('Your Profile has been generated.')
        return;
    } else {
        main(nextEmployee)
    }
}

async function main (nextEmployee) {
    const employeeAnswers = await inquirer.prompt(employeeQuestions);
    const roleAnswers = await handleRoleQuestions(nextEmployee);
    const employee = constructEmployee(employeeAnswers, roleAnswers);
    console.log(employee.buildHTML());
    const addEmployee = await inquirer.prompt(addNewEmployee);
    console.log(addEmployee);
    if (addEmployee === 'exit') {
        console.log('Your profile has been generated');
    } else {
        console.log('Thanks!');
    }
    fs.writeFile('Test.html', employee.buildHTML(), (err) => {  
        if (err) throw err; 
    }) 
};

const buildBaseHTML = () => {
    const htmlBase = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Employee Profile</title>
</head>
<body>
       
</body>
</html>`;
    return htmlBase;
}

const handleRoleQuestions = (role) => {
    switch (role) {
        case 'manager':
            return inquirer.prompt(managerQuestions);
        case 'engineer':
            return inquirer.prompt(engineerQuestions);
        case 'intern':
            return inquirer.prompt(internQuestions);         
        default: 
            console.log('oops');
            break;
    }
}

const cardAppend = (card) => {
    fs.readFile(`test.html`, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    };
    const writeData = (/\<\/body>/g, card + '</body>');
    fs.appendFile('test.html', writeData, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
  });
}

const constructEmployee = (employeeAnswers, roleAnswers) => {
    switch (employeeAnswers.role) {
        case 'manager':
            return new Manager(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, roleAnswers.officeNumber);
        case 'engineer':
            return new Engineer(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, roleAnswers.github);
        case 'intern':
            return new Intern(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, roleAnswers.school);
        default: 
            console.log('oops');
            break;
    }    
}

//main();
init();
// 2. get info from the client about each employee to be added
//    2.1 ask for name and other info of the manager
//    2.2 ask if client wants to add another employee or exit
//    3.3 repeat  2.2 until exit;
// greet and ask for managers name: 
// build an employee of type manager using a constructor (by passing all the info into the constructor)
    // generate html with info of the employee (by running build command)
// ask client if they want to add more interns or enginners or exit 
// if they want to exit, finish the app
// if the want to build a new employer, add one to html using the constructor of the apropriate type 

// ${
//     (this.github && `<h3>Github: ${this.github}</h3>`) ||
//     (this.officeNum && `<h3>Office Number: ${this.officeNum}</h3>`) ||
//     (this.school && `<h3>School: ${this.school}</h3>`)
//   }

  //look up end()
