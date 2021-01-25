const Employee = require('./Employee');

class Intern extends Employee {
    constructor (school) {
        this.school = school;
    }
    getSchool = () => this.school;
    getRole = () => 'Intern';
}

module.exports = Intern;