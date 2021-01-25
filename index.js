const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// 1. // predefine the 3 classes/constructor functions for the three types of employees : manager, engineer, intern - DONE

const questions = [{
    type: 'input',
    name: 'name',
    message: 'Enter employee name.'
},
{
    type: 'input',
    name: 'id',
    message: 'Enter employee ID.'
},
{
    type: 'input',
    name: 'email',
    message: 'Enter employee email.'
},
{
    type: 'list',
    name: 'role',
    message: 'Select employee role.',
    choices: ['manager', 'engineer', 'intern']
}]

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
