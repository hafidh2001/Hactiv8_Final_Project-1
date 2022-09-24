import db from "../db/database.js";

const findAllUser = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT id, name, description, quantity FROM products_tab')
          .then(({ rows }) => {
            const result = rows.map((element) => {
              return new Product(element.id, element.name, element.description, element.quantity);
            });
            resolve(result);
          })
          .catch((err) => {
            reject(err);
          });
      });
}

export { findAllUser }