let ciudadActual = "";

function mostrarPantalla(idPantalla) {

    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(function(pantalla) {
        pantalla.classList.remove("activa");
    });

    const pantallaSeleccionada = document.getElementById(idPantalla);

    pantallaSeleccionada.classList.add("activa");

    if (idPantalla === "favoritos") {
        actualizarFavoritos();
    }
}


const botonComenzar = document.getElementById("botonComenzar");

botonComenzar.addEventListener("click", function() {
    document.getElementById("inicio").classList.remove("activa");
    document.getElementById("ciudades").classList.add("activa");
});
function mostrarDestinos(ciudad) {

ciudadActual = ciudad;

    mostrarPantalla("destinos");

    const titulo = document.getElementById("tituloCiudad");
    const lista = document.getElementById("listaDestinos");

    lista.innerHTML = "";

    if (ciudad === "seul") {

        titulo.textContent = "Destinos en Seúl";

        lista.innerHTML = `
   <div class="destino" data-categoria="Historia Cultura">

        <img
            class="imagen-destino"
            src= "https://live.staticflickr.com/65535/54132676085_9d9a73c436_b.jpg"
            alt="Palacio histórico en Seúl"
        >

        <div>
            <h3>Palacio Gyeongbokgung</h3>
            <p>Lugar histórico y cultural de Seúl.</p>

            <button onclick="mostrarDetalle('gyeongbokgung')">
    Ver más
</button>
        </div>

    </div>

    <div class="destino" data-categoria="Entretenimiento">

        <img
            class="imagen-destino"
            src="https://res.klook.com/image/upload/w_500,h_313,c_fill,q_85/activities/nfkfi8khf7fdnthhqd2a.jpg"
            alt="Parque de diversiones"
        >

        <div>
            <h3>Lotte World</h3>
            <p>Parque de diversiones ubicado en Seúl.</p>

            <button onclick="mostrarDetalle('lotte')">
    Ver más
</button>
        </div>

    </div>
`;

    }

    else if (ciudad === "busan") {

        titulo.textContent = "Destinos en Busan";

       lista.innerHTML = `
    <div class="destino" data-categoria="Naturaleza">

        <img
            class="imagen-destino"
            src="https://www.busan.go.kr/comm/getFile?srvcId=BBSTY3&upperNo=1325815&fileTy=ATTACH&fileNo=26"
            alt="Playa Haeundae en Busan"
        >

        <div>
            <h3>Haeundae Beach</h3>
            <p>Una de las playas más conocidas de Busan.</p>

            <button onclick="mostrarDetalle('haeundae')">
    Ver más
</button>
        </div>

    </div>

    <div class="destino" data-categoria="Cultura">

        <img
            class="imagen-destino"
            src="https://www.chijako.com/wp-content/uploads/2026/03/Haedong-Yonggungsa-Busan-Corea-Banner.jpg"
            alt="Templo Haedong Yonggungsa en Busan"
        >

        <div>
            <h3>Haedong Yonggungsa</h3>
            <p>Templo ubicado junto al mar en Busan.</p>

            <button onclick="mostrarDetalle('yonggungsa')">
    Ver más
</button>
        </div>

    </div>
`;

    }

    else if (ciudad === "jeju") {

        titulo.textContent = "Destinos en Jeju";

        lista.innerHTML = `
    <div class="destino" data-categoria="Naturaleza">

        <img
            class="imagen-destino"
            src="https://api.cdn.visitjeju.net/photomng/imgpath/202409/20/b2087c57-7cb6-420d-a840-c6e7e581072e.webp"
            alt="Seongsan Ilchulbong en Jeju"
        >

        <div>
            <h3>Seongsan Ilchulbong</h3>
            <p>Atractivo natural muy conocido de Jeju.</p>

           <button onclick="mostrarDetalle('seongsan')">
    Ver más
</button>
        </div>

    </div>

    <div class="destino" data-categoria="Naturaleza">

        <img
            class="imagen-destino"
            src="https://explorestronger.co.uk/wp-content/uploads/2023/04/Jeju-1-05-scaled.jpg"
            alt="Cascada Cheonjiyeon en Jeju"
        >

        <div>
            <h3>Cheonjiyeon Waterfall</h3>
            <p>Una cascada y atractivo natural de la isla de Jeju.</p>

           <button onclick="mostrarDetalle('cheonjiyeon')">
    Ver más
</button>

        </div>

    </div>
`;
    }
}

function mostrarDetalle(lugar) {

    const nombre = document.getElementById("nombreDetalle");
    const descripcion = document.getElementById("descripcionDetalle");
    const categoria = document.getElementById("categoriaDetalle");
    const ubicacion = document.getElementById("ubicacionDetalle");
    const icono = document.getElementById("iconoDetalle");

    if (lugar === "gyeongbokgung") {

        nombre.textContent = "Palacio Gyeongbokgung";
        descripcion.textContent = "Palacio histórico de Seúl, conocido por su importancia cultural y arquitectónica.";
        categoria.textContent = "Historia y cultura";
        ubicacion.textContent = "Seúl, Corea del Sur";
        icono.textContent = "account_balance";

    } else if (lugar === "lotte") {

        nombre.textContent = "Lotte World";
        descripcion.textContent = "Complejo de entretenimiento que cuenta con atracciones y actividades para visitantes.";
        categoria.textContent = "Entretenimiento";
        ubicacion.textContent = "Seúl, Corea del Sur";
        icono.textContent = "attractions";

    } else if (lugar === "haeundae") {

        nombre.textContent = "Haeundae Beach";
        descripcion.textContent = "Una de las playas más conocidas de Busan y un lugar turístico muy visitado.";
        categoria.textContent = "Naturaleza";
        ubicacion.textContent = "Busan, Corea del Sur";
        icono.textContent = "beach_access";

    } else if (lugar === "yonggungsa") {

        nombre.textContent = "Haedong Yonggungsa";
        descripcion.textContent = "Templo budista ubicado junto al mar y uno de los lugares culturales de Busan.";
        categoria.textContent = "Cultura";
        ubicacion.textContent = "Busan, Corea del Sur";
        icono.textContent = "temple_buddhist";

    } else if (lugar === "seongsan") {

        nombre.textContent = "Seongsan Ilchulbong";
        descripcion.textContent = "Formación volcánica y atractivo natural reconocido de la isla de Jeju.";
        categoria.textContent = "Naturaleza";
        ubicacion.textContent = "Jeju, Corea del Sur";
        icono.textContent = "landscape";

    } else if (lugar === "cheonjiyeon") {

        nombre.textContent = "Cheonjiyeon Waterfall";
        descripcion.textContent = "Cascada rodeada de naturaleza y uno de los atractivos turísticos de Jeju.";
        categoria.textContent = "Naturaleza";
        ubicacion.textContent = "Jeju, Corea del Sur";
        icono.textContent = "water";
    }

    mostrarPantalla("detalle");
}

let favoritos = [];

function agregarFavorito() {

    const nombre = document.getElementById("nombreDetalle").textContent;

    if (!favoritos.includes(nombre)) {

        favoritos.push(nombre);

        alert("El lugar fue agregado a favoritos.");

    } else {

        alert("Este lugar ya está en favoritos.");

    }

    mostrarPantalla("favoritos");
}

function actualizarFavoritos() {

    const lista = document.getElementById("listaFavoritos");
    const mensaje = document.getElementById("mensajeFavoritos");

    lista.innerHTML = "";

    if (favoritos.length === 0) {
        mensaje.textContent = "Todavía no tienes lugares favoritos.";
        return;
    }

    mensaje.textContent = "Estos son tus lugares favoritos:";

    favoritos.forEach(function(lugar) {

        const elemento = document.createElement("p");

        elemento.textContent = "❤️ " + lugar;

        lista.appendChild(elemento);
    });
}

function filtrarDestinos(categoria) {

    const destinos = document.querySelectorAll(".destino");

    destinos.forEach(function(destino) {

        const categorias = destino.getAttribute("data-categoria");

        if (categorias.includes(categoria)) {
            destino.style.display = "flex";
        } else {
            destino.style.display = "none";
        }

    });
}