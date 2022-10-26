const dropTable = [];

// query
const drop_users = `DROP TABLE IF EXISTS users CASCADE;`;
dropTable.push(drop_users);

const drop_reflections = `DROP TABLE IF EXISTS reflections CASCADE;`;
dropTable.push(drop_reflections);

export default dropTable;
