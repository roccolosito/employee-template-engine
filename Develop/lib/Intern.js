// Code to define and export the Intern class.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
        this.role = 'Intern';

        this.getSchool = () => {
            return this.school;
        };

        this.getRole = () => {
            return this.role;
        };
    };
};

module.exports = Intern;