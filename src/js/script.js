
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    // ------------ドロワー --------------

jQuery('.drawer-btns').on('click',function(){
    jQuery('.drawer-btns').toggleClass('is-active');
    jQuery('.drawer-btns span').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');
    jQuery('body').toggleClass('scroll-lock');
  });
  
  jQuery('.drawer-item a').on('click',function(){
    
  jQuery('.drawer-btns , .drawer-btns span').removeClass('is-active');
  jQuery('.drawer-content').removeClass('is-active');
  jQuery('.drawer-background').removeClass('is-active');
  jQuery('body').removeClass('scroll-lock');
  });
});
