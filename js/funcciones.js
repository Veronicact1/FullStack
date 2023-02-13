// function sumar(a, b) {
//     console.log(a + b);
//     }
//     // 5
//     sumar(2, 3);
//     // NaN (undefined + undefined)
//     sumar();
//     // 3
//     sumar(1, 2);
//     // 3
//     sumar(1, 2, 3, 4);
//     // 12 174
//     sumar('1', 2);
//     // 12
//     sumar(1, '2');

//     (function saludar() {
//         console.log('Hola');
//         })();
        // error
        //saludar();
//         //Ejercicio 1: escribir una programa con cuatro funciones de flecha: sumar, restar,
// multiplicar y dividir (cada una de ellas debe aceptar dos parámetros y devolver el
//     resultado). Posteriormente invocar a las cuatro funciones con valores arbitrarios.

const sumar = (param1,param2, callback) => {
callback(param1+param2);};
const callback=(resultado) =>{
    console.log(resultado);
};
sumar(1,2,(resultado) => 
setTimeout(() => {
    console.log(resultado);
}, 1000)
);

const restar=(param1,param2,callback1) => 
{
callback1(param1-param2);
};
const callback1=(resultado)=>{
    console.log(resultado);
}
restar(2,1,(resultado) =>
    setTimeout(() =>{
    console.log(resultado);
},2000));
// const multiplicar=(param1,param2) => 
// {
// return param1*param2;
// };
// console.log(multiplicar(7,2));
// const dividir=(param1,param2) => 
// {
// return param1/param2;
// };
// console.log(dividir(1,2));

// setTimeout(() => {
//     console.log('Hola');
//     setTimeout(() => {
//         console.log('Adiós');
//         }, 500);
//     }, 1000)
//     console.log(setTimeout)
//     setTimeout(() => {
//         console.log('Esta instrucción se ejecuta después de 5 segundos');
//         }, 5000);
//         setInterval(() => {
//         console.log('Esta instrucción se ejecuta cada 5 segundos');
//         }, 5000);