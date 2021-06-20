// add function for all tables
const inquirer = require('inquirer');

const addRec = (connection, action, table) => {
  switch(table) {
      case "Employee":
        connection.query("SELECT CONCAT(id,':',first_name, ' ', last_name) AS manager FROM employee where manager_id is NULL ORDER BY id", (err, res) => {
          if (err) throw err;
          let managers = [];

          for(i=0; i<res.length; i++) {
            managers.push(res[i].manager);
          }
          connection.query("SELECT CONCAT(id,':',title) AS title FROM role ORDER BY id", (err1, res1) => {
            if (err1) throw err1;
            let roles = [];

            for(i=0; i<res1.length; i++) {
              roles.push(res1[i].title);
            } 
            inquirer.prompt(
              questions = [{
                type: "input",
                name: "first",
                message: "Please enter employee first name: "
              },
              {
                type: "input",
                name: "last",
                message: "Please enter employee last name: "
              },
              {
                type: "list",
                name: "role_id",
                message: "Please select role: ",
                choices: roles
              },
              {
                type: "list",
                name: "manager_id",
                message: "Please select manager: ",
                choices: managers
              }]
            )
            .then((data) => {
              query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${data.first}', '${data.last}', ${data.role_id.split(':')[0]}, ${data.manager_id.split(':')[0]})`;
              // console.log(query);
              connection.query(query, (err2, res2) => {
                if (err2) throw err2;
                const viewTable = require('./viewTable');
                viewTable(connection, "Add", "Employee");
              });
            });
          });
        });
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
              message: "Please select department: ",
              choices: depts
            }]
          )
          .then((data) => {
            query = `INSERT INTO role (title, salary, department_id) VALUES ('${data.title}', ${data.salary}, ${data.dept_id.split(':')[0]})`;
            // console.log(query);
            connection.query(query, (err1, res1) => {
              if (err1) throw err1;
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