// Code to define and export the Engineer class.
const Employee = require("./Employee").default;

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
        this.role = 'Engineer';

        this.getGithub = () => {
            return this.github;
        };

        this.getRole = () => {
            return this.role;
        };
    };
};

module.exports = Engineer;
