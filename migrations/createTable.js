const createTable = [];

// query
const create_ext_uuid = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
createTable.push(create_ext_uuid);

const create_users = `CREATE TABLE IF NOT EXISTS users
(
    user_id       uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    email         VARCHAR ( 255 ) UNIQUE NOT NULL,
    password      VARCHAR ( 255 ) NOT NULL,
    created_date  TIMESTAMP NOT NULL,
    modified_date TIMESTAMP NOT NULL
);`;
createTable.push(create_users);

const create_reflection = `CREATE TABLE IF NOT EXISTS reflections
(
    reflection_id serial PRIMARY KEY,
    success       VARCHAR ( 255 ) NOT NULL,
    low_point     VARCHAR ( 255 ) NOT NULL,
    take_away     VARCHAR ( 255 ) NOT NULL,
    owner_id      uuid NOT NULL,
    created_date  TIMESTAMP NOT NULL,
    modified_date TIMESTAMP NOT NULL, 
    CONSTRAINT fk_user FOREIGN KEY(owner_id) references users(user_id) ON DELETE 
    CASCADE ON UPDATE RESTRICT
);`;
createTable.push(create_reflection);

export default createTable;
