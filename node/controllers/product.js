const Product = require("../models/products")


exports.index = function (req, res, next){
    Product.find({}, (err, products) => {
        if (err)
            return next(err)
        res.send(products)
    })
}

exports.create = function(req, res, next){
    let product = new Product ({
        name: req.body.name,
        price: req.body.price
    });

    product.save( err => {
        if(err)
            return next(err)
        res.send("Product created succesfully")
    })
    
}