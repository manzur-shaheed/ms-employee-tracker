// add function for all tables
const inquirer = require('inquirer');

const departmentBudget = (connection) => {
  connection.query("SELECT CONCAT(id,':',name) AS ID_NAME FROM department ORDER BY id", (err, res) => {
    if (err) throw err;
    let depts = [];
    
    for(i=0; i<res.length; i++) {
      depts.push(res[i].ID_NAME);
    }
    inquirer.prompt(
      questions = [{
        type: "list",
        name: "dept_id",
        message: "Please select department to see budget: ",
        choices: depts
      }]
    )
    .then((data) => {
      query = `SELECT SUM(salary) as budget FROM role WHERE department_id = ${data.dept_id.split(':')[0]}`;
      connection.query(query, (err1, res1) => {
        const bonus = require('./bonus');
        if (err1) throw err1;
        // console.log(res1[0].budget);
        console.log(`Total budget for ${data.dept_id.split(':')[1]} is: ${res1[0].budget}`)
        bonus(connection);
      });
    });

  });
}

// export 
module.exports = departmentBudget;