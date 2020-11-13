$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

$('.donation-month-details').click(function () {
    $('#modal-container').removeAttr('class').addClass('one');
    $('body').addClass('modal-active');
})

$('#modal-container').click(function () {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});

$('#leftbarmenue').mouseover(function () {
    $(this).removeClass('shinking')
    $(this).addClass('expended')
});

$( "#leftbarmenue" ).mouseleave(function() {
    console.log('execute');
});