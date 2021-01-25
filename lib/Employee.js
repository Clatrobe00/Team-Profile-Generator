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
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Profile</title>
</head>
<body>
name: ${this.name}

role: ${this.getRole()}

${this.roleSpec}

ID: ${this.id}

Email: ${this.email}    
</body>
</html>
`;
        return employeeCard;
    }
     
}

module.exports = Employee;