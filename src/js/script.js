
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

    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView:3.2,
      },
      
      600: {
        slidesPerView:2,
      },
      375: {
        slidesPerView:1.2,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 24, // スライド間の隙間を20ピクセルに設定
  });
});
  
  // #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
  
  // .headerクラスがついた要素の高さを取得
  let header = jQuery("header").innerHeight();
  //スクロールスピードを設定する
  let speed = 300;
  
  //押した要素のhref属性を取得する
  let id = jQuery(this).attr("href");
  
  //＃の値がidならばhtmlを設定　id属性ではなければidを設定する
  let target = jQuery("#" == id ? "html" : id);
  // トップからの距離からヘッダー分の高さを引く
  
  let position = jQuery(target).offset().top - header;
  
  // その分だけ移動すればヘッダーと被りません
  jQuery("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});


  // let js__fade = document.querySelector('.card__article');
  // console.log(js__fade)
  // gsap.to(js__fade, {
  //   opacity: 1, // 例えば opacity をアニメーションする例
  //   duration: 1, // アニメーションの時間
  //   scrollTrigger: {
  //     trigger: js__fade,
  //     start: 'center top', // 画面内に表示されたときにアニメーションをトリガーする位置
  //     markers: true // マーカーを表示するかどうか（デバッグ用）
  //   },
  // });
  
    jQuery('.js-fadeIn').on('inview', function(event, isInView) {
      if (isInView) {
        jQuery(this).addClass('is-inview');
      }
    });
  