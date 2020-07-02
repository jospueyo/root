/* Xarxes de suport per javaScript
developer.mozzila.org/es
w3schools.com
*/

// Utilitzar constants (const) en lloc de variables (let) optimitza el rendiment

let numero = 6;

do{
  user = prompt();
  if (user == numero){
    console.log("Correcte!");
  }else if (user > numero){
    console.log("el número és més petit");
  }else if (user < numero){
    console.log("el número és més gran");
  }else{
    console.log("el número introduït no és correcte")
  }
} while (user != numero)
