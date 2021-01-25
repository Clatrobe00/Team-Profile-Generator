class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName = () => this.name;
    getId = () => this.id;
    getEmail = () => this.email;
    getRole = () => 'Employee';
    buildHTML = () => {
        const employeeCard = 
`name: ${this.name}

role: ${this.getRole()}

${this.roleSpec}

ID: ${this.id}

Email: ${this.email}
`;
        return employeeCard;
    }
     
}

module.exports = Employee;