// add function for all tables
const inquirer = require('inquirer');

const add = (connection, action, table) => {
  switch(table) {
      case "Employee":
          break;
      case "Role":
          break;
      case "Department":
          inquirer.prompt(
            questions = [{
              type: "input",
              name: "dept_name",
              message: "Please enter name of Department: "
            }]
          )
          .then((data) => {
            query = `INSERT INTO department (name) VALUES ('${data.dept_name}')`;
            connection.query(query, (err, res) => {
              if (err) throw err;
              const subMenu = require('./subMenu');
              const viewTable = require('./viewTable');
              viewTable(connection, "View", "Department");
            });
          });
          break;
  }
}
// export 
module.exports = add;