
jQuery(function() {
  var $module = jQuery('#m-1586210129622').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1586210132554').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1586210132107').children('.module');
  $module.gfV3ProductImageList({
      onImageClicked: function(imageUrl, imageZoomUrl) {}
  });

  var style = $module.attr('data-style');
  switch(style) {
      case 'slider':
          var navspeed = $module.data('navspeed'),
              navlg = $module.data('navlg'),
              navmd = $module.data('navmd'),
              navsm = $module.data('navsm'),
              navxs = $module.data('navxs'),
              collg = $module.data('collg'),
              colmd = $module.data('colmd'),
              colsm = $module.data('colsm'),
              colxs = $module.data('colxs'),
              dotslg = $module.data('dotslg'),
              dotsmd = $module.data('dotsmd'),
              dotssm = $module.data('dotssm'),
              dotsxs = $module.data('dotsxs'),

              marginlg = parseInt($module.data('mlg')),
              marginmd = parseInt($module.data('mmd')),
              marginsm = parseInt($module.data('msm')),
              marginxs = parseInt($module.data('mxs'));

          var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
          if(mode == 'production') {
              var loop = $module.data('loop');
          } else {
              var loop = 0;
          }
          $module.find('.gf_product-images-list').owlCarousel({
              mouseDrag: false,
              navSpeed: navspeed,
              autoWidth: !1,
              loop: loop,
              responsiveClass:true,
              responsive:{
                  0:{
                      items:colxs,
                      nav: navxs,
                      dots:dotsxs,
                      margin: marginxs
                  },
                  768:{
                      items:colsm,
                      nav: navsm,
                      dots:dotssm,
                      margin: marginsm
                  },
                  992:{
                      items:colmd,
                      nav: navmd,
                      dots:dotsmd,
                      margin: marginmd
                  },
                  1200:{
                      items:collg,
                      nav: navlg,
                      dots:dotslg,
                      margin: marginlg
                  }
              }
          }); 
          break;
  }
});jQuery(function() {
  var $module = jQuery('#m-1586210131813').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1586210131742').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
    var $module = jQuery('#m-1586210131750').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});jQuery(function() {
    var $module = jQuery('#m-1586210131433').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});jQuery(function() {
  var $module = jQuery('#m-1586210130995').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});jQuery(function() {
  var $module = jQuery('#m-1586211993009').children('.module');
  $module.gfV3ProductDesc();
});jQuery(function() {
  var $module = jQuery('#m-1586284745961').children('.module');
  $module.gfV3ProductDesc();
});jQuery(function() {
  var $hero = jQuery('#m-1587157028376');
  var $module = jQuery('#m-1587157028376').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $heroLink = $hero.children('.hero-link');
  if(mode == 'dev' && $heroLink.length > 0) {
   $hero.children('.hero-link').hide();
  }
  if (mode == 'production' && $heroLink.length > 0) {
    $module.off('click.openLink').on('click.openLink', function(e) {
      var $target = jQuery(e.target);
      if ($target.length > 0){
        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
        if (linkTarget == "") {
          var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
          var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
          if (link != "") {
            if (newTab == "") {
              window.location.href = link;
            } else {
              window.open(link, newTab);
            }
          }
        }
      };
    })
  }

  var height = jQuery.trim($module.attr('data-height'));
  if(height == undefined || height == '') {
    $hero.attr('style', 'height: auto!important');
    jQuery(window).resize(function(){
      $hero.attr('style', 'height: auto!important');
    });
  } else {
    $hero.removeAttr('style');
  }

  var effect = $module.attr('data-effect');
  var transition = $module.attr('data-transition');

  if(effect == 'effect-zoom') {   
    $module.parent().addClass(effect);  

    setTimeout(function() {
      var backgroundImage = $module.parent().css('background-image');
      var backgroundSize = $module.parent().css('background-size');
      var backgroundPosition = $module.parent().css('background-position');
      $module.siblings('.gf_hero-bg-wrap').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      })
      $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      });
    }, 300);
  }

  if($module.attr('data-fixedMode') == '1'){
    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

    jQuery(window).resize(function(){
      var backgroundImage =  $module.parent().css('background-image');
      $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
    });
  } else {
    $module.parent().removeAttr('style');
  }
});jQuery(function() {
  var $hero = jQuery('#m-1585932072478');
  var $module = jQuery('#m-1585932072478').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $heroLink = $hero.children('.hero-link');
  if(mode == 'dev' && $heroLink.length > 0) {
   $hero.children('.hero-link').hide();
  }
  if (mode == 'production' && $heroLink.length > 0) {
    $module.off('click.openLink').on('click.openLink', function(e) {
      var $target = jQuery(e.target);
      if ($target.length > 0){
        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
        if (linkTarget == "") {
          var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
          var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
          if (link != "") {
            if (newTab == "") {
              window.location.href = link;
            } else {
              window.open(link, newTab);
            }
          }
        }
      };
    })
  }

  var height = jQuery.trim($module.attr('data-height'));
  if(height == undefined || height == '') {
    $hero.attr('style', 'height: auto!important');
    jQuery(window).resize(function(){
      $hero.attr('style', 'height: auto!important');
    });
  } else {
    $hero.removeAttr('style');
  }

  var effect = $module.attr('data-effect');
  var transition = $module.attr('data-transition');

  if(effect == 'effect-zoom') {   
    $module.parent().addClass(effect);  

    setTimeout(function() {
      var backgroundImage = $module.parent().css('background-image');
      var backgroundSize = $module.parent().css('background-size');
      var backgroundPosition = $module.parent().css('background-position');
      $module.siblings('.gf_hero-bg-wrap').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      })
      $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      });
    }, 300);
  }

  if($module.attr('data-fixedMode') == '1'){
    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

    jQuery(window).resize(function(){
      var backgroundImage =  $module.parent().css('background-image');
      $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
    });
  } else {
    $module.parent().removeAttr('style');
  }
});