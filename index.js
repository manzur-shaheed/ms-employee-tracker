// dependencies
const main = require('./src/main');
const connection = require('./src/connection');

// actions
// const actions = (action, table) => {
//     switch(action) {
//         case "View":
//             switch(table) {
//                 case "Employee":
//                     query = "SELECT e.id, e.first_name, e.last_name, title, name AS department, salary, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee AS e LEFT JOIN employee AS m ON m.id = e.manager_id LEFT JOIN role AS r ON e.role_id = r.id LEFT JOIN department AS d ON r.department_id = d.id ORDER BY e.id";
//                     break;
//                 case "Role":
//                     query = "SELECT r.id, title, salary, name AS department FROM role AS r LEFT JOIN department AS d on r.department_id = d.id ORDER BY r.id";
//                     break;
//                 case "Department": 
//                     query = "SELECT id, name AS department FROM department ORDER BY id";
//                     break;
//             }
//             connection.query(query, (err, res) => {
//                 if (err) throw err;
//                 console.log("");
//                 console.table(res);
//                 subMenu(action);
//             });
//             break;
//     }
// }

// const actions = (action, table) => {
//     switch(action) {
//         case "View":
//             viewTable(connection, action, table);
//             break;
//     }
// }
// submenu
// const subMenu = (action) => {
//     inquirer.prompt(
//         questions = [{
//             type: "list",
//             name: "selection",
//             message: `Please select ${action} menu option: `,
//             choices: ["Employee", "Role", "Department", "Return to Main"]
//           }]        
//     )
//     .then((data) => {
//         // console.log(action);
//         switch(data.selection) {
//             case "Return to Main":
//                 main();
//                 break;
//             default:
//                 actions(action, data.selection);
//                 break;
//         };
//     });
// }

// main menu questions
// const main = () => {
//     inquirer.prompt(
//         questions = [{
//           type: "list",
//           name: "selection",
//           message: "Please select menu option: ",
//           choices: ["View", "Add", "Delete", "Exit"]
//         }]
//       )
//       .then((data) => {
//         switch(data.selection) {
//             case "Exit":
//                 terminate();
//                 break;
//             default:
//                 subMenu(data.selection);
//                 break;
//         }
//       });
// }

// 
main(connection);