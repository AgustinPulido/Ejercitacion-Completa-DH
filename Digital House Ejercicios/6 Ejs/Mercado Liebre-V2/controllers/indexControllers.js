// leo y guardo la infomación del Json

// const fs = require('fs');
// const path = require('path');

// const products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productsDataBase.json'), 'utf-8'));

// // Divido y guardo los productos según la categoría: visitados / ofertas

const products = require('../models/product');

const visited = [];
const inSale = [];

for (let product of products){
  if(product.category == 'visited'){
    visited.push(product);
  } else {
    inSale.push(product);
  }
}


const indexControllers = {
    home: function(req, res, next) {

// Le paso a la vista la información que va a necesitar: son arrays que tengo que leer y recorrer en la vista

        res.render('index', {
          visited,  
          inSale
        });
      },
//Esta es una forma abreviada de visited: visited, me guarda la info en una variable con el mismo nombre.


// Creo el controlador de detalle de productos

    // detail: function(req, res, next) {
    //   // Guardo en una variable el producto que responda a una determina id que se la paso por parámetro

    //   const product = products.find((product)=>{
    //     return product.id == req.params.id;
    //   })

    //   // Debo mostrar un mensaje tanto si lo encuentro como si no
    //   if(product == null){
    //     // Acá debería mostrar un mensaje de error
    //     return res.redirect('/');
    //   }
    //     // Acá debería mostrar el producto
    //     res.render('product-detail', {product});
      
    // },
}


module.exports = indexControllers;