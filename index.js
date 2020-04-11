$(function () {

    $("div#hamburger-content").click (function () {
        $("div#menu").addClass ('open')
    })

    $("div#close").click (function () {
        $("div#menu").removeClass ('open')
    })





    $("div#menu nav ul li").hover (function () {

        const index = $(this).index ()
        $("div.background-image:eq(" + index + ")").fadeIn (500);

    }, function () {

        const index = $(this).index ()
        $("div.background-image:eq(" + index + ")").fadeOut (500);

    })

})