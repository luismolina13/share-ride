
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDv4
        },
        local_email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        local_password: {
            type: DataTypes.STRING
        },
        local_firstName: {
            type: DataTypes.STRING
        },
        local_lastName: {
            type: DataTypes.STRING
        },

        facebook_id: {
            type: DataTypes.STRING
        },
        facebook_token: {
            type: DataTypes.STRING
        },
        facebook_email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        facebook_name: {
            type: DataTypes.STRING
        }
    }, {
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Order)
            }
        }
    })

    return User
}