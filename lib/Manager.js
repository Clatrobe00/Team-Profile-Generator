const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.roleSpec = `Office: ${officeNumber}`;
    }
    getRole = () => 'manager';
}

module.exports = Manager;