// actions
const viewTable = require('./viewTable');
const addRec = require('./addRec');
const delRec = require('./delRec');

const actions = (connection, action, table) => {
    switch(action) {
        case "View":
            viewTable(connection, action, table);
            break;
        case "Add":
            addRec(connection, action, table);
            break;
        case "Delete":
            delRec(connection, action, table);
            break;
    }
}

// export 
module.exports = actions;