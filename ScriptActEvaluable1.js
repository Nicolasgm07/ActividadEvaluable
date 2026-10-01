function precioDescuento(precioTotal){
    if(precioTotal < 50){
        return precioTotal;
    }
    else if(precioTotal >= 50 && precioTotal <= 99.99){
        return precioTotal - (precioTotal* 0.05);
    }
    else if(precioTotal >= 100 && precioTotal <= 199.99){
        return precioTotal = precioTotal - (precioTotal* 0.10);
    }
    else{
        return precioTotal = precioTotal - (precioTotal* 0.15);
    }}

function precioIva(precioTotal){
    return precioTotal = precioTotal * 1.21;
};

function actEvaluable() {

    let salir = false;
    let numOperaciones = 0;
    let gastoTotal = 0;
    let gastoMayor = 0;
    let gastoMenor = Infinity;

    do{
    numOperaciones++;
    let precio = parseInt(window.prompt("Introduce el precio del producto: "));
    let cantidad = parseInt(window.prompt("Introduce la cantidad de unidades del producto: "));

    if(precio <= 0 || cantidad <= 0 || isNaN(precio) || isNaN(cantidad)){
    console.error("El precio y la cantidad deben tener valores correctos");
    break;
    }

    let precioTotal = precio * cantidad;
    console.log("El precio total es: " + precioTotal)

        precioTotal = precioDescuento(precioTotal);

        console.log("El precio con descuento es: " + precioTotal);

        precioTotal = precioIva(precioTotal);

        gastoTotal += precioTotal;

        if(gastoMayor < precioTotal){
            gastoMayor = precioTotal;
        }
        if(gastoMenor > precioTotal){
            gastoMenor = precioTotal;
        }

        console.log("El precio con el descuento mas el IVA es: " + precioTotal);

        salir = window.confirm("Has terminado la compra?");
    }while(!salir);
    console.log("Has salido, has realizado: " + numOperaciones + " operaciones, has gastado en total: " + gastoTotal + ", has gastado de media: " + gastoTotal / numOperaciones + ", El mayor gasto ha sido: "+ gastoMayor + ", y el menor: " + gastoMenor);

}

actEvaluable();

