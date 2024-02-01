$(document).ready(function(){
/* Abre el menu en movil */
let openSideBar = $('#openSideBar');
    
openSideBar.on('click', function(e){
e.preventDefault();
$('#sidebar-books').addClass('open');
});


 /* Cierra el menu en movil */
 let closeExperiencias = $('#closeSideBar');
    
 closeExperiencias.on('click', function(e){
 e.preventDefault();
 $('#sidebar-books').removeClass('open');

 });


 // Cerrar Modales de Boostrap
 $('.modal').on('hide.bs.modal', function() {
    var memory = $(this).html();
    $(this).html(memory);
});

//codigo para owl carousel de noticias y eventos completo
$('.owlEvents').owlCarousel({
    autoplay: false,
    autoplayhoverpause:true,
    autoplaytimeout:100,
    loop:true, 
    margin:20,
    nav:true,
    navText: ["<div class='flecha'><img src='assets/iconos/flecha-izquierda-azul.svg'></div>","<div class='flecha'><img src='assets/iconos/flecha-derecha-azul.svg'></div>"],
    dots:true,
    responsive:{
        0:{
            items:1,
           /*  stagePadding:50 */
        },
        768:{
            items:2,
            stagePadding:0
        },
        992:{
            items:3
        }
    }
});

/* Detectar el ancho de las imagenes thumb para el carrusel y poner el mismo valor en height */
function calcularAltura() {
    var thumb_width_actual = $('.bookItem-image').width();
    // Actualizar la altura con el valor actual
    $('.bookItem-image').css({
        height: thumb_width_actual
    });

}

// Ejecuta la función inicialmente
calcularAltura();
setInterval(calcularAltura, 100);




});