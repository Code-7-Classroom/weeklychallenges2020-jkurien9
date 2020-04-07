function pizzaSlices(slices){
    return slices;
}

function sharePizza(people){
    var sharePizza = pizzaSlices(8);
    var eachPerson = (sharePizza / people).toFixed(2);
    return `Each person gets ${eachPerson} slices of pizza`;
}

console.log(sharePizza(2));
console.log(sharePizza(3));