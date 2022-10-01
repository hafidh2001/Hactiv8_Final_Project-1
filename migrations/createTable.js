const createTable = [];

//query
const create_users_table = `CREATE TABLE IF NOT EXISTS users
(
    user_id serial PRIMARY KEY,
    email    VARCHAR ( 255 ) UNIQUE NOT NULL,
    password VARCHAR ( 255 ) NOT NULL,
    created_date timestamp NOT NULL,
    modified_date timestamp NOT NULL
);`;
createTable.push(create_users_table);

const create_reflections_table = `CREATE TABLE IF NOT EXISTS reflections
(
    id serial PRIMARY KEY,
    success    VARCHAR ( 255 ) UNIQUE NOT NULL,
    low_point VARCHAR ( 255 ) NOT NULL,
    take_away VARCHAR ( 255 ) NOT NULL,
    user_id VARCHAR ( 255 ) NOT NULL,
    created_date timestamp NOT NULL,
    modified_date timestamp NOT NULL
);`;
createTable.push(create_reflections_table);

export default createTable;