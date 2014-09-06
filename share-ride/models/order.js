
var states = 'uncomplete process deliver complete'.split(' ')
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDv4
    },
    state: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Order.belongsTo(models.User)
        // Order.hasMany(models.Items)
      }
    }
  })

  return Order
}