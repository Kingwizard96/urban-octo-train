// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToCategory(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Categories have many Products
Category.hasManyProduct(Product, { 
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToManyTag(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToManyProduct(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
