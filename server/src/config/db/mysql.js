const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("project04", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

class Mysql {
  async connect() {
    try {
      await sequelize.authenticate();
      console.log("MySQL connected");
    } catch (error) {
      console.error("Unable to connect MySQL:", error);
    }
  }
}

module.exports = new Mysql();

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });
