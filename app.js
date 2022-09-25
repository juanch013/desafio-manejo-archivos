const Product = require('./objects/product.class');
const Contenedor = require('./objects/Contenedor.class');

let cont = new Contenedor("products.json");

cont.save({
    title:"aaa",
    price:130,
    thumbnail:"aa"
})

cont.save({
    title:"bbb",
    price:140,
    thumbnail:"bbb"
})

cont.save({
    title:"ccc",
    price:160,
    thumbnail:"ccc"
})

cont.save({
    title:"ddd",
    price:170,
    thumbnail:"ddd"
})

cont.print()

cont.deleteById(2);

console.log(cont.getAll());

cont.deleteAll()

cont.print()
