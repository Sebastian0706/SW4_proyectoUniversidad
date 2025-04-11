const sequelize = require('sequelize')
const { sequelize } = require('sequelize')
require('dotenv').config

const sequelize = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
)

sequelize.authenticate({ force: true })
    .then(() => console.log("conexion exitosa"))
    .catch(err => console.error("error en la conexion", err))

module.exports = sequelize;