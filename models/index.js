// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {
  through: {
    model: Trip,
    unique: false
  },
  as: 'planned_trips'
});

// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: Trip,
    unique: false
  },
  as: 'planned_trips'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: { ProductTag
    model: Trip,
    unique: false
  },
  as: 'planned_trips'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {ProductTag
    model: Trip,
    unique: false
  },
  as: 'planned_trips'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};