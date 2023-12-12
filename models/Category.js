const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Product = require('./Product.js');

class Category extends Model { }

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

Category.hasMany(Product, {
  foreignKey: 'product_id', // This should match the actual foreign key column name in your Product model
  onDelete: 'CASCADE', // Optional: Specify the behavior on deletion
});

module.exports = Category;
