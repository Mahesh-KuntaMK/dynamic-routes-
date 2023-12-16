//first i need to create a separate model for cart

//cart is like we should store the selected products into cart so we need a cart json file

//then we should fetch those products from all products

//then find correct id then place in that respective position 

//


const fs=require('fs');
const path=require('path');


const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'cart.json'
  );

module.exports=class Cart{

        
         static addProduct(id,productprice){
            
            fs.readFile(p,(err,filecontent)=>{
                     let cart={products:[],price:0};
                     if(!err){
                        cart=JSON.parse(filecontent);
                        console.log("hello");
                     }
                     else{
                        console.log(err)
                     }
                  
                    const  existingProductIndex=cart.products.findIndex(prod=>prod.id===id);
                    let updateProduct;
                     const existingProduct=cart.products[existingProductIndex]
                     if(existingProduct){
                        updateProduct={...existingProduct}
                        updateProduct.qty=existingProduct.qty+1
                        cart.products=[...cart.products];
                        cart.products[existingProductIndex]=updateProduct;
                     }
                     else{
                        updateProduct={id:id,qty:1}
                        cart.products=[...cart.products,updateProduct]
                     }


                     cart.price=cart.price+ +productprice
                           
                     fs.writeFile(p,JSON.stringify(cart),(err)=>{
                        console.log(err);
                     })
                    
                  
 
         })
      }
   }

