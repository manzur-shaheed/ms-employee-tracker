// add function for all tables
const inquirer = require('inquirer');

const addRec = (connection, action, table) => {
  switch(table) {
      case "Employee":
          break;
      case "Role":
        connection.query("SELECT CONCAT(id,':',name) AS ID_NAME FROM department ORDER BY id", (err, res) => {
          if (err) throw err;
          let depts = [];
          
          for(i=0; i<res.length; i++) {
            depts.push(res[i].ID_NAME);
          }
          inquirer.prompt(
            questions = [{
              type: "input",
              name: "title",
              message: "Please enter Role name: "
            },
            {
              type: "input",
              name: "salary",
              message: "Please enter Role salary: "
            },
            {
              type: "list",
              name: "dept_id",
              choices: depts
            }]
          )
          .then((data) => {
            query = `INSERT INTO role (title, salary, department_id) VALUES ('${data.title}', ${data.salary}, ${data.dept_id.split(':')[0]})`;
            // console.log(query);
            connection.query(query, (err, res) => {
              if (err) throw err;
              const viewTable = require('./viewTable');
              viewTable(connection, "Add", "Role");
            });
          }); 
        });     
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
              const viewTable = require('./viewTable');
              viewTable(connection, "Add", "Department");
            });
          });
          break;
  }
}
// export 
module.exports = addRec;