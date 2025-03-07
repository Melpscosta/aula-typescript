interface Multiplicacao {
    (a: number, b: number): number;
}
const multiplicar: Multiplicacao = (x, y) => x * y;
console.log("Multiplicação 3 x 4:", multiplicar(3, 4)); 
console.log("Multiplicação 7 x 2:", multiplicar(7, 2)); 