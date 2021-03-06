const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');

class App {
    constructor () {
        this.roster = []
    }
    employeeQuestions = [{
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
    
    engineerQuestions = [{
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username:'   
    }];
    
    internQuestions = [{
        type: 'input',
        name: 'school',
        message: 'Enter employee school:'   
    }];
    
    managerQuestions = [{
        type: 'input',
        name: 'officeNumber',
        message: 'Enter employee office number:'   
    }];
    
    addNewEmployee = [{
        type: 'list',
        name: 'addNewEmployee',
        message: 'Would you like to add another employee',
        choices: ['intern', 'engineer', 'exit']
    }];

    start() {
      console.log(
        'THanks for using out app, please answer prompts below to get your auto generated Website'
      );
      this.promptEmployee('manager');
    }

    async promptEmployee(position) {
        console.log(`Prompting for position: ${position}`);
        const employeeAnswersA = await inquirer.prompt(this.employeeQuestions);
        const employeeAnswersB = await this.handleRoleQuestions(position);
        const employee = this.constructEmployee(employeeAnswersA, employeeAnswersB, position);
        this.roster.push(employee);
        this.newEmployee();
    }

    async newEmployee() {
        console.log('Select new position to add:');
        this.nextEmployee = await inquirer.prompt(this.addNewEmployee);
        console.log(this.nextEmployee)
        if (this.nextEmployee.addNewEmployee === 'exit') {return this.end()} else {this.promptEmployee(this.nextEmployee.addNewEmployee)};
    };

    handleRoleQuestions = (position) => {
        switch (position) {
            case 'manager':
                return inquirer.prompt(this.managerQuestions);
            case 'engineer':
                return inquirer.prompt(this.engineerQuestions);
            case 'intern':
                return inquirer.prompt(this.internQuestions);         
            default: 
                console.log('oops');
                break;
        }
    }

    constructEmployee = (employeeAnswers, roleAnswers, position) => {
        switch (position) {
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

    build (roster) {
        roster = roster.map((e) => e.buildHTML());
        roster = roster.join('');
        return roster;
    };

    buildHTML = () => {
        const teamProfile = 
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Team Profile</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>
<div class="card text-center">
  <div class="card-body">
    <h5 class="card-title">Team Profile</h5>
    <p class="card-text">Here are the team members</p>
  </div>
  <div class="card-footer text-muted">
  </div>
</div>
    <div class="container-fluid">
        <div class="row">
        ${this.build(this.roster)}
        </div>
    </div>        
</body>
</html>`
        return teamProfile;
    }

    end() {
      const testProfile = this.buildHTML();  
      console.log('Goodbye. Your profile will be written to "Profile.html"');
      fs.writeFile('Profile.html', testProfile, (err) => {  
        if (err) throw err; 
    });
    }
  }

  const trial = new App;
  trial.start();

  module.exports = App;