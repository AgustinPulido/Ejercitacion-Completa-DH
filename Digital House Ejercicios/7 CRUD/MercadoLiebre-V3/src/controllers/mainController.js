const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products-db.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
    index: (req, res) => {
        const inSale = [];
        const visited = [];
        products.forEach((e) => {
            if (e.category == "in-sale") {
                inSale.push(e);
            } else {
                visited.push(e);
            }
        });
        res.render("index", {
            inSale,
            visited,
        });
    },
    search: (req, res) => {
        // Do the magic
    },
};

module.exports = controller;
