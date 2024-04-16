const locations = [
  {
    id: 1,
    ubicacion: "Nuxco, México",
    distancia: "A 944 km de distancia",
    fecha: "16-21 de mar.",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-897853297907579574/original/7a5dadf5-3196-48d1-917f-e59b99ab5ef3.jpeg?im_w=720",
    img2: "https://a0.muscache.com/im/pictures/miso/Hosting-897853297907579574/original/7f6eb476-a771-4244-8456-373250d99550.jpeg?im_w=720",
    img3: "https://a0.muscache.com/im/pictures/miso/Hosting-897853297907579574/original/6727ce41-cd53-4f4e-b90b-1ae02092cf32.jpeg?im_w=720",
    img4: "https://a0.muscache.com/im/pictures/miso/Hosting-897853297907579574/original/984f6a2c-e469-4280-8e5f-cfd443461d34.jpeg?im_w=720",
    img5: "https://a0.muscache.com/im/pictures/miso/Hosting-897853297907579574/original/643cbfe7-de8e-4b76-9760-c86f869878c2.jpeg?im_w=720",
    precio: "$1,922 MXN noche",
    calificacion: 5.0,
    desc: "Nuxco, México, es un destino que te ofrece una combinación única de naturaleza, cultura y aventura. Ubicado a 944 km de distancia, este lugar te sorprenderá con su belleza natural y su rica historia. Disfruta de la tranquilidad de sus playas, explora sus paisajes impresionantes y sumérgete en la cultura local. Con una calificación de 5.0, este alojamiento te garantiza una experiencia inolvidable. ¡Ven y descubre todo lo que Nuxco tiene para ofrecerte!",
    dato1: {
      nombre: "Llegada autónoma",
      descripcion: "Realiza la llegada fácilmente con la cerradura con teclado."
    },
    dato2: {
      nombre: "Excelente ubicación",
      descripcion: "El 100% de los huéspedes recientes calificaron la ubicación con 5 estrellas."
    },
    dato3: {
      nombre: "Servicio excepcional",
      descripcion: "Los huéspedes elogian el servicio amable y atento del personal."
    },      
    huespedes: 6,
    habitaciones: 3,
    camas: 4,
    banos: 2,
    anfitrion: "Gabriela Martinez",
    experiencia: "Superanfitrión",
    tiempo : 11,
    evaluaciones: 221,    
    hostimg: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    filtro: "playa"
  },
  {
    id: 2,
    ubicacion: "Playa del Carmen",
    distancia: "A 1,265 km de distancia",
    fecha: "18-25 de abr.",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-868110223588598881/original/d8227740-133e-4af7-8e65-da6f47e1c129.jpeg?im_w=720",
    precio: "$2,500 MXN noche",
    calificacion: 4.7,
    desc: "Descripción del lugar en Playa del Carmen.",
    dato1: {
      nombre: "Llegada autónoma",
      descripcion: "Realiza la llegada fácilmente con la cerradura con teclado."
    },
    dato2: {
      nombre: "Excelente ubicación",
      descripcion: "El 100% de los huéspedes recientes calificaron la ubicación con 5 estrellas."
    },
    dato3: {
      nombre: "Servicio excepcional",
      descripcion: "Los huéspedes elogian el servicio amable y atento del personal."
    },
    huespedes: 4,
    habitaciones: 2,
    camas: 3,
    banos: 1,
    anfitrion: "Sofía López",
    experiencia: "Superanfitrión",
    tiempo : 8,
    evaluaciones: 321,
    hostimg: "https://media.istockphoto.com/id/1251073457/photo/happy-asian-young-woman-smiling-against-made-finger-thumbs-up-ok-gesture-on-blue-background.jpg?s=612x612&w=0&k=20&c=8TCpJv6hG4cetSASJd7huNY31EL8dctusd8jICLDWyw=",
    filtro: "playa"
  },
  {
    id: 3,
    ubicacion: "Tulum, México",
    distancia: "A 1,320 km de distancia",
    fecha: "22-27 de jun.",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-49629092/original/0cf0c4df-e86e-4416-a3a0-db78212536e6.jpeg?im_w=720",
    precio: "$1,800 MXN noche",
    calificacion: 4.8,
    desc: "Descripción del lugar en Tulum, México.",
    dato1: {
      nombre: "Llegada autónoma",
      descripcion: "Realiza la llegada fácilmente con la cerradura con teclado."
    },
    dato2: {
      nombre: "Excelente ubicación",
      descripcion: "El 100% de los huéspedes recientes calificaron la ubicación con 5 estrellas."
    },
    dato3: {
      nombre: "Servicio excepcional",
      descripcion: "Los huéspedes elogian el servicio amable y atento del personal."
    },
    huespedes: 2,
    habitaciones: 1,
    camas: 1,
    banos: 1,
    anfitrion: "Alejandro García",
    experiencia: "anfitrion",
    tiempo : 5,
    evaluaciones: 123,
    hostimg: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    filtro: "habitaciones"
  },
  {
    id: 4,
    ubicacion: "Cancún, México",
    distancia: "A 1,347 km de distancia",
    fecha: "10-15 de jul.",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-1004412924580383981/original/0a3171c4-c1b6-4d6e-82aa-47cad086f07f.jpeg?im_w=720",
    precio: "$2,300 MXN noche",
    calificacion: 4.5,
    desc: "Descripción del lugar en Cancún, México.",
    dato1: {
      nombre: "Llegada autónoma",
      descripcion: "Realiza la llegada fácilmente con la cerradura con teclado."
    },
    dato2: {
      nombre: "Excelente ubicación",
      descripcion: "El 100% de los huéspedes recientes calificaron la ubicación con 5 estrellas."
    },
    dato3: {
      nombre: "Servicio excepcional",
      descripcion: "Los huéspedes elogian el servicio amable y atento del personal."
    },
    huespedes: 5,
    habitaciones: 2,
    camas: 3,
    banos: 2,
    anfitrion: "Roberto González",
    experiencia: "Superanfitrión",
    tiempo : 7,
    evaluaciones: 234,
    hostimg: "https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg",
    filtro: "ranchos"
  },
  {
    id: 5,
    ubicacion: "Puerto Vallarta, México",
    distancia: "A 1,095 km de distancia",
    fecha: "20-25 de ago.",
    img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-731248729135571365/original/4fd15fe1-9f5a-46ef-9a23-3c3152c39c48.jpeg?im_w=720",
    precio: "$1,700 MXN noche",
    calificacion: 4.6,
    desc: "Descripción del lugar en Puerto Vallarta, México.",
    dato1: {
      nombre: "Llegada autónoma",
      descripcion: "Realiza la llegada fácilmente con la cerradura con teclado."
    },
    dato2: {
      nombre: "Excelente ubicación",
      descripcion: "El 100% de los huéspedes recientes calificaron la ubicación con 5 estrellas."
    },
    dato3: {
      nombre: "Servicio excepcional",
      descripcion: "Los huéspedes elogian el servicio amable y atento del personal."
    },
    huespedes: 3,
    habitaciones: 1,
    camas: 2,
    banos: 1,
    anfitrion: "María Fernández",
    experiencia: "Superanfitrión",
    tiempo : 6,
    evaluaciones: 345,
    hostimg: "https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg",
    filtro: "casa subterranea"

  },
  {
    id: 6,
    ubicacion: "Acapulco, México",
    distancia: "A 390 km de distancia",
    fecha: "12-17 de sep.",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-591517346425384308/original/74e31264-bd91-4111-bdf2-727352795095.jpeg?im_w=720",
    precio: "$1,500 MXN noche",
    calificacion: 4.3,
    desc: "¡Ven a disfrutar de las hermosas playas y la vida nocturna de Acapulco! Este alojamiento acogedor te espera para unas vacaciones inolvidables.",
    dato1: {
      nombre: "Llegada autónoma",
      descripcion: "Realiza la llegada fácilmente con la cerradura con teclado."
    },
    dato2: {
      nombre: "Excelente ubicación",
      descripcion: "El 100% de los huéspedes recientes calificaron la ubicación con 5 estrellas."
    },
    dato3: {
      nombre: "Servicio excepcional",
      descripcion: "Los huéspedes elogian el servicio amable y atento del personal."
    },
    huespedes: 4,
    habitaciones: 2,
    camas: 3,
    banos: 1,
    anfitrion: "Carlos Pérez",
    experiencia: "anfitrion",
    tiempo : 4,
    evaluaciones: 456,
    hostimg:"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    filtro: "habitaciones"  
  },
  {
    id: 7,
    ubicacion: "Los Cabos, México",
    distancia: "A 1,781 km de distancia",
    fecha: "8-13 de oct.",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-908858592487828989/original/b7ad77b1-1e22-48d7-9b83-fb726fe0ee03.png?im_w=720",
    precio: "$2,800 MXN noche",
    calificacion: 4.9,
    desc: "Descubre la belleza natural de Los Cabos mientras te hospedas en este increíble alojamiento. Disfruta de las vistas panorámicas y relájate en el lujo.",
    dato1: {
      nombre: "Llegada autónoma",
      descripcion: "Realiza la llegada fácilmente con la cerradura con teclado."
    },
    dato2: {
      nombre: "Excelente ubicación",
      descripcion: "El 100% de los huéspedes recientes calificaron la ubicación con 5 estrellas."
    },
    dato3: {
      nombre: "Servicio excepcional",
      descripcion: "Los huéspedes elogian el servicio amable y atento del personal."
    },
    huespedes: 8,
    habitaciones: 4,
    camas: 6,
    banos: 4,
    anfitrion: "Roberto Hernández",
    experiencia: "iniciando",
    tiempo : 2,
    evaluaciones: 567,
    hostimg:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    filtro: "frente a la playa"
  },
  {
    id: 8,
    ubicacion: "Mazatlán, México",
    distancia: "A 1,260 km de distancia",
    fecha: "14-19 de nov.",
    img: "https://a0.muscache.com/im/pictures/b6f7fbe1-464b-4c1c-9db6-10889f7df639.jpg?im_w=720",
    precio: "$1,600 MXN noche",
    calificacion: 4.4,
    desc: "Mazatlán te espera con su clima cálido y sus playas espectaculares. No te pierdas la oportunidad de hospedarte en este alojamiento cómodo y bien ubicado.",
    dato1: {
      nombre: "Llegada autónoma",
      descripcion: "Realiza la llegada fácilmente con la cerradura con teclado."
    },
    dato2: {
      nombre: "Excelente ubicación",
      descripcion: "El 100% de los huéspedes recientes calificaron la ubicación con 5 estrellas."
    },
    dato3: {
      nombre: "Servicio excepcional",
      descripcion: "Los huéspedes elogian el servicio amable y atento del personal."
    },
    huespedes: 5,
    habitaciones: 2,
    camas: 3,
    banos: 2,
    anfitrion: "María Rodríguez",
    experiencia: "Superanfitrión",
    tiempo : 3,
    evaluaciones: 678,
    hostimg:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    filtro: "habitaciones"
  },
  {
    id: 9,
    ubicacion: "Cozumel, México",
    distancia: "A 1,289 km de distancia",
    fecha: "5-10 de dic.",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-52629371/original/4570869a-7532-4a43-ac59-a39f4f324fd8.jpeg?im_w=720",
    precio: "$2,100 MXN noche",
    calificacion: 4.7,
    desc: "Descubre la isla paradisíaca de Cozumel desde la comodidad de este alojamiento bien equipado. Disfruta de la tranquilidad y las actividades acuáticas.",
    dato1: {
      nombre: "Llegada autónoma",
      descripcion: "Realiza la llegada fácilmente con la cerradura con teclado."
    },
    dato2: {
      nombre: "Excelente ubicación",
      descripcion: "El 100% de los huéspedes recientes calificaron la ubicación con 5 estrellas."
    },
    dato3: {
      nombre: "Servicio excepcional",
      descripcion: "Los huéspedes elogian el servicio amable y atento del personal."
    },
    huespedes: 3,
    habitaciones: 1,
    camas: 2,
    banos: 1,
    anfitrion: "Carlos García",
    experiencia: "Superanfitrión",
    tiempo : 9,
    evaluaciones: 789,
    hostimg:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    filtro: "camping"
  },
  {
    id: 10,
    ubicacion: "Puerto Escondido, México",
    distancia: "A 791 km de distancia",
    fecha: "21-26 de ene.",
    img: "https://a0.muscache.com/im/pictures/bde4925b-eec7-42a6-bfad-e5025c6e594d.jpg?im_w=720",
    precio: "$1,400 MXN noche",
    calificacion: 4.2,
    desc: "Ven a disfrutar de las playas impresionantes de Puerto Escondido y hospédate en este alojamiento acogedor. Perfecto para unas vacaciones relajantes junto al mar.",
    dato1: {
      nombre: "Llegada autónoma",
      descripcion: "Realiza la llegada fácilmente con la cerradura con teclado."
    },
    dato2: {
      nombre: "Excelente ubicación",
      descripcion: "El 100% de los huéspedes recientes calificaron la ubicación con 5 estrellas."
    },
    dato3: {
      nombre: "Servicio excepcional",
      descripcion: "Los huéspedes elogian el servicio amable y atento del personal."
    },
    huespedes: 3,
    habitaciones: 1,
    camas: 2,
    banos: 1,
    anfitrion: "Carlos Sánchez",
    experiencia: "anfitrion",
    tiempo : 10,
    evaluaciones: 890,
    hostimg:"https://photo-cdn2.icons8.com/jlMWP0ww289yUPUet6BneIhb0FpBlion9RTTy0AcbXw/rs:fit:193:290/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMzA5L2U1Mjcx/NjU5LTM1NmMtNGRh/Yi1hODQzLWVkMWRm/M2EyNjcwMS5qcGc.jpg",
    filtro: "tropical"
  }
  
];
  const sectionCenter = document.querySelector(".section-center");
  const elements = document.querySelector('location-item');
  const header = document.querySelector('header');
  const btn = document.querySelector('.button-17');
  const filters = document.querySelectorAll('.nav__selection-item');

  window.addEventListener("DOMContentLoaded", function () {
    diplayLocationsItems(locations);
  });

  function diplayLocationsItems(menuItems) {
    let displayLocs = menuItems.map(function (item) {
      return `
        <a href="#" onclick="handleItemClick(${item.id})" class="location-item">
          <img src="${item.img}" alt="location item" class="photo" />
          <div class="item-info">
            <h4 class="ubicacion">${item.ubicacion}<span class="number">☆${item.calificacion}</span></h4>
            <h5 class="distancia">${item.distancia}</h5>
            <h5 class="fecha">${item.fecha}</h5>
            <h4 class="precio">${item.precio}</h4>
          </div>
        </a>`;
    });
    displayLocs = displayLocs.join("");
    sectionCenter.innerHTML = displayLocs;
  }
const searchInput = document.querySelector("[data-search]");

        searchInput.addEventListener("input", e => {
            const value = e.target.value.toLowerCase();
            const filteredLocations = locations.filter(location => {
                return location.ubicacion.toLowerCase().includes(value);
            });
            diplayLocationsItems(filteredLocations);
        });

function handleItemClick(itemId) {
    const item = locations.find(loc => loc.id === itemId);
    const itemDataEncoded = encodeURIComponent(JSON.stringify(item));
    window.location.href = `/views/details.html#${itemDataEncoded}`;
}

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

btn.addEventListener('click', function () {

});


filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('active'));
    filter.classList.add('active');
  });
});


// filterElements.forEach(filter => {
//   filter.addEventListener('click', () => {
//     filterElements.forEach(f => f.classList.remove('activo'));
//     filter.classList.add('activo');
    
//     const selectedFilter = filter.getAttribute('data-filter');
//     const filteredLocations = locations.filter(location => {
//       return location.filtro === selectedFilter;
//     });
    
//     diplayLocationsItems(filteredLocations);
//   });
// });







// const title = document.querySelector('title');
// const optionsbtn = document.querySelector('options');
// const search = document.querySelector('srchbar');
// const tl = document.querySelector('title');

// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
  
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }



// // let title = document.addEventListener('click',function(){

// // })