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
    ${
      (this.github && `<li class="list-group-item"><a href="${this.github}" class="card-link"><h3>Github: ${this.github}</h3></a></li>`) ||
      (this.school && `<li class="list-group-item"><h3>${this.school}</h3></li>`) ||
      (this.office && `<li class="list-group-item"><h3>${this.office}</h3></li>`)
    }
  <li class="list-group-item">ID: ${this.id}</li>
  <li class="list-group-item"><a href="mailto:${this.email}" class="card-link">Email: ${this.email}</a></li>
</ul>
</div>
</div>`


// ${
//     (this.github && `<h3>Github: ${this.github}</h3>` ||
//     (this.officeNum && `<h3>Office Number: ${this.officeNum}</h3>`) ||
//     (this.school && `<h3>School: ${this.school}</h3>`)
//   }



        return employeeCard;
    }
     
}

module.exports = Employee;


