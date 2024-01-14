const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Expense=sequelize.define('Expensetable',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allownull:false,
    
  },
  amount:{
    type:Sequelize.DOUBLE,
    allownull:false
  },
  description:{
    type:Sequelize.STRING,
    allownull:false
  },
  category:{
    type:Sequelize.STRING,
    allownull:false
  }
 
});

module.exports=Expense;