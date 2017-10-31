$(function () {

  $('.location__tabs-button').click( function () {
    if (!$(this).hasClass('active')) {
      var datalocationtabs = $(this).attr('data-location-tabs');
      $('.location__tabs-button').removeClass('active');
      $(this).addClass('active');
      $('.location__tabs-text-item.active').removeClass('in');
      setTimeout( function () {
        $('.location__tabs-text-item.active').removeClass('active');
        $('[data-location-text="'+datalocationtabs+'"]').addClass('active');
      }, 150);
      setTimeout( function () {
       $('[data-location-text="'+datalocationtabs+'"]').addClass('in');
     }, 300);
    }
  });

  $('.traning-tabs__button').click( function () {
    if (!$(this).hasClass('active')) {
      var datalocationtabs = $(this).attr('data-traning-tabs');
      $('.traning-tabs__button').removeClass('active');
      $(this).addClass('active');
      $('.traning-tabs__text-item.active').removeClass('in');
      setTimeout( function () {
        $('.traning-tabs__text-item.active').removeClass('active');
        $('[data-traning-item="'+datalocationtabs+'"]').addClass('active');
      }, 150);
      setTimeout( function () {
       $('[data-traning-item="'+datalocationtabs+'"]').addClass('in');
     }, 300);
    }
  });

  $('.button__form').click(function () {
    $('html,body').animate({scrollTop:$('#submit__application').offset().top+"px"},{duration:1E3});
  });

  $('.header__menu-link').click(function () {
    var scrollToElement = $(this).attr('href');
    $('html,body').animate({scrollTop:$(scrollToElement).offset().top+"px"},{duration:1E3});
  });

  $('.form-item__input').click( function() {
    $(this).addClass('active');
  });

  $('.form-item__input').focusout(function() {
    var label = $(this).attr('placeholder');
    var field = $(this).val();
    var fieldtrim = $.trim(field);
    if (fieldtrim == '') {
      $(this).attr('placeholder', label);
      $(this).removeClass('active');
      $(this).val("");
    }
  });

  $('.form-item__submit').click(function(e) {
    e.preventDefault();
    $('.modal').addClass('active');
    setTimeout(function () {
      $('.modal').addClass('in');
    }, 100)
  });

  $('.modal-close').click(function() {
    $('.modal').removeClass('in');
    setTimeout(function () {
      $('.modal').removeClass('active');
    }, 250)
  });

  $('.header__menu-button').click(function() {
    $('.header__row-top').toggleClass('active-header');
    $('body').toggleClass('overflow-body')
  });
$('.header__menu-link').click(function() {
    $('.header__row-top').removeClass('active-header');
    $('body').removeClass('overflow-body')
  });

});




$(window).on('load resize', function() { 
  if (innerWidth > 699) {
    if ($(".header__about-row").hasClass('slick-slider')) {
      $(".header__about-row").slick('unslick');
    }
    if ($(".advantages__row").hasClass('slick-slider')) {
      $(".advantages__row").slick('unslick');
    }
    if ($(".stage__row").hasClass('slick-slider')) {
      $(".stage__row").slick('unslick');
    }
    if ($(".training__row").hasClass('slick-slider')) {
      $(".training__row").slick('unslick');
    }
    if ($(".reviews__logo-row").hasClass('slick-slider')) {
      $(".reviews__logo-row").slick('unslick');
    }
  } else {
    $(".header__about-row").not('.slick-initialized').slick({
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      centerMode: true,
    });
    $(".advantages__row").not('.slick-initialized').slick({
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      centerMode: true,
    });
    $(".stage__row").not('.slick-initialized').slick({
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      centerMode: true,
    });
    $(".training__row").not('.slick-initialized').slick({
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      centerMode: true,
    });
    $(".reviews__logo-row").not('.slick-initialized').slick({
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      centerMode: true,
    });
  }
});