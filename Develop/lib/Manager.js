// Code to define and export the Manager class.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';

        this.getOfficeNumber = () => {
            return this.officeNumber;
        };

        this.getRole = () => {
            return this.role;
        };
    };
};

module.exports = Manager;