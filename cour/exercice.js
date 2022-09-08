/** EXERCICE 1
 * Crée uen fonction en JS qui prend deux entiers en parametre et retourne
 * un entier aléatoire compris entre ces deux nombres
 */

function getRandom(min, max) {
  const r = Math.random(); //changement d'echelle 0 -> min et 1 max
  const newRandom = min + r * (max - min);
  return Math.floor(newRandom);
}
// console.log(getRandom(10, 20));


/** EXERCICE 2
 * Utilise la function setTimeout pour afficher un nombre aléatoire après 1 secondes
 */

// console.log('### EXO 2 ###');
// const timerId = setTimeout(() => {
//   console.log("exo 2 ====>", Math.random())
// }, 1000);

/** EXERCICE 3
 * Utilise la function setTimeOut ou setInterval pour afficher
 * 10 nombres aléatoire chacun s'affiche au bout de 1 sec
 */

// console.log('### EXO 3 ###');
// let count = 10;
// const timerId2 = setInterval(() => {
//   console.log("exo 3 set interval", count, Math.random())
//   count -= 1;
//   if (count == 0) {
//     clearInterval(timerId2); // arrete le timer
//   }
// }, 1000)

/**Exercice 4
* Utiliser la function SetTimeout ou setInterval
 pour afficher chaque seconde en entier aleatoire
 compris entre 4 et 10
 le programme s'arrete des que l'entier 8 est générer
*/
// console.log('### EXO 4 ###');

// const timerIdExo4 = setInterval(() => {
//   const r = getRandom(4, 10)
//   console.log("exo 4 set interval", r)
//   if (r == 8) {
//     console.log("fin exo 4 ======", r);
//     clearInterval(timerIdExo4)
//   }
// }, 1000)


// /** Exercice 5
// * Crée un script en js qui affiche des entiers aléatoire entre 4 et 10
// le script s'arrete des que l'entrier 8 est générer
// */
// // let randomexo5;
// // do {
// //   randomexo5 = getRandom(4, 10);
// //   console.log('exo 5', randomexo5)
// // } while (randomexo5 != 8)

// /**Exercice 6
// Crée un script js qui affiche des entiers aléatoire entre 5et 15
// le script s'arrete des qu'il généré duex fois le meme entier
// //  */

// // // generer des nombres aléatoires 
// // // il faut mémoriser les entiers precedements généré
// // const exo6Items = [];
// // let hasFinished = false;
// // do {
// //   const r = getRandom(5,15);
// //   console.log("exo 6 =>", r);
// //   if (exo6Items.includes(r)) {
// //     console.log("exo 6", r, "à été généré 2 fois");
// //     hasFinished = true;
// //   }
// //   exo6Items.push(r);
// // } while (hasFinished == false);
// // console.log("exo6 data =>", exo6Items);


// /** Exercice 7
// * Crée un script qui affiche successivement dans entiers aléatoires entre 5 et 8
// * Le script s'arrete des qu'il génére quatre fois le meme entier
// */
// // function getCount(items, itemToCount) {
// //   let count = 0;
// //   for (const item of items){
// //     if (item == itemToCount) {
// //       count += 1;
// //     }
// //   }
// //   console.log("count", itemToCount,  '=>', count);
// //   return count;
// // }

// // const exo7Items = [];
// // let exo7random = getRandom(5, 8);
// // while(getCount(exo7Items, exo7random) < 3) {
// //   console.log("exo 7 =>", exo7random);
// //   exo7Items.push(exo7random);
// //   exo7random = getRandom(5,8);
// // }
// // exo7Items.push(exo7random);
// // console.log("exo 7 =>", exo7Items);
// // console.log("exo 7 =>", exo7random, "généré 4 fois");
// // 7bis
// const dico = new Map();
// let random;
// do{
//   random = getRandom(5, 8);
//   if(dico.get(random) === undefined){
//     dico.set(random, 1);
//   }
//   else{
//     dico.set(random, dico.get(random) + 1);
//   }
// }while(dico.get(random) < 4);
// console.log("exo 7 =>", dico);
// console.log("exo 7 =>", random, "généré 4 fois");

//partie 2
//EXO1
  function compute(x,y,f){
    console.log(f(x,y));
  }
  function sum(x,y){
    return x+y;
  }
  let x = compute(10,5,(x,y)=>{
    return x*y;
  });
  let y = compute(10,5,sum);
  let z = compute(10,5,function (x,y){
    return x-y ; 
  });

//EXO2
let items = [];
for(i = 0 ; i<30 ;i++)
{
  items[i] = getRandom(100,150);
}
let dico2 = new Map();
for(i = 100 ; i<=150 ;i++)
{
  dico2.set(i,0);
}
console.log(items);
let min;
let max;
let summe = 0;
items.forEach(element => {
  // if(min === undefined && max === undefined){
  //     min = element;
  //     max = element;
  // }
  // else{
  //   // if(min > element){
  //   //   min = element;
  //   // }    
  //   // if(max < element){
  //   //   max = element;
  //   // }
  //   //correction
  // }
  min = element < min ? element : min;
  max = element > max ? element : max;
  summe += element;
  dico2.set(element, dico2.get(element) + 1); 
});
console.log(min);
console.log(max);
console.log(dico2);
let uniqueItems = [];
dico2.forEach((element,key) => {
  if(element > 0)
  {
    uniqueItems.push(key);
  }
});
console.log(uniqueItems);
//Exo3
// 6 -> fonction qui retourne vrais ou faux
// 7
  let pair  = items.filter((v) => v % 2 == 0);
  setTimeout(console.log,1000,"pair =>",pair);
// 8 ->
  let Inf125 = items.filter((v)=> v > 125);
  setTimeout(console.log,1000,"Inf125 =>",Inf125);
// 9 ->
  let unpairAndGreater125 = items.filter((v) => v > 125 && v % 2 == 1);
  setTimeout(console.log,1000,"unpairAndGreater125 =>",unpairAndGreater125);
// 10->
  let pairOrInf125 = items.filter((v) => v > 125 || v % 2 == 0);
  setTimeout(console.log,1000,"pairOrInf125 =>",pairOrInf125);
// items.forEach(element => {
//   if(element % 2 == 0)
//   {
//     pair.push(element);
//   }  
//   if(element > 125)
//   {
//     Inf125.push(element);
//   }
//   if(element > 125 && element % 2 == 1)
//   {
//     unpairAndGreater125.push(element);
//   }  
//   if(element > 125 || element % 2 == 0)
//   {
//     pairOrInf125.push(element);
//   }
// });

