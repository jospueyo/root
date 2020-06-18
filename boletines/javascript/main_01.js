// DOM els selectors funcionen com amb css
// Si n'hi ha més d'un, retorna només el primer
let container = document.querySelector(".container");

//seleccionar tots els elements del document
/*
let links = document.querySelectorAll("a");

//loop pels elements de links
links.forEach(function(link){
  console.log(link);
});
*/

let celdas = document.querySelectorAll("td");

//loop pels elements de links
celdas.forEach(function(td){
  td.addEventListener('click',function(){
    console.log(this);
  })
})
