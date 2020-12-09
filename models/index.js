const Sequelize = require('sequelize');
const ManufacturersModel = require('./manufacturers');
const ProductsModel = require('./products');

const connection = new Sequelize('candies', 'cbarr70', 'C4nd13$!', {
  host: 'localhost',
  dialect: 'mysql',
});

const Manufacturers = ManufacturersModel(connection, Sequelize);
const Products = ProductsModel(connection, Sequelize, Manufacturers);

Products.belongsTo(Manufacturers);
Manufacturers.hasMany(Products);

module.exports = {
  Products,
  Manufacturers,
};
