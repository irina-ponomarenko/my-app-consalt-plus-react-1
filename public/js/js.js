$(document).ready(function () {
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 83) {
            $('.nav-header').addClass('fixed');
        } else {
            $('.nav-header').removeClass('fixed');
        }
    });
});
$(document).ready(function () {
    $(".nav-blog-page li").click(function () {
        $('.nav-blog-page ul li').removeClass('active_border');
        $(this).addClass('active_border');
        return false;
    });
});
$(document).ready(function () {
    $('.share-card').click(function () {
        $('.social-block').toggle(500)
    });
});

$(document).ready(function() {
    $('.border-green').hover(function () {
                $(".card-img-top-1").fadeIn(1000);
                return false;
            },
            function() {
                $(".card-img-top-1").fadeOut(800);
                return false;
            });
});
$(document).ready(function () {
    $('.border-orange').hover(function () {
            $(".card-img-top-2").fadeIn(1000);
            return false;
        },
        function() {
            $(".card-img-top-2").fadeOut(800);
            return false;
        });
});




