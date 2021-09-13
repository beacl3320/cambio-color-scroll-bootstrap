$(window).scroll(function() {
    if($("#menu").offset().top > 56) {
        $("#menu").addClass("bg-dark");
    } else {
        $("3menu").removeClass("bg-dark");
    }
});