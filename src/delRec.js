// add function for all tables
const inquirer = require('inquirer');

const delRec = (connection, action, table) => {
  switch(table) {
      case "Employee":
          break;
      case "Role":
          connection.query("SELECT title FROM role ORDER BY id", (err, res) => {
            if (err) throw err;
            let roles = [];
            
            for(i=0; i<res.length; i++) {
              roles.push(res[i].title);
            }
            console.log(roles);
            inquirer.prompt(
              questions = [{
                type: "list",
                name: "title",
                message: "Please select role title to delete: ",
                choices: roles
              }]
            )
            .then((data) => {
              // console.log(data.dept_name);
              query = `DELETE FROM role WHERE title = '${data.title}'`;
              connection.query(query, (err, res) => {
                if (err) throw err;
                const viewTable = require('./viewTable');
                viewTable(connection, "Delete", "Role");
              });
            });
          });
          break;
      case "Department":
          connection.query("SELECT NAME FROM department ORDER BY NAME", (err, res) => {
            if (err) throw err;
            let dept_names = [];
            
            for(i=0; i<res.length; i++) {
              dept_names.push(res[i].NAME);
            }
            // console.log(dept_names);
            inquirer.prompt(
              questions = [{
                type: "list",
                name: "dept_name",
                message: "Please select department to delete: ",
                choices: dept_names
              }]
            )
            .then((data) => {
              // console.log(data.dept_name);
              query = `DELETE FROM department WHERE name = '${data.dept_name}'`;
              connection.query(query, (err, res) => {
                if (err) throw err;
                const viewTable = require('./viewTable');
                viewTable(connection, "Delete", "Department");
              });
            });
          });
          break;
  }
}
// export 
module.exports = delRec;