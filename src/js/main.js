// the entry point for browserify
// var logger = require('./logger');
//
// logger.log('Hurray, it woprks! Amd it changed as well. :)');


// search field
jQuery(document).ready(function ($) {
  // http://stackoverflow.com/questions/10807200/jquery-uncaught-typeerror-property-of-object-object-window-is-not-a-funct

  (function() {
    if ($("#inpt-search").length > 0) {
      $("#inpt-search").on("focus", function () {
         $(this).parent('label').addClass('active');
      });

      $("#inpt-search").on('blur', function () {
        if($(this).val().length === 0){
          $(this).parent('label').removeClass('active');
        }
      });
    }
  })();
  // eof search field

  // counter
  (function() {
    $(window).scroll(function() {
      $('#stats').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
          animateCounter();
        }
      });
    });

    function animateCounter(){
      if ($('#stats').length > 0) {
        var numbers = [8, 450000, 10, 25],
            duration = [1.5, 4.5, 3.5, 3],
            numberp = $('#stats .stat h2'),
            comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');

        numberp.each(function(i) {
          $(this).animateNumber({
            number: numbers[i],
            numberStep: comma_separator_number_step
          }, duration[i] * 1000);
        });
      }
    }
  })();
  // eof counter


  // products hover
  (function() {
    if ($('.item .make3d').length > 0) {
      $('.item .make3d').hover(function(){
          $(this).parent().css('z-index', "20");
          $(this).addClass('animate');
         }, function(){
          $(this).removeClass('animate');
          $(this).parent().css('z-index', "1");
      });
    }
  })();
  // eof products hover



  // pagination
  (function() {
    function slide(offset) {
      index = Math.min( Math.max( index + offset, 0 ), total - 1 );

      document.querySelector( '.cntr' ).innerHTML = ( index + 1 ) + ' / ' + total;

      pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
      pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
    }

    var pr = document.querySelector( '.paginate.left' );
    var pl = document.querySelector( '.paginate.right' );

    if (pr && pl) {

      pr.onclick = slide.bind( this, -1 );
      pl.onclick = slide.bind( this, 1 );

      var index = 0, total = 5;


      slide(0);
    }
  })();
  // eof pagination



  // // bxSlider
  // #slider1
  // var slider = $('#slider1').bxSlider({
    // mode: 'fade',
    // pagerCustom: '#bx-pager1',
    // auto: false,
    // speed: 500,
    // pause: 800,
    // pager: false,
    // infiniteLoop: true,
    // controls: false,
  // });

  // var slider = $(".bxslider").bxSlider({
  //   mode: 'slide',
  //   auto: true,
  //   controls: false,
  //   pager: false,
  // });

  // var sliderPager = $(".bxslider-pager").bxSlider({
  //   minSlides: 2,
  //   maxSlides: 3,
  //   slideWidth: 45,
  //   slideMargin: 5,
  //   moveSlides: 1,
  //   auto: false,
  //   pager: false,
  //   prevSelector:('.slider-prev'),
  //   nextSelector:('.slider-next'),
  //   prevText:'',
  //   nextText:'',
  // });
  //
  // $('.bxslider-pager li').on('click', 'a', function(e){
  //   e.preventDefault();
  //   slider.stopAuto();
  //   slider.goToSlide($(this).attr('data-slideIndex'));
  // });




  // new brand slider
  (function() {
    var $j = jQuery.noConflict();

   var realSlider= $j("ul#slider1, ul#slider2").bxSlider({
         speed:300,
         pager:false,
         nextText:'',
         prevText:'',
         infiniteLoop:false,
         hideControlOnEnd:true,
          controls: false,
        //  onSlideBefore:function($slideElement, oldIndex, newIndex){
        //    changeRealThumb(realThumbSlider,newIndex);
         //
        //  }

       });


       var realThumbSlider=$j("ul#bx-pager1, ul#bx-pager2").bxSlider({
         minSlides: 2,
         maxSlides: 3,
         slideWidth: 88,
         slideMargin: 30,
         moveSlides: 1,
         pager:false,
         speed:300,
         infiniteLoop:false,
         hideControlOnEnd:true,
         nextText:'<span></span>',
         prevText:'<span></span>',

         prevSelector:('.slider-prev'),
         nextSelector:('.slider-next'),
         onSlideBefore:function($slideElement, oldIndex, newIndex){
           /*$j("#sliderThumbReal ul .active").removeClass("active");
           $slideElement.addClass("active"); */

         }
       });

      //  window.addEventListener("resize", function(){
      //    if (window.matchMedia("(max-width: 1199px)").matches) {
      //      realThumbSlider=$j("ul#bx-pager1").bxSlider({
      //        slideWidth: 88,
      //        slideMargin: 30
      //      });
      //    } else if (window.matchMedia("(max-width: 767px)").matches) {
      //      realThumbSlider=$j("ul#bx-pager1").bxSlider({
      //        slideWidth: 72,
      //        slideMargin: 8
      //      });
      //    }
      //  });
      //  if ( $(window).width() < 1200 & $(window).width() >= 768 ) {
      //    realThumbSlider=$j("ul#bx-pager1").bxSlider({
      //      slideWidth: 88,
      //      slideMargin: 30
      //    });
      //  } else if ($(window).width() < 768) {
      //    realThumbSlider=$j("ul#bx-pager1").bxSlider({
      //           minSlides: 2,
      //           maxSlides: 2,
      //           slideWidth: 72,
      //           slideMargin: 8,
      //           moveSlides: 1,
      //           pager:false,
      //           speed:300,
      //           infiniteLoop:false,
      //           hideControlOnEnd:true,
      //           nextText:'<span></span>',
      //           prevText:'<span></span>',
       //
      //           prevSelector:('.slider-prev'),
      //           nextSelector:('.slider-next'),
      //           onSlideBefore:function($slideElement, oldIndex, newIndex){
      //             /*$j("#sliderThumbReal ul .active").removeClass("active");
      //             $slideElement.addClass("active"); */
       //
      //           }
      //    });
      //  }

      //  if ( $(window).width() < 1200 & $(window).width() >= 768 ) {
      //    var realThumbSlider=$j("ul#bx-pager1").bxSlider({
      //      minSlides: 2,
      //      maxSlides: 2,
      //      slideWidth: 88,
      //      slideMargin: 10,
      //      moveSlides: 1,
      //      pager:false,
      //      speed:300,
      //      infiniteLoop:false,
      //      hideControlOnEnd:true,
      //      nextText:'<span></span>',
      //      prevText:'<span></span>',
       //
      //      prevSelector:('.slider-prev'),
      //      nextSelector:('.slider-next'),
      //      onSlideBefore:function($slideElement, oldIndex, newIndex){
      //        /*$j("#sliderThumbReal ul .active").removeClass("active");
      //        $slideElement.addClass("active"); */
       //
      //      }
      //    });
      //  } else if ($(window).width() < 768) {
      //    var realThumbSlider=$j("ul#bx-pager1").bxSlider({
      //      minSlides: 2,
      //      maxSlides: 2,
      //      slideWidth: 72,
      //      slideMargin: 8,
      //      moveSlides: 1,
      //      pager:false,
      //      speed:300,
      //      infiniteLoop:false,
      //      hideControlOnEnd:true,
      //      nextText:'<span></span>',
      //      prevText:'<span></span>',
       //
      //      prevSelector:('.slider-prev'),
      //      nextSelector:('.slider-next'),
      //      onSlideBefore:function($slideElement, oldIndex, newIndex){
      //        /*$j("#sliderThumbReal ul .active").removeClass("active");
      //        $slideElement.addClass("active"); */
       //
      //      }
      //    });
      //  }

       linkRealSliders(realSlider,realThumbSlider);

      //  if($j("#bx-pager1 li").length<5){
      //    $j("#bx-pager1 .bx-next").hide();
      //  }

      // sincronizza sliders realizzazioni
    function linkRealSliders(bigS,thumbS){

     $j("ul#bx-pager1, ul#bx-pager2").on("click","a",function(event){
       event.preventDefault();
       var newIndex=$j(this).parent().attr("data-slideIndex");
           bigS.goToSlide(newIndex);
     });
    }

    //slider!=$thumbSlider. slider is the realslider
    function changeRealThumb(slider,newIndex){

     var $thumbS=$j("#bx-pager1, ul#bx-pager2");
     $thumbS.find('.active').removeClass("active");
     $thumbS.find('li[data-slideIndex="'+newIndex+'"]').addClass("active");

     if(slider.getSlideCount()-newIndex>=4)slider.goToSlide(newIndex);
     else slider.goToSlide(slider.getSlideCount()-4);

    }
  })();




if ($( ".faq-item-title" ).length) {
  $( ".faq-item-title" ).click(function() {
    $(this).siblings('.faq-item-content').slideToggle();
    $(this).parent('.jsFaqItem').toggleClass('active');
  });

  $('.products-nav-menu').click(function(){
    $('.jsProdMenuContent').slideToggle();
    $('.jsColumnTitle').toggleClass('active');
  });
}


  // EOF faq toggle page


  // burger

  // burger animation itself:
$('a.burger-menu, .menu-overlay').click(function(){
  $('.burger-link').toggleClass("burger-active");
  $('.menu-overlay').fadeToggle(200, 'linear');
  $('.main-nav').slideToggle(200, 'easeInOutCubic');
});

$('.request-callback-nav').click(function(){
  $('.modal-content').fadeIn( 300 );
  $('.modal-overlay').fadeIn( 300 );

  // hide menu toggle and convert to burger
  $('.burger-link').removeClass("burger-active");
  $('.menu-overlay').fadeOut(200, 'linear');
  $('.main-nav').slideUp(200, 'easeInOutCubic');
});


    showMainModal();
    function showMainModal(){
      $('.request-callback').click(function(){
        $('.modal-content').fadeIn( 300 );
        $('.modal-overlay').fadeIn( 300 );
      });
    }

    closeMainModal();
    function closeMainModal(){
      $('.modal-content-close').click(function(){
        $('.modal-content').fadeOut( 300 );
        $('.modal-overlay').fadeOut( 300 );
      });
    }

    hideMainOverlay();
    function hideMainOverlay(){
      $('.modal-overlay').click(function(){
        $('.modal-content').fadeOut( 300 );
        $('.modal-overlay').fadeOut( 300 );
      });
    }

    checkFormValues();
    function checkFormValues(){
      $('.callback-form').submit(function( event ) {
        if (!($('[name=login]').val()) || !($('[name=phone]').val())) {
          event.preventDefault();
        }
      });
    }

    $('html body').on('keyup', function(e){
      if (e.keyCode === 27) {
          $('.modal-content').fadeOut( 300 );
          $('.modal-overlay').fadeOut( 300 );
          $('.burger-link').removeClass("burger-active");
          $('.menu-overlay').fadeOut(200, 'linear');
          if ( $(window).width() < 768) {
            $('.main-nav').slideUp(200, 'easeInOutCubic');
          }

      }
    });
  // EOF index modal content


  // dropDown menu
  (function() {
    if ( $(window).width() > 768) {
      $( '.dropdown' ).mouseenter(
          function(){
              clearTimeout($.data(this, 'timer'));

              $(this).children('.sub-menu').stop(true, true).slideDown(200, 'easeInOutCubic');
              $(this).addClass('active');
          }
      );
      $( '.dropdown' ).mouseleave(
          function(){
            $.data(this, 'timer', setTimeout($.proxy(function() {

              $(this).children('.sub-menu').stop(true, true).slideUp(200, 'easeInOutCubic');
              $(this).removeClass('active');
            }, this), 200));

          }
      );
    }
  })();
  // http://stackoverflow.com/questions/3713513/jquery-dropdown-menu-using-slideup-and-slidedown-on-hover-is-jumpy
  // EOF dropDown menu



  // footer-nav text change
  (function() {
     // your page initialization code here
     // the DOM will be available here

     window.addEventListener("resize", function(){
     	if (window.matchMedia("(max-width: 767px)").matches) {
     		var string = 'Техпомощь';
     		$('.footer-nav ul li:nth-child(3) a').text( string );
     	} else {
        var origin = 'Техподдержка';
        $('.footer-nav ul li:nth-child(3) a').text( origin );
      }
     });


  })();

  (function() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      var string = 'Заказать консультацию';
      $('.page-documentation .btn-form, .page-product-desc .btn-form').text( string );
    } else {
      var origin = 'Заказать бесплатную консультацию';
      $('.page-documentation .btn-form, .page-product-desc .btn-form').text( origin );
    }
  })();

  (function() {
    // product-desc page
    if (window.matchMedia("(max-width: 767px)").matches) {
      var string = 'Бесплатная консультация';
      $('.page-product-desc .btn-desc').text( string );
    } else {
      var origin = 'Заказать бесплатную консультацию';
      $('.page-product-desc .btn-desc').text( origin );
    }
  })();


  (function() {
    if (window.matchMedia("(max-width: 1199px)").matches) {
     var string = 'Выберите категорию';
     $('.page-solutions .products-nav-menu .column-title').text( string );
    } else {
     var origin = 'Категории';
     $('.page-solutions .products-nav-menu .column-title').text( origin );
    }
  })();

  // http://stackoverflow.com/questions/23122336/javascript-resize-event-not-working?noredirect=1&lq=1

  (function() {
    if ( $(window).width() < 768) {
      //Add your javascript for large screens here
      (function() {
        var string = 'Техпомощь';
        $('.footer-nav ul li:nth-child(3) a').text( string );
      })();
    }
  })();

  // http://www.coalmarch.com/blog/how-to-execute-javascript-based-on-screen-size-using-jquery

  // EOF footer-nav text change



  // parallax
  (function() {
    var isIE = navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.indexOf("Trident") > 0 || navigator.userAgent.indexOf("Edge") > 0,
      wScroll = $(window).scrollTop();

    // parallax effect function
    function parallax(prlxBg, prlxContainer, factor){
      if (isIE) {
      $(prlxBg).css({
        'transform': 'translateY(0px)'
      });
      return;
      }
      if((wScroll + $(window).height()) >= $(prlxBg).offset().top) {
        console.log("true!");
      $(prlxBg).css({
        'transform': 'translateY(' + (($(prlxContainer).offset().top - wScroll) / $(window).height() * 100) * factor +'%)'
      });
      }
    }

    $(window).scroll(function(){
      wScroll = $(this).scrollTop();

      if($('.parallax-index').length > 0){
        parallax('.bottom-line', '.parallax-index', 0.6);
      }
    });
  })();
  // EOFparallax


  // home slider
  (function() {
    $('.slide').hover(function() {
      $('.nextend-arrow').fadeToggle( 300 );
    });
  })();
  // EOF home slider





  // tabs module
  (function() {
    $('.js-tabs li[data-id]').click(function(){
      if($(this).hasClass('active')){ return; }

      $('#' + $(this).attr('data-id')).fadeIn(0).siblings().fadeOut(0);
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });
  })();
// EOFtabs module


}); // EOF document.ready MAIN
