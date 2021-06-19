// actions
const viewTable = require('./viewTable');
const add = require('./add');

const actions = (connection, action, table) => {
    switch(action) {
        case "View":
            viewTable(connection, action, table);
            break;
        case "Add":
            add(connection, action, table);
            break;
    }
}

// export 
module.exports = actions;