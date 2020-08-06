const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products-db.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

// let db = require('../database/models');


// Genero una función para obtener productos según su Id ya que este es el dato que viajará por parámetro
function getProductById(id){
    return products.find(product => product.id == id);
};

// Genero una función para generar y asignar un id a cada producto
function productIdGenerator() {
    if (products.length) {
      return products.length + 1;
    } else {
      return 1;
    }
  }

const controller = {
    // Root - Show all products
    index: (req, res) => {
        res.render('products', {products: products})
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        const product = products.find((e) => {
            return e.id == req.params.id;
        });
        if (!product) return res.redirect("/");

        res.render("detail", { product });
    },

    // Create - Form to create
    create: (req, res) => {
        res.render('product-create-form')
        // Do the magic
    },

    // Create -  Method to store
    store: (req, res) => {
        let product = {
            id: productIdGenerator(),
            ...req.body,
        };

        products.push(product);

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '), 'utf-8');
        

        res.redirect("/products/detail/" + product.id);
    },

    // Update - Form to edit
    edit: (req, res) => {
 
       let productToEdit = getProductById(req.params.id);

        // Si no encuentra el producto a editar redirecciona a la Home

       if (productToEdit == null) return res.redirect("/");

    //    Envío a la vista el formulario para editar el producto y los datos del producto que voy a editar

        res.render('product-edit-form', {productToEdit: productToEdit})
    },
    // Update - Method to update
    update: (req, res) => {

        let product = getProductById(req.params.id);

        // Si no encuentra el producto a editar redirecciona a la Home
        
        if (product == null) return res.redirect("/");

        //Actualizar los datos del producto. Reemplazo los datos que tenía con los que me llegan por body
        product = {
            ...product,
            ...req.body,
        };

        //GUARDAR EL PRODUCTO EN LA DB
        const index = products.findIndex((product) => {
            return product.id == req.params.id;
        });
        products.splice(index, 1, product);

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '), "utf-8");

        res.redirect("/products/detail/" + product.id);
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        const index = products.findIndex((e) => {
            return e.id == req.params.id;
        });

        if (index == -1) return res.redirect("/");

        products.splice(index, 1);

        fs.writeFileSync(productsFilePath, JSON.stringify(products), "utf-8");

        res.redirect("/");
    },
};

module.exports = controller;
