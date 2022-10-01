const dropTable = [];

//query 
const drop_users = `DROP TABLE users;`;
dropTable.push(drop_users);

const drop_reflections = `DROP TABLE reflections;`;
dropTable.push(drop_reflections);

export default dropTable;