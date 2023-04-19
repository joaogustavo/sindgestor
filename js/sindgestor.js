$(function() {
//ocultar btn subir
	$('.subir').fadeOut();
//inicio funcao scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
//navegacao principal transicoes
        if (scroll >= 200) {
            $(".navegacao").addClass('navegacao-fixa');
        } else {
            $(".navegacao").removeClass("navegacao-fixa");
        }
//btn subir transicoes
        if ($(this).scrollTop() > 220) {
            $('.subir').fadeIn();
        } else {
            $('.subir').fadeOut();
        }
    });
//btn subir acao subir
    $('.subir').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});