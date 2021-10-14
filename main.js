$(function () {
    $('.header-wrapper').slick({
        arrows: false,
        vertical: true,
        dots: true,
        dotsClass: "header-dots",
   touchMove:true,

        verticalSwiping: true,

    });
    $('.nav__btn').on('click', function () {
        $('.nav__btn-responsive').addClass('active');
    
    });
    $('.close-btn').on('click', function () {
        $('.nav__btn-responsive').removeClass('active');
    
    });
    $('.header__nav-link').on('click', function () {
        $('.nav__btn-responsive').removeClass('active');
    
      });
      
      
});


jQuery(document).ready(function() {
  
    var btn = $('#button-top');
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
  
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
  
  });

$(document).ready(function(){
    $(".header__nav-link a").click(function (event) {
//отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
//забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
//анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});