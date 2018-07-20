$(function () {
    $('#section3').parallax({ imageSrc: './assets/img/pattern.png' });

    $("#myNavbar a").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function () {
            window.location.hash = hash;
        });
    });

    // init controller
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
       triggerElement: '#manuel',
       duration: 600,
    //    triggerHook: 0.9
   })
   .setClassToggle('#manuel', "fade-in")
   .addTo(controller);
});
