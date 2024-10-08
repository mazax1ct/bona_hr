$(document).ready(function() {
  $('.js-select').each(function() {
    var $p = $(this).closest('.select-wrapper');
    $(this).select2({
      minimumResultsForSearch: Infinity,
      dropdownPosition: 'below',
      dropdownParent: $p
    });
	}).on("select2:open", function (e) {
    var $p = $(this).closest('.select-wrapper');
    $p.addClass('open');
	}).on("select2:close", function (e) {
    var $p = $(this).closest('.select-wrapper');
    $p.removeClass('open');
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

  $(document).on('click', '.js-accordion-toggler', function () {
    let _this = $(this);
    if(!_this.hasClass('is-active')) {
      $(_this).closest('.accordion').find('.accordion__body').slideDown();
      $(_this).addClass('is-active');
    } else {
      $(_this).closest('.accordion').find('.accordion__body').slideUp();
      $(_this).removeClass('is-active');
    }

    return false;
  });

  $('.file-input input[type=file]').on('change', function(){
  	let file = this.files[0];
  	$(this).closest('.file-input').find('span').html(file.name);
  });

  $(".js-date-mask").each(function(index, element) {
    var parent = element.closest('.calendar');

    let dp = new AirDatepicker(element, {
      prevHtml: '<svg title="Назад"><use xlink:href="images/sprite.svg#slider_left" /></svg>',
      nextHtml: '<svg title="Вперёд"><use xlink:href="images/sprite.svg#slider_right" /></svg>',
      container: parent,
      //inline: true,
      //visible: true,
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  let sliders = document.querySelectorAll('.js-cards-slider');

  sliders.forEach((slider) => {
    new Swiper(slider, {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next[data-arrows="'+slider.dataset.arrows+'"]',
        prevEl: '.swiper-button-prev[data-arrows="'+slider.dataset.arrows+'"]',
      }
    });
  });
});
