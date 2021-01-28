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
        const employeeCard = `<div class="card"> <!--Start a div-->
<div class="card-body"> <!-- Keep class names relative to what you are doing-->
    <h5 class="name">${this.name}</h5>
    <h5 class="role">${this.getRole()}</h5>
    <p class='role-spec'>${this.roleSpec}</p>
    <p class='role-spec'>${this.id}</p>
    <p class='role-spec'>${this.email}</p>
    </div>
</div> <!--Be sure to close both div-->`;
        return employeeCard;
    }
     
}

module.exports = Employee;




`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Profile</title>
</head>
<body>
   
</body>
</html>
`