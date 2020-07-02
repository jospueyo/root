// Obtener elementos clase close
let links = document.querySelectorAll('.close');

// Recorrelos
links.forEach(function(link){
  // Añadir un elemento click a cada uno de ellos
  link.addEventListener("click",function(ev){
    ev.preventDefault();
    let content = document.querySelector('.content');
    // li traiem l'animació
    content.classList.remove("animate__zoomIn");
    content.classList.remove("animate__animated");

    // li afegim altres classes
    content. classList.add("animate__zoomOut");
    content. classList.add("animate__animated");

    // activem l'enllaç després de 600 ms
    setTimeout(function(){
      location.href = "/boletines";
    },600);
  });
});


let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
  icono.classList.remove("far");
});
