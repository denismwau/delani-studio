$(document).ready(function () {
    $('.desg p').hide();
    $('.desg').click(function () {
        $('.desg p').toggle();
        $('.desg img').toggle();
    });
    $('.devp p').hide();
    $('.devp').click(function () {
        $('.devp p').toggle();
        $('.devp img').toggle();
    });
    $('.prod p').hide();
    $('.prod').click(function () {
        $('.prod p').toggle();
        $('.prod img').toggle();
    });
});