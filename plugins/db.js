"use strict"

const glob = require("glob")
var path = require("path")
const fp = require("fastify-plugin")
const { Sequelize } = require("sequelize")
const { created_at, updated_at } = require("#utils/db")

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE } = process.env

const loadModels = (sequelize) => {
	glob.sync(path.join("models", "*.js")).reduce(function (loaded, file) {
		const model = require(`../${file}`)
		model(sequelize)
	}, {})
}

module.exports = fp(async (fastify) => {
	const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
		host: MYSQL_HOST,
		port: MYSQL_PORT,
		dialect: "mysql",
	})
	sequelize.addHook("beforeDefine", (attributes) => {
		attributes.created_at = created_at
		attributes.updated_at = updated_at
	})
	try {
		await sequelize.authenticate()
		console.log("DB connected")
	} catch (error) {
		console.error("DB error:", error)
	}
	loadModels(sequelize)
	fastify.decorate("db", sequelize)
})
