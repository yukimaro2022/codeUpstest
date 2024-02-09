// ------------ドロワー --------------


jQuery('.drawer__btns').on('click',function(){
  // jQuery('.drawer__btns').toggleClass('is-active');
      jQuery('.drawer__btns span').toggleClass('is-active');
      jQuery('.header-nav').toggleClass('is-active');
      jQuery('.header__drawer-background').toggleClass('is-active');
      jQuery('.header__inner').toggleClass('is-active');

      jQuery('body').toggleClass('scroll-lock');
});
    
    jQuery('.drawer__item a').on('click',function(){
      
    // jQuery('.drawer__btns , .drawer__btns span').removeClass('is-active');
    jQuery('.header-nav').removeClass('is-active');
    jQuery('.header__drawer-background').removeClass('is-active');
    jQuery('.header__inner').removeClass('is-active');
    jQuery('body').removeClass('scroll-lock');
    });
  // });

  jQuery(function(){
    const swiper__top= new Swiper('.js-top-swiper', {
      effect: 'fade',
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 3000, // ミリ秒単位で自動再生の間隔を指定
      },
    });
  });


  jQuery(function(){
    
    const swiper__campaign= new Swiper('.js-campaign-swiper', {
      // direction: 'horizontal',
      spaceBetween: 40,
      loop: true,
      loopAdditionalSlides: 1,
      loopedSlides: 2,
      
  initialSlide: 0, // 最初に表示されるスライドのインデックス

      breakpoints: {
        768: {
          slidesPerView: 3.48,
        },
        580: {
          slidesPerView: 1.8,
        },
        375: {
          slidesPerView: 1.25,
          spaceBetween: 24,
        }
      },
      navigation: {
        nextEl: ".swiper-button__next",
        prevEl: ".swiper-button__prev",
      },
      
    });
    
  });

  jQuery(function(){
    
    const swiper__campaign = new Swiper('.js-campaignPage', {
      // direction: 'horizontal',
      spaceBetween: 40, // 768px以上の場合のspaceBetweenのデフォルト値
      loop: true,
      loopAdditionalSlides: 1,
      loopedSlides: 2,
      initialSlide: 0, // 最初に表示されるスライドのインデックス
      breakpoints: {
        // 768px以上では2列表示
        768: {
          slidesPerView: 2,
        },
        // 768px以下では1列表示、spaceBetweenも調整可能
        0: {
          slidesPerView: 1,
          spaceBetween: 24, // 768px以下の場合のspaceBetween
        }
      },
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

  //要素の取得とスピードの設定
  var box = $('.slide-animation'),
  speed = 700;  
  
  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
      
        if(counter == 0){
　　　　　$(this).delay(100).animate({'width':'0%'},speed,function(){
        $(this).css({'left':'auto' , 'right':'0'});
        $(this).animate({'width':'100%'},speed);
        $(this).addClass('is-active');
        image.css('opacity','1').addClass('is-active');
      })
      counter = 1;
    }
    
    
  });
});

// ページトップボタン
$(function () {
  const pageTop = $("#page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
  // フッター手前でストップ
  $("#page-top").hide();
  $(window).on("scroll", function () {
    let scrollHeight = $(document).height();
    let scrollPosition = $(window).height() + $(window).scrollTop();
    let footerHeight = $(".footer").innerHeight();
    console.log(footerHeight);
    if (scrollHeight - scrollPosition <= footerHeight) {
 　　　// ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
      $("#page-top").css({
        position: "absolute",
        bottom: footerHeight,
      });
    } else {
      $("#page-top").css({
        position: "fixed",
        bottom: "0",
      });
    }
  });
});