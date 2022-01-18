const prodArray = [];
// const Product = require("../Model/product");
const ProductModel=require("../Model/product");
exports.getFormDisplay=(request,response)=>{
    response.render('Admin/addProduct',{
        title_page:"add_product"
    }
    )
}


exports.postFormValue=(request,response)=>{
    console.log("collected value from form: ", request.body);
    
     const prodId= request.body.pid;
     const prodName =request.body.pname;
     const prodPrice = request.body.price;
     const Product =new ProductModel(prodId,prodName,prodPrice);
     Product.saveData().then(results=>{
         console.log('created product', results);

     }).catch(err=>{
         console.log(err);

     });
     response.redirect('/details');
    }
 
  
exports.productDetails=(request, response)=>{
    ProductModel.fetchProductData().then(products=>{
        console.log("product: ", products);
        response.render('Admin/prodDetails.ejs',{
            title: "details Page",
            data: products
        });

    }).catch(err=>{
        console.log( "Data fetching error",   err);
    })
    
}  
