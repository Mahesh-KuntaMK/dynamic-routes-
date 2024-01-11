const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Booking=sequelize.define('bookinguserdata',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allownull:false,
    
  },
  Name:Sequelize.STRING,
  Email:{
    type:Sequelize.STRING,
    allownull:false
  },
  Number:{
    type:Sequelize.DOUBLE,
    allownull:false
  },
  Date:{
    type:Sequelize.STRING,
    allownull:false
  },
  Time:{
    type:Sequelize.STRING,
    allownull:false
  }
});

module.exports=Booking;