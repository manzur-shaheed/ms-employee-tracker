// main menu functions
const inquirer = require('inquirer');
const subMenu = require('./subMenu');

const main = (connection) => {
    inquirer.prompt(
        questions = [{
          type: "list",
          name: "selection",
          message: "Please select menu option: ",
          choices: ["View", "Add", "Delete", "Exit"]
        }]
      )
      .then((data) => {
        switch(data.selection) {
            case "Exit":
                connection.end();
                break;
            default:
                subMenu(connection, data.selection);
                break;
        }
      });
}
// export 
module.exports = main;