// const frutas = ['Banana', 'Orange', 'Apple', 'Mango'];
// const lon = frutas.length;
// // for clásico
// for (let i = 0; i < lon; i++) {
// console.log(frutas[i])
// }
// // for...of
// for (let fruta of frutas) {
// console.log(fruta)
// }

// let coches=["toyota", "lexus", "ferrari"];
// for (let coche of coches)
// {console.log(coches.toString())
// }
// const frutas = ['Banana', 'Orange', 'Apple', 'Mango'];
// // 5
// console.log(frutas.unshift('Lemon'));
// // ["Lemon", "Banana", "Orange", "Apple", "Mango"]
// console.log(frutas);
// const coches = ['Saab', 'Volvo', 'BMW'];
// // BMW
// console.log(coches.shift());
// // ["Saab", "Volvo"]
// console.log(coches);

//  let programmas=["CSS", "JavaScript", "HTML", "PHP"]
//  console.log(programmas.push("C++"))
//  console.log(programmas)
//  console.log(programmas.shift())
//  console.log(programmas)
//  console.log(programmas.unshift("Python"))
//  console.log(programmas)
//  console.log(programmas.pop())
//  console.log(programmas)
//  delete programmas[0]
//  console.log(programmas)
//  console.log(programmas.splice(3,1, "Lemon", "Banana"))
//  console.log(programmas)
//  const programmas1=programmas.slice(1)
//  console.log(programmas1)
  
 //ex.212
//  let numero_bucle=[];
//  for (let d=0; d>=6; d++)
//  numero_bucle.push(Math.floor(Math.random()*100))
//  console.log(numero_bucle)
// for (const d of numero_bucle)
// {
//     console.log(d)
// } //----Ex marc github

// let colores=["Red", "Black", "Blue"];
// let noncolores=[];
// console.log(colores);
// for (const color of colores) { noncolores.push(color);
    
// }
// console.log(noncolores);

//ex4
let sir=["Cheese","Milk","Bread","Limoncela"];
let sire=["Hat","Shirt","Watch","Boots"];
let contador=0;
let posiciones=[];
for (let u=0; u < Array.length; u++); {
    for ( let j=0; j < Array.length; j++);
    {
        if(sir[u]==sire[j])
       console.log(posiciones=posiciones.push(sir[u] == sire[j]))
        contador++;
    }
}
console.log(indexOf(sir))

// const coches = [
//     { type: 'Volvo', year: 2016 },
//     { type: 'Saab', year: 2001 },
//     { type: 'BMW', year: 2010 }
//     ];
//     const cochesOrdenados = coches.sort((a, b) => a.year - b.year);
//     console.log(cochesOrdenados);