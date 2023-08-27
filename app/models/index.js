const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_URL || "postgres://user:rrooyyaa@localhost:5432/db_container")

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
