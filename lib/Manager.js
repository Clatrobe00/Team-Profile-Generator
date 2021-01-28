const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.office = `Office: ${officeNumber}`;
    }
    getRole = () => 'Manager';
}

module.exports = Manager;