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
`<div class="col">
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h3 class="card-title">${this.name}</h3>
  <h4 class="card-text">${this.getRole()}</h4>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${this.roleSpec}</li>
  <li class="list-group-item">ID: ${this.id}</li>
  <li class="list-group-item">Email: ${this.email}</li>
</ul>
<div class="card-body">
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>
</div>`




        return employeeCard;
    }
     
}

module.exports = Employee;


