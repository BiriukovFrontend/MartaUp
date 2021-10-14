$(function () {
    $('.header-slider').slick({
        arrows: false,
        vertical: true,
        dots: true,
        dotsClass: "header-dots",
        mobileFirst: true,
        swipeToSlide: true,
        verticalSwiping: true,
        touchMove:true,
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
    let linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
        V = 0.5 // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
    for (let i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
            e.preventDefault(); //отменяем стандартное поведение
            let w = window.pageYOffset, // производим прокрутка прокрутка
                hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
                start = null;
            requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
            function step(time) {
                if (start === null) start = time;
                let progress = time - start,
                    r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                window.scrollTo(0, r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash // URL с хэшем
                }
            }
        }, false);
    }
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