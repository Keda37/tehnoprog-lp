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
});