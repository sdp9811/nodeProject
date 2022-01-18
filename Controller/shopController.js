const ProductModel=require('../Model/product')

exports.productDetailsShop=(request,response)=>{
    ProductModel.fetchProductData().then(products=>{
        response.render('Shop/shopDetails.ejs',{
            title_shop:"details page",
            data: products
        });
    }).catch(err=>{
        console.log("shopData fetch error : ", err)
    })
}
    exports.ViewProductShop=(request, response)=>{

        const product_id=request.params.mid;
        console.log(product_id);
    }

