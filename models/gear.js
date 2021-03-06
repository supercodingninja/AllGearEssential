module.exports = function(sequelize, DataTypes) {
  const Gear = sequelize.define("Gear", {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    itemDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    itemWeight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 0
      }
    },
    itemWgtMeasure: {
      type: DataTypes.STRING,
      allowNull: false
    },
    itemStorageLocation: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    itemQuantityInStorage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 0
      }
    },
    itemQuantityInPackingList: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 0
      }
    }
  });

  Gear.associate = function(models) {
    Gear.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Gear;
};
