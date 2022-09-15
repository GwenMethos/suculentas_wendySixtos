class Suculentas {
    constructor(tipo, precio){
        this.tipo = tipo;
        this.precio = precio;
        this.stock = 50;
    }
    sumarStock(stock){
        this.stock =  this.stock + stock;
    }

}

const cactus = new Suculentas("Cactus,", 200);
const conTallo = new Suculentas("Arbol De Jade", 500);
const colgantes = new Suculentas("Cola de burro", 150);

const stockProductos = [];
stockProductos.push(cactus);
stockProductos.push(conTallo);
stockProductos.push(colgantes);

console.log(stockProductos);

for (let stock of stockProductos){
    console.log(stock);
}

function aumentarColgantes(arrayProductos){
    for (let stock of arrayProductos){
        if(stock.tipo === "Cola de burro"){
            stock.sumarStock(500);
        }
    }
}
aumentarColgantes(stockProductos);
console.log(stockProductos); 




