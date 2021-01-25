const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)
        this.roleSpec = school;
    }
    getSchool = () => this.school;
    getRole = () => 'Intern';
}

module.exports = Intern;