let perro = {
  raza: "Doberman",
  edad: 2,
  ladrar: function () {
    alert("Guau!");
  },
};
const equis = $('.equis');

$('.out').hide()

let peliculas = [
  {
    nombre: 'Innocents',
    imagen: 'img/Rectangle 18.png',
    descripcion: 'Dos muchachos que no se gustan pero parece'
  },
  {
    nombre: 'Dark',
    imagen: 'img/Rectangle 19.png',
    descripcion: 'Viajes en el tiempos'
  },
  {
    nombre: 'Cable Girls',
    imagen: 'img/Rectangle 20.png',
    descripcion: 'Unas chicas caminan la ciudad'
  }
]

for(let i = 0;i<peliculas.length;i++){
  $('.contenedor').append(`
    <div class="pelicula">
      <img src="${peliculas[i].imagen}" >
      <h3>${peliculas[i].nombre}</h3>
      <p class='oculto'>${peliculas[i].descripcion}</p>
    </div>
  `)
}

const pelicula = $('.pelicula');

pelicula.click(
  function(){
    console.log($(this).children('p').html())
  }
)

equis.click(
  function(){
    $('.out').hide()
  }
)
