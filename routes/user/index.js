"use strict"

const get = require("#controllers/user/get")

const userRoutes = async (fastify) => {
	fastify.get("/", get)

}

module.exports = userRoutes
