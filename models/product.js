const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Product=sequelize.define('product',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allownull:false,
    
  },
  title:Sequelize.STRING,
  price:{
    type:Sequelize.DOUBLE,
    allownull:false
  },
  imageUrl:{
    type:Sequelize.STRING,
    allownull:false
  },
  desciption:{
  type:Sequelize.STRING,
  allownull:false
  }
});

module.exports=Product;