$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 20) {
        $("#thegridman").removeClass('hidden');

        $(".row").addClass("animated");
        $(".row").addClass("fadeInUp");
        $(".row").addClass("slower");
    }
});
