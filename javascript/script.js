let search = document.querySelector('.search-box');



document.querySelector('#menuIcon', '#contenedor').onclick = () => {

    menu.classList.remove('active')
    input.focus();
    input.value = "";



    listprod.style.display = "none";
    if (input.value === "") {

        listprod.style.display = "none";
    }


};

const ventanaCarrito = document.querySelector('.ventanaGlobalCarrito');

let menu = document.querySelector('.navar');

document.querySelector('#menuIcon').onclick = () => {
    menu.classList.toggle('active')

};




window.onscroll = () => {
    menu.classList.remove('active')
    listprod.style.display = "none";


}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('Shadow', window.scrollY > 0);
});





let listprod = document.getElementById("listprod");
let input = document.getElementById('buscar');


document.getElementById("input", addEventListener("keyup", buscadorInterno));


function buscadorInterno() {
    let filter = input.value.toUpperCase();
    let li = listprod.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName("a")[0];

        let textvalue = a.textContent || a.innerText;

        if (textvalue.toUpperCase().indexOf(filter) > -1) {

            li[i].style.display = "";
            listprod.style.display = "block";

            if (input.value === "") {

                listprod.style.display = "none";
            }

        } else {
            li[i].style.display = "none";
        }



    }
}


function mostrar() {
    document.getElementById('videoEmbalado').style.display = "block"

}

function ocultar() {
    document.getElementById('videoEmbalado').style.display = "none"


}


function mostrarb() {
    document.getElementById('terminosCondiciones').style.display = "block"

}

function ocultarb() {
    document.getElementById('terminosCondiciones').style.display = "none"


}