
//SLIDERS (HOMEPAGE)

$('#glider1').slick({
infinite: true,
slidesToShow: 3,
slidesToScroll: 2,
prevArrow: '#glider1-prev',
nextArrow: '#glider1-next',
});


$('#glider2').slick({
infinite: true,
slidesToShow: 3,
slidesToScroll: 3,
prevArrow: '#glider2-prev',
nextArrow: '#glider2-next',
centerMode: true,
focusOnSelect: true
});

$('#glider3').slick({
slidesToShow: 3,
slidesToScroll: 1,
prevArrow: '#glider3-prev',
nextArrow: '#glider3-next',
});


$('#glider4').slick({
slidesToShow: 3,
slidesToScroll: 1,
prevArrow: '#glider4-prev',
nextArrow: '#glider4-next',
});

$('#glider5').slick({
slidesToShow: 3,
slidesToScroll: 1,
prevArrow: '#glider5-prev',
nextArrow: '#glider5-next',
});


//TOGGLE SCHEDULE TOP (HOMEPAGE)
$(function () {
    $('.line-services-form-wrapper > .toggle > button').click(function () {
        $(this).next('.item-form').slideToggle();
        $(this).next();
        return false;
    });
});



//SIDEBAR DESKTOP (CTA)
$(function () {
  $('#close').click(function () {
      $('body > header > div.book-now > div > div.book-now-slideout').hide();
      $('#open-block').show();
      document.getElementById("book-wrapper").style.width = "0px";
  });

  $('#open-block').click(function () {
      $('#open-block').hide();
      $('#slideout').show();
      document.getElementById("book-wrapper").style.width = "100%";
  });
});


//FORM FUNCTION (HOMEPAGE)
$(function () {
  $('#repair').click(function () {
      $('#form-sales').hide();
      $('#form-repair').show();
      document.getElementById("form-repair").style.display = "flex";
      $('#emer-repair').show();
  });

  $('#sales').click(function () {
      $('#form-repair').hide();
      $('#form-sales').show();
      $('#emer-repair').hide();
  });
});

//COUNTIES & CITIES



//CHANGE IMAGE responsive
$(window).resize(function() {
  if ($(window).width() > 960) {

  }
 else {

 }
});
