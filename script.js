const peliculas = new Map();

const boton = document.getElementById('boton');
boton.addEventListener('click', function() {
    let titulo = document.getElementById("titulo").value;
    let genero = document.getElementById("genero").value;
    let duracion = document.getElementById("duracion").value;
    let director = document.getElementById("director").value;
    let imagenURL=document.getElementById("imagenURL").value;


// const consultarBtn = document.getElementById('consultar');
// consultarBtn.addEventListener('click', function() {
//     const consulta = document.getElementById("consulta").value;
//     mostrarDetallesPelicula(consulta);
// });


    peliculas.set(titulo, { genero, duracion, director, imagenURL });
    mostrarPeliculas();

    document.getElementById("titulo").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("duracion").value = "";
    document.getElementById("director").value = "";
    document.getElementById("imagen").value;

});

function mostrarPeliculas() {
    const targetas = document.getElementById("targetas");
   /*  targetas.innerHTML = ''; */

    peliculas.forEach((pelicula, titulo) => {
        let div = document.createElement("div");
        div.classList.add("col");

        let card = document.createElement("div");
        card.classList.add("card");

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let cardTitle = document.createElement("h3");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = "Card title";

        let imagen = document.createElement("img"); // Agrega la etiqueta de imagen
        imagen.src = pelicula.imagenURL; // Establece la URL de la imagen
        card.appendChild(imagen); 

        let p1 = document.createElement("p");
        p1.classList.add("card-text", "aling", "text-lg-start");
        p1.innerHTML = "<h4 class='aling text-lg-start'>Titulo: " + titulo + "</h4>";

        let p2 = document.createElement("p");
        p2.classList.add("card-text", "aling", "text-lg-start");
        p2.innerHTML = "<h4 class='aling text-lg-start'>Genero: " + pelicula.genero + "</h4>";

        let p3 = document.createElement("p");
        p3.classList.add("card-text", "aling", "text-lg-start");
        p3.innerHTML = "<h4 class='aling text-lg-start'>Duracion: " + pelicula.duracion + "</h4>";

        let p4 = document.createElement("p");
        p4.classList.add("card-text", "aling", "text-lg-start");
        p4.innerHTML = "<h4 class='aling text-lg-start'>Director: " + pelicula.director + "</h4>";

        let eliminarBtn = document.createElement("button");
        eliminarBtn.classList.add("mt-auto", "btn", "btn-outline-dark");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.addEventListener('click', function() {
            peliculas.delete(titulo);
            mostrarPeliculas();
        });

        /* cardBody.appendChild(cardTitle) */;
        
        cardBody.appendChild(p1);
        cardBody.appendChild(p2);
        cardBody.appendChild(p3);
        cardBody.appendChild(p4);
        cardBody.appendChild(eliminarBtn);

        card.appendChild(cardBody);
        div.appendChild(card);

        targetas.appendChild(div);
    });
}

const consultarBtn = document.getElementById('consultar');
consultarBtn.addEventListener('click', function() {
    const consulta = document.getElementById("consulta").value;
    mostrarDetallesPelicula(consulta);
});

function mostrarDetallesPelicula(titulo) {
    const pelicula = peliculas.get(titulo);
    if (pelicula) {
        alert(`
            Título: ${titulo}
            Género: ${pelicula.genero}
            Duración: ${pelicula.duracion}
            Director: ${pelicula.director}
        `);
        
    } else {
        alert("La película no se encuentra en la lista.");
    }
}
