const { expect } = require('chai');

const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
  } = require('sequelize-test-helpers')

  const Category = require('../models/Category')
  const Product = require('../models/Product')
  const CategoryProduct = require('../models/CategoryProduct')
  
  describe('../models/Category', () => {
    const Model = Category(sequelize, dataTypes)

    const instance = new Model()
    checkModelName(Model)('Category')
    
    context('properties', () => {
      ;['name'].forEach(checkPropertyExists(instance))
    })


    it("defined a belongsToMany association with Category through CategoryProduct as 'categories'", () => {
        expect(Product.belongsToMany).to.have.been.calledWith(Category, {
            through: CategoryProduct,
            as: 'categories'
        })
    })

  })