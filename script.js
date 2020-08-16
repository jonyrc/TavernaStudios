var $doc = $('html, body');

$('.scrollSuave').click(function() { //configurando rolagem suave ao clicar no menu
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$(window).scroll(function() { //Configurando efeito fade no navbar
    if (screen.width < 768){
        if($(this).scrollTop() < 50) {
            $('.fixed-top').removeClass('opaque');
        } else {
            $('.fixed-top').addClass('opaque');
        }
    }else{
        if($(this).scrollTop() < 450) {
            $('.fixed-top').removeClass('opaque');
        } else {
            $('.fixed-top').addClass('opaque');
        }
    }
});

$('.navbar-toggler').click(function(){ //Fazendo menu mobile ficar opaco quando clicado
    $('.fixed-top').addClass('opaque');
});
