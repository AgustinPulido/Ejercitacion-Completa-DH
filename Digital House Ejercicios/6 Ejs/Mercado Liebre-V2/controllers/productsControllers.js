// const fs = require('fs');
// const path = require('path');

// const products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productsDataBase.json'), 'utf-8'));

const products = require('../models/product');

// Divido y guardo los productos según la categoría: visitados / ofertas

const visited = [];
const inSale = [];

for (let product of products){
  if(product.category == 'visited'){
    visited.push(product);
  } else {
    inSale.push(product);
  }
}

// Creo el controlador de detalle de productos
const productsControllers = {
detail: function(req, res, next) {
    // Guardo en una variable el producto que responda a una determina id que se la paso por parámetro

    const product = products.find((product)=>{
      return product.id == req.params.id;
    })

    // Debo mostrar un mensaje tanto si lo encuentro como si no
    if(product == null){
      // Acá debería mostrar un mensaje de error
      return res.redirect('/');
    }
      // Acá debería mostrar el producto
      res.render('product-detail', {product});
  },
}


module.exports = productsControllers;