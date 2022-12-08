const { DataTypes, Model } = require("sequelize")

module.exports = (sequelize) => {
	class User extends Model {}

	User.init(
		{
			firstName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			lastName: {
				type: DataTypes.STRING,
			},
			test: {
				type: DataTypes.BOOLEAN,
			},
		},
		{ sequelize }
	)
}
