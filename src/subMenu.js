// sub menu functions
const inquirer = require('inquirer');
const actions = require('./actions');

const subMenu = (connection, action) => {
  inquirer.prompt(
      questions = [{
          type: "list",
          name: "selection",
          message: `Please select ${action} menu option: `,
          choices: ["Employee", "Role", "Department", "Return to Main"]
        }]        
  )
  .then((data) => {
      // console.log(action);
      const main = require('./main');
      switch(data.selection) {
          case "Return to Main":
              main(connection);
              break;
          default:
              actions(connection, action, data.selection);
              break;
      };
  });
}

// export 
module.exports = subMenu;