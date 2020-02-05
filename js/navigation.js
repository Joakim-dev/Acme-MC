$(document).ready(ready => {
    $('.menu-toggle').click(click => {
        $('.menu-toggle').toggleClass('active');
        $('nav').toggleClass('active');
    })
});