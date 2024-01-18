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
  console.log(title,'title')
  req.user
  .createProduct({
    title:title,
    price:price,
    imageUrl:imageUrl,
    description:description
  })
  .then((result)=>{
     console.log('this is book is added')
     res.redirect('/admin/products')
  })
  .catch(err=>console.log(err));
 
};


exports.getEditProduct = (req, res, next) => {
  const editMode=req.query.edit;
  if(!editMode){
            return res.redirect('/');
  }
  const prodId=req.params.productId;

  req.user.getProducts({where:{id:prodId}})
 
  // Product.findByPk(prodId)
  .then(products=>{
    const product=products[0];
    if(!product){
      return res.redirect('/');
    }
    console.log(product)
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing:editMode,
      product:product
    });
  })
  .catch(err=>console.log(err));
  
};
exports.postEditProduct=(req,res,next)=>{

  const prodId=req.body.productId;
  console.log('product id',prodId);
  const updatePrice=req.body.price;
  const updateTitle=req.body.title;
  const updateImageUrl=req.body.imageUrl;
  const updateDesc=req.body.description;
   
  Product.findByPk(prodId)
  .then(product=>{
      product.title=updateTitle,
      product.price=updatePrice,
      product.imageUrl=updateImageUrl,
      product.description=updateDesc
      return product.save();   
  })
  .then(result=>{
    res.redirect('/admin/products')
  })
  .catch(err=>console.log(err))

}

exports.getProducts = (req, res, next) => {
  req.user.getProducts()
  .then((products)=>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
   // res.json(products);
  })
  .catch(err=>console.log(err));
};

exports.postdeleteProduct=(req,res,next)=>{
  const prodId=req.body.productId;
   
  Product.findByPk(prodId)
  .then(product=>{
           product.destroy();
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
     Booking.findByPk(prodId)
     .then(product=>{
        product.destroy();
     })
     .catch(err=>console.log(err))
}