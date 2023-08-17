
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    // ------------ドロワー --------------

jQuery('.drawer__btns').on('click',function(){
    jQuery('.drawer__btns').toggleClass('is-active');
    jQuery('.drawer__btns span').toggleClass('is-active');
    jQuery('.drawer__content').toggleClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');
    jQuery('.header__inner').toggleClass('is-active');

    jQuery('body').toggleClass('scroll-lock');
  });
  
  jQuery('.drawer-item a').on('click',function(){
    
  jQuery('.drawer-btns , .drawer-btns span').removeClass('is-active');
  jQuery('.drawer__content').removeClass('is-active');
  jQuery('.drawer-background').removeClass('is-active');
  jQuery('.header__inner').removeClass('is-active');
  jQuery('body').removeClass('scroll-lock');
  });
});

jQuery(function(){
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000, // ミリ秒単位で自動再生の間隔を指定
    },
  });
});

jQuery(function(){
  const swiper = new Swiper('.swiper__campaign', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 24,
    slidesPerView: 1.2, 
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView:3.6,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 24, // スライド間の隙間を20ピクセルに設定
  });
});
