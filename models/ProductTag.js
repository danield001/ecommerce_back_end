const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Tag = require('./Tag');
const Product = require('./Product');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id',
        unique: false
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

ProductTag.belongsTo(Tag);
ProductTag.belongsTo(Product);

module.exports = ProductTag;
