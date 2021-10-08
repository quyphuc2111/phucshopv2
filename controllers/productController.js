const Product = require("../models/productModel");
// @desc Get All Productss
// @route Get /api/product
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}
// @desc Get Single Productss
// @route Get /api/product/:name
async function getProduct(req, res, name) {
  try {
    const products = await Product.findByName(name);
    // if (!products) {
    //   res.writeHead(404, { "Content-Type": "application/json" });
    //   res.end(JSON.stringify({ message: "Product Not Found" }));
    // } else 
    
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(products));
    
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  getProduct
};
