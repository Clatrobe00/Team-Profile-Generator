const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email)
        this.roleSpec = `GitHub: ${github}`;
    }
    getGithub = () => this.github;
    getRole = () => 'Engineer';
}

module.exports = Engineer;