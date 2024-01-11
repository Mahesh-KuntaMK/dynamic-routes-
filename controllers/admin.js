const Product = require('../models/product');
const Booking= require('../models/booking');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing:false,
   
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title:title,
    price:price,
    imageUrl:imageUrl,
    description:description
  })
  .then((result)=>{
     console.log('this is book is added')
  })
  .catch(err=>console.log(err));
  res.redirect('/')
};


exports.getEditProduct = (req, res, next) => {
  const editMode=req.query.edit;
  if(!editMode){
            return res.redirect('/');
  }
  const prodId=req.params.productId;
 
  Product.findAll({where:{id:prodId}})
  .then(product=>{
    if(!product[0]){
      return res.redirect('/');
    }
    console.log(product[0])
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing:editMode,
      product:product[0]
    });
  })
  .catch(err=>console.log(err));
  
};
exports.postEditProduct=(req,res,next)=>{

  const prodId=req.body.productId;
  const updatePrice=req.body.price;
  const updateTitle=req.body.title;
  const updateImageUrl=req.body.imageUrl;
  const updateDesc=req.body.description;
   
  Product.findAll({where:{id:prodId}})
  .then(product=>{
      product[0].title=updateTitle,
      product[0].price=updatePrice,
      product[0].imageUrl=updateImageUrl,
      product[0].description=updateDesc
      return product[0].save();   
  })
  .then(result=>{
    res.redirect('/admin/products')
  })
  .catch(err=>console.log(err))

}

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then((products)=>{
    // res.render('admin/products', {
    //   prods: products,
    //   pageTitle: 'Admin Products',
    //   path: '/admin/products'
    // });
    res.json(products);
  })
  .catch(err=>console.log(err));
};

exports.postdeleteProduct=(req,res,next)=>{
  const prodId=req.body.productId;
   
  Product.findAll({where:{id:prodId}})
  .then(product=>{
           product[0].destroy();
           res.redirect('/admin/products')
  })
 
  .catch(err=>console.log(err))
}

exports.addUser=(req,res,next)=>{
      const name=req.body.Name
      const email=req.body.Email;
      const number=req.body.Number;
      const date=req.body.Date;
      const time=req.body.Time;
      console.log(name)
      Booking.create({
        Name:name,
         Email:email,
       Number:number,
        Date:date,
        Time:time
      })
      .then(product=>{
        res.json(product)
      })
      .catch(err=>{
        console.log(err)
      })
    
   
}

exports.getUser=(req,res,next)=>{
     console.log('mahesh')
     Booking.findAll()
     .then(products=>{
          res.json(products);
     })
       
}
exports.deleteProduct=(req,res,next)=>{
     let prodId=req.params.productId;
     Booking.findAll({where:{id:prodId}})
     .then(product=>{
        product[0].destroy();
     })
     .catch(err=>console.log(err))
}