$(function () {
    $('.request-toggle').click(function () {
        $(this).next('.request-form-items').slideToggle();

        $(this).next();
        return false;
    });
});
