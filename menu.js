$(document).ready(function() {
    var contador = 1;

    $('.menu_bar').click(function(e) {
        e.preventDefault(); // Detiene el salto a la parte superior de la página

        if (contador === 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });
});