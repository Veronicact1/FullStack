// let q="Say yes";
// let e="Say no";
// if (q.charAt(0) == e.charAt(0))
// {
//     console.log("Son iguales")
// }
// else
// {
// console.log("No son iguales");
// }  -----CORRECT ex1 pag 204


// let rt="Big Data"
// let ry="Small Data"
// if (rt.charAt(0,2) == ry.charAt(0,2))
// {
// console.log("Son iguales")
// }
// else
// {
//     console.log("No son iguales")
// }
// if (rt.charAt(-1,-3) == ry.charAt(-1,-3))
// {
//     console.log("Son iguales")
// }
// else
// {
//     console.log("No son iguales")
// }

// // or

// if ( (rt.charAt(0,2) == ry.charAt(0,2) || rt.charAt(-1,-3) == ry.charAt(-1,-3)))
// {
//     console.log("Son iguales")
// }
// else
// {
//     console.log("No son iguales")
// } 

// ex.3
// let tex="Learn abc abecedar";
// search=tex.search(/[abc]/);
// if ((search == tex.charAt(0)) && (search == tex.length -1))
// {
//     console.log("Esta al principio");
// }
// else
// {
// console.log("esta dentro")
// }

// ex.4
// let tic="Let´s write a story in few words";
// let posicion=4;
// let letra1;
// let letra2;

// letra1=tic.charAt(posicion+1);
// letra2=tic.charAt(posicion-1);
// if(letra1==letra2)
// {
//    console.log("En la posicion"+ posicion+ "las letras son iguales") 
// }
// else
// {
// console.log()
// }



//x.5
// let palindromo="aigofoia";
// let inverso=""
// console.log(palindromo.charAt(palindromo.length-1));
// console.log(palindromo.length-1);
// for (let k=palindromo.length-1; k=>0; k--)
// {
//  inverso += palindromo.charAt(k);
//  console.log(inverso);
// };
// if (palindromo == inverso)
// {
// console.log("La variable palindromo: " +palindromo+ "es un palindromo")
// }
// else{
//     console.log("La variable palindromo: " +palindromo+ " no es un palindromo")
// } ----Ceva nu merge



// ex7
let ti="Let´s write a story in few words"
console.log(ti.slice(0,-2)) //se puede hacer con ti.slice
// ex8
let ti="Let´s write a story in few words"

// export.9
// let t="Let´s write a story in few words"
// console.log(t.toUpperCase(" "))



// const str = 'Visita MICROSOFT! Microsoft!Another Microsoft';
// // Visita MICROSOFT! Corenetworks! (case sensitive y solamente primera coincidencia)
// console.log(str.replace('Microsoft', 'Corenetworks'));
// // Visita Corenetworks! Microsoft! (no case sensitive (i) y solamente primera
// // coincidencia)
// console.log(str.replace(/Microsoft/i, 'Corenetworks'));
// // Visita Corenetworks! Corenetworks! (no case sensitive (i) y todas las coincidencias
// // (g))
// console.log(str.replace(/Microsoft/ig, 'Corenetworks'));
//  //----Corect
// console.log(str.toUpperCase());

// const text1 = 'Hello';
// const text2 = 'World';
// const text3 = '!';
// // HelloWorld
// console.log(text1.concat(text2));
// // Hello World
// console.log(text1.concat(' ', text2));
// // Hello World!
// console.log(text1.concat(' ', text2, text3));
