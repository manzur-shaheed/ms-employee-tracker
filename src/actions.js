// actions
const viewTable = require('./viewTable');

const actions = (connection, action, table) => {
    switch(action) {
        case "View":
            viewTable(connection, action, table);
            break;
    }
}

// export 
module.exports = actions;