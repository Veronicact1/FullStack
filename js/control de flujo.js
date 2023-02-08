var a = 4;
var b = 2;
if (a > b) {
    console.log(`a (${a}) es mayor que b (${b})`);
}
else if (a > b) {
    console.log(`a (${a}) es mayor que b (${b})`);
}
else if (a < b) {
    console.log(`b (${b}) es mayor que b (${a})`);
}
else {
    console.log(`b (${b}) es igual que b (${a})`);
}

var c = 2;
var d = 3;
if (a + b > c + d) {
    document.write(`La suma de a + b es mayor que c + d`);
}
else {
    document.write("NO aparece nada");
};

let angulo1 = 30;
let angulo2 = 45;
let angulo3 = 90;
let suma = angulo1 + angulo2 + angulo3;

if (angulo1 + angulo2 + angulo3 == 180){
    document.write("<br>Si, pueden hacer un triangulo");
} else {
    document.write("<br> NO, pueden hacer un triangulo");
}

let var1 = 4372842;
if (var1 % 2 == 0) {
console.log("La cifra de a " + var1 + " ")
}
else 
{
console.log("La cifra de a" + var1 + "no es par")
}
let numero1 =10;
let numero2=20;
let numero3=30;
if (numero1>numero2 && numero1>numero3)
{    
console.log("El numero 1 es mayor")
}
else if(numero2>numero3){

console.log("El numero 2 es mayor")
}
else
{
console.log("El numero 3 es mayor")
}
var fecha=new Date();
let date=fecha.getDate();
let month=fecha.getMonth();

switch(month) 
{
    case 0: console.log("January");
    break;
case 1: console.log("February"+date);
break;
case 2: console.log("Mars");
break;
case 3: console.log("Mars");
break;
case 4: console.log("April");
break;
case 5: console.log("May");
break;
case 6: console.log("June");
break;
case 7: console.log("July");
break;
}
 
for (let e=50; e<1; e++);
{
    console.log("e");
}
for (let f=0; f<=10; f++)
{
    document.write(" 5 x " + f + " = " + f * 5 + "<br>");
}
let nombre=prompt("escribe tu nombre");
for (let j=0; j<10; j++);
document.write(nombre+"<br>");

let palabra=prompt("Dame una palabra");
for (let r=1; r<10; r++);
{
  console.log(r + 1 + "." + palabra);
}






  