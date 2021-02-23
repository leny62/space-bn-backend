/* eslint-disable func-names */
module.exports = (sequelize, DataTypes) => {
  const RoomModel = sequelize.define(
    "RoomModel",
    {
      roomType: DataTypes.STRING,
      description: DataTypes.STRING,
      roomLabel: DataTypes.STRING,
      hotelId: DataTypes.INTEGER,
      status: DataTypes.STRING,
      price: DataTypes.STRING,
      roomImage: DataTypes.ARRAY(DataTypes.STRING),
    },
    {
      sequelize,
      modelName: "RoomModel",
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    }
  );
  RoomModel.associate = function (models) {
    // define association can be defined here
    RoomModel.belongsTo(models.hotel, {
      foreignKey: "hotelId",
      as: 'Hotel'
    });
    RoomModel.hasOne(models.request, {
      foreignKey: 'idRoom',
      as: 'Request'
    })
  };
  return RoomModel;
};
