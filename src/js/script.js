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
    const swiper__top= new Swiper('.js-voice-swiper', {
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

  // FAQ
  $('.faq-section__container').click(function() {
    // .faq-section__priceTitleにis-activeクラスの追加/削除
    $(this).find('.faq-section__priceTitle').toggleClass('is-active');
    
    // .faq-section_answerにis-activeクラスの追加/削除
    $(this).find('.faq-section_answer').slideToggle().toggleClass('is-active');
});

// ダイビングタブ切り替え
$('.js-voice-section:not(:first)').hide();
$(document).ready(function() {
    // 最初にページが読み込まれた時に実行される処理
    // すべての.js-voice-sectionを非表示にする
    $('.js-voice-section').hide();

    // 最初の.js-voice-sectionだけを表示する
    $('.js-voice-section').first().show();

    // 最初のナビゲーションアイテムにis-activeクラスを追加する
    $('.campaign-nav__item a').removeClass('is-active'); // 他のすべてからis-activeを削除
    $('.campaign-nav__item a').first().addClass('is-active'); // 最初のアイテムに追加

    // 既存のクリックイベントハンドラー...
    $('.js-voiceNav-item a').on('click', function(e) {
        e.preventDefault(); // デフォルトのアンカー動作を防止
        // すべての.voice-section__bodyを非表示にする
        $('.js-voice-section').hide();

        // すべてのaタグからis-activeクラスを削除
        $('.campaign-nav__item a').removeClass('is-active');

        // クリックされたaタグにis-activeクラスを追加
        $(this).addClass('is-active');

        // クリックされた項目のインデックスを取得
        var index = $('.js-voiceNav-item').index($(this).parent());

        // 対応する.js-voice-sectionを表示
        $('.js-voice-section').eq(index).show();
    });
});

$(document).ready(function() {
  // 画像をクリックするとモーダルを開く
  $('.gallery__img img').click(function() {
      $('#modalImg').attr('src', $(this).attr('src')); // クリックされた画像のsrcをモーダルの<img>に設定
      $('#myModal').show(); // モーダルを表示
      $('body').css('overflow', 'hidden'); // モーダル表示中はbodyのスクロールを無効にする
  });

  // クローズボタンまたはモーダルの外側をクリックするとモーダルを閉じる
  function closeModal() {
      $('#myModal').hide(); // モーダルを非表示
      $('body').css('overflow', ''); // bodyのスクロールを再び有効にする
  }

  $('.close').click(function() {
      closeModal(); // モーダルを閉じる
  });

  $(window).click(function(e) {
      if ($(e.target).is('#myModal')) {
          closeModal(); // モーダルを閉じる
      }
  });
});
// コンタクトフォーム
    document.getElementById('campaign').addEventListener('change', function() {
        var content = document.querySelector('.toggle-content');
        if(this.checked) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });

});
$('#submitLink').click(function(e) {
  e.preventDefault(); // デフォルトの動作を防止

  // エラーメッセージとエラースタイルをクリア
  $('.error-message').hide();
  $('.contact-page__wrapper input, .contact-page__wrapper textarea').css('background-color', ''); // エラースタイルをリセット

  // 名前の入力チェック
  if ($('#name').val().trim() === '') {
      $('#name').css('background-color', '#ffcccc'); // エラーがあるフィールドの背景色を赤色に変更
      $('#name-error-message').html('※必須項目が入力されていません。<br class="u-mobile">入力してください。').show();
      return; // 他のフィールドのチェックを停止
  }

  // メールアドレスの入力チェック
  if ($('#email').val().trim() === '') {
      $('#email').css('background-color', '#ffcccc');
      $('#email-error-message').html('※必須項目が入力されていません。<br>入力してください。').show();
      return; // 他のフィールドのチェックを停止
  }

  // 電話番号の入力チェック
  if ($('#phone').val().trim() === '') {
      $('#phone').css('background-color', '#ffcccc');
      $('#phone-error-message').html('※必須項目が入力されていません。<br>入力してください。').show();
      return; // 他のフィールドのチェックを停止
  }

  // お問い合わせ内容の入力チェック
  if ($('#message').val().trim() === '') {
      $('#message').css('background-color', '#ffcccc');
      $('#message-error-message').html('※必須項目が入力されていません。<br>入力してください。').show();
      return; // 他のフィールドのチェックを停止
  }

  // ラジオボタン（お問い合わせ項目）のチェック
  if (!$('input[name="interest"]:checked').length) {
      // ラジオボタンに背景色を直接適用することはできないため、
      // エラーメッセージや別の視覚的フィードバックを提供する
      $('#interest-error-message').html('※お問い合わせ項目が選択されていません。<br>選択してください。').show();
      return; // 他のフィールドのチェックを停止
  }
});



