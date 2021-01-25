const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (github) {
        this.github = github;
    }
    getGithub = () => this.github;
    getRole = () => 'Engineer';
}

module.exports = Engineer;