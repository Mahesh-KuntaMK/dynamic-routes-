const Expense= require('../models/expense');

exports.getExpenseProducts=(req,res,next)=>{

    Expense.findAll()
    .then(products=>{
      res.json(products)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  exports.addExpenseProducts=(req,res,next)=>{
      
    const amount= req.body.amount;
    const description= req.body.description;
    const category= req.body.category;
   
    Expense.create({
      amount:amount,
      description:description,
      category:category
    })
    .then(product=>{
      res.json(product)
    })
       //console.log('this is product  is added')
    
    .catch(err=>console.log(err));
   
  };
  
  exports.deleteExpenseProduct=(req,res,next)=>{
    const prodId=req.params.productId;
      Expense.findAll({where:{id:prodId}})
      .then(product=>{
        product[0].destroy();
      })
      .catch(err=>{
          console.log(err)
      })
  }
  exports.editExpenseProduct=(req,res,next)=>{
    const prodId=req.params.productId;
    const amount= req.body.amount;
    const description= req.body.description;
    const category= req.body.category;
   
    Expense.findAll({where:{id:prodId}})
    .then(product=>{
      product[0].amount=amount;
      product[0].description=description;
      product[0].category=category;
      return product[0].save();
    })
    .then(product=>{
      console.log("product is edited")
    })
    .catch(err=>{
      console.log(err)
    })
  }
  