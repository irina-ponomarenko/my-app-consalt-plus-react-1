$(document).ready(function(){
    $('.next').click(function(){
        var next = $('ul.pagination-list').find('li.active').removeClass('active').next();
        next.index() < 0 &&(next = $("ul.pagination-list li:first"));
        next.addClass('active');
        return false;
    });
    $('.prev').click(function(){
        var prev = $('ul.pagination-list').find('li.active').removeClass('active').prev();
        prev.index() < 0 &&(prev = $("ul.pagination-list li:last"));
        prev.addClass('active');
        return false;
    });
});


