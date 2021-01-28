const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email)
        this.github = `https://github.com/${github}`;
    }
    getGithub = () => this.github;
    getRole = () => 'Engineer';
}

module.exports = Engineer;