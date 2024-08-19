$(document).ready(function() {

});

$(document).on('click', '.js-menu-opener', function () {
  $('body').addClass('is-overflow');
  $('.main-menu').fadeIn(300);

  return false;
});

$(document).on('click', '.js-menu-closer', function () {
  $('.main-menu').fadeOut(300, function() {
    $('body').removeClass('is-overflow');
  });

  return false;
});

$(document).on('click', '.js-submenu-toggler', function () {
  let _this = $(this);
  if($('body').width() < 1024) {
    if(!_this.hasClass('is-active')) {
      $(_this).closest('.main-menu__item').find('.submenu').slideDown();
      $(_this).addClass('is-active');
    } else {
      $(_this).closest('.main-menu__item').find('.submenu').slideUp();
      $(_this).removeClass('is-active');
    }

    return false;
  }
});
