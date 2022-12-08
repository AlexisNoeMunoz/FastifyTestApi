const { DataTypes, literal } = require("sequelize")

const created_at = {
	type: DataTypes.DATE(3),
	defaultValue: literal("CURRENT_TIMESTAMP(3)"),
}
const updated_at = {
	type: DataTypes.DATE(3),
	defaultValue: literal("CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"),
}

module.exports = { created_at, updated_at }
