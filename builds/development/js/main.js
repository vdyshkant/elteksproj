(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*eslint-disable no-unused-vars*/

// the entry point for browserify
// var logger = require('./logger');
//
// logger.log('Hurray, it woprks! Amd it changed as well. :)');
"use strict";

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
  if ($('.pagination').length) {
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
  }
  // eof pagination


  // new brand slider
  if ($( "ul#slider1" ).length) {
  (function() {
    var $j = jQuery.noConflict();

   var realSlider= $j("ul#slider1").bxSlider({
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


       var realThumbSlider=$j("ul#bx-pager1").bxSlider({
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
        //  onSlideBefore:function($slideElement, oldIndex, newIndex){
           /*$j("#sliderThumbReal ul .active").removeClass("active");
           $slideElement.addClass("active"); */

        //  }
       });

       linkRealSliders(realSlider,realThumbSlider);

      //  if($j("#bx-pager1 li").length<5){
      //    $j("#bx-pager1 .bx-next").hide();
      //  }

      // sincronizza sliders realizzazioni
    function linkRealSliders(bigS,thumbS){

     $j("ul#bx-pager1").on("click","a",function(event){
       event.preventDefault();
       var newIndex=$j(this).parent().attr("data-slideIndex");
           bigS.goToSlide(newIndex);
     });
    }

    //slider!=$thumbSlider. slider is the realslider
    function changeRealThumb(slider,newIndex){

     var $thumbS=$j("#bx-pager1");
     $thumbS.find('.active').removeClass("active");
     $thumbS.find('li[data-slideIndex="'+newIndex+'"]').addClass("active");

     if(slider.getSlideCount()-newIndex>=4){
       slider.goToSlide(newIndex);
     } else {
       slider.goToSlide(slider.getSlideCount()-4);
     }
    }
  })();
}

// slider #2
if ($( "ul#slider2" ).length) {
(function() {
  var $j = jQuery.noConflict();

 var realSlider= $j("ul#slider2").bxSlider({
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


     var realThumbSlider=$j("ul#bx-pager2").bxSlider({
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

     linkRealSliders(realSlider,realThumbSlider);

    //  if($j("#bx-pager1 li").length<5){
    //    $j("#bx-pager1 .bx-next").hide();
    //  }

    // sincronizza sliders realizzazioni
  function linkRealSliders(bigS,thumbS){

   $j("ul#bx-pager2").on("click","a",function(event){
     event.preventDefault();
     var newIndex=$j(this).parent().attr("data-slideIndex");
         bigS.goToSlide(newIndex);
   });
  }

  //slider!=$thumbSlider. slider is the realslider
  function changeRealThumb(slider,newIndex){

   var $thumbS=$j("#bx-pager2");
   $thumbS.find('.active').removeClass("active");
   $thumbS.find('li[data-slideIndex="'+newIndex+'"]').addClass("active");

   if(slider.getSlideCount()-newIndex>=4) {
     slider.goToSlide(newIndex);
   } else {
     slider.goToSlide(slider.getSlideCount()-4);
   }



  }
})();
} // EOF if

// home slider
if ($( "#slider-home" ).length) {
  $('#slider-home').bxSlider({
    speed:1000,
    // pause:200,
    // auto:true,
    pager:true,
    // easing: 'swing',
    mode:'fade',
    nextText:'',
    prevText:'',
    prevSelector:('.nextend-arrow-previous'),
    nextSelector:('.nextend-arrow-next'),
    infiniteLoop:true,
    pagerCustom: true,
    onSliderLoad: function(){
      $('.img-item').delay(400).animate({
        'left': '+=450',
        'opacity': 1
      }, 1200);

      $('.slide-content').animate({
        'top': '50%',
        'opacity': 1
      }, 1200);

      $('.slide-btn-outer').delay(900).animate({
        'opacity': 1
      }, 800);

      // $('.btn-slide').delay(1000).animate({
      //   'opacity': 1
      // }, 1200);
    },
    onSlideAfter: function($slideElement, oldIndex, newIndex){
      $('.img-item').delay(400).animate({
        'left': '+=450',
        'opacity': 1
      }, 1200);

      $('.slide-content').animate({
        'top': '50%',
        'opacity': 1
      }, 1200);

      $('.slide-btn-outer').delay(900).animate({
        'opacity': 1
      }, 800);

      // $('.slide-btn-outer').delay(1000).animate({
      //   'opacity': 1
      // }, 1200);
    },
    onSlideBefore: function($slideElement, oldIndex, newIndex){
      // hiding elements before rebase
      $('.img-item').animate({
        'opacity': '0'
      }, 500);

      $('.slide-content').animate({
        'opacity': 0
      }, 500);

      $('.slide-btn-outer').animate({
        'opacity': 0
      }, 500);

      // changing parameters
      $('.img-item').animate({
        'left': '-=450'
      }, 50);

      $('.slide-content').animate({
        'top': '25%'
      }, 50);

      // $('.slide-btn-outer').animate({
      //   'top': '67%'
      // }, 50);

      // $('.slide-btn-outer').animate({
      //   'opacity': 0
      // }, 500);
    }
  });
}

// home slider
(function($) {
  $('.home-slider').hover(function() {

    clearTimeout($.data(this, 'timer'));
    $('.nextend-arrow').stop(true, true).fadeToggle( 300 );
  });
})(jQuery);
// EOF home slider
// EOF home slider








// EOF bx slider


  // faq toggle page

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

// toggle documentation-grid tablet

if ( $(window).width() < 1200) {
  if ($( ".page-documentation-grid .jsColumnTitle" ).length) {
    $( ".page-documentation-grid .jsColumnTitle" ).click(function() {
      $('.products-nav-menu .products-nav-content').slideToggle();
      $('.products-nav-menu .column-title.jsColumnTitle').toggleClass('active');
      // $(this).parent('.jsFaqItem').toggleClass('active');
    });
  }
}

// EOF toggle documentation-grid tablet

// toggle product-grid tablet

if ( $(window).width() < 1200) {
  if ($( ".page-product-grid .jsColumnTitle" ).length) {
    $( ".page-product-grid .jsColumnTitle" ).click(function() {
      $('.products-nav-menu .products-nav-content').slideToggle();
      $('.products-nav-menu .column-title.jsColumnTitle').toggleClass('active');
      // $(this).parent('.jsFaqItem').toggleClass('active');
    });
  }
}

// EOF toggle product-grid tablet


// toggle solutions tablet

if ( $(window).width() < 1200) {
  if ($( ".page-solutions .jsColumnTitle" ).length) {
    $( ".page-solutions .jsColumnTitle" ).click(function() {
      $('.products-nav-menu .products-nav-content').slideToggle();
      $('.products-nav-menu .column-title.jsColumnTitle').toggleClass('active');
      // $(this).parent('.jsFaqItem').toggleClass('active');
    });
  }
}

// EOF toggle solutions tablet


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

  // documentation-grid title
  (function() {
    if (window.matchMedia("(max-width: 1199px)").matches) {
     var string = 'Документация';
     $('.page-documentation-grid .page-title h1').text( string );
    } else {
     var origin = 'Документация для оборудования';
     $('.page-documentation-grid .page-title h1').text( origin );
    }
  })();

  // documentation-grid title
  (function() {
    if (window.matchMedia("(max-width: 1199px)").matches) {
     var string = 'Выберите категорию';
     $('.page-documentation-grid .column-left .column-title').text( string );
    } else {
     var origin = 'Категории';
     $('.page-documentation-grid .column-left .column-title').text( origin );
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








  // tabs module
  (function() {
    $('.js-tabs li[data-id]').click(function(){
      if($(this).hasClass('active')){ return; }

      $('#' + $(this).attr('data-id')).fadeIn(0).siblings().fadeOut(0);
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });
  })();

  // tabs for mobile
  if ( $(window).width() < 768) {
    (function($) {
           // You pass-in jQuery and then alias it with the $-sign
           // So your internal code doesn't change

          $('.desc-full-title').click(function(){
             $('#menu_tabs .desc-full-title').removeClass('active');
             $(this).addClass('active');
             $('#menu_tabs .desc-full-title:not(.desc-full-title.active)').addClass('overtabbed');
             $('#menu_tabs .active').removeClass('overtabbed').css( 'width','auto' );
             var nonActiveTabsCommonW = $('#menu_tabs .desc-nav.module-header').width() - $('#menu_tabs .desc-full-title.active').outerWidth();
             var W4nonActiveTab = nonActiveTabsCommonW / 2 - 1;
             $('#menu_tabs .desc-full-title:not(.desc-full-title.active)').outerWidth( W4nonActiveTab );
          });

          $('#menu_tabs .desc-full-title:first-child').addClass('active');
          $('#menu_tabs .desc-full-title:not(.desc-full-title.active)').addClass('overtabbed');
          $('#menu_tabs .active').removeClass('overtabbed').css( 'width','auto' );
          var nonActiveTabsCommonW = $('#menu_tabs .desc-nav.module-header').width() - $('#menu_tabs .desc-full-title.active').outerWidth();
          var W4nonActiveTab = nonActiveTabsCommonW / 2 - 1;
          $('#menu_tabs .desc-full-title:not(.desc-full-title.active)').outerWidth( W4nonActiveTab );

    })(jQuery);
  }


// EOFtabs module


// breadcrumbs ...

if ( $(window).width() < 768) {
  (function($) {
        // You pass-in jQuery and then alias it with the $-sign
        // So your internal code doesn't change
        var count = $('.breadcrumbs li').length;
        if (count >= 3) {
          $('.breadcrumbs li:nth-child(n+2):not(:last-child) a').html('...');
        }
        $('.breadcrumbs li:last-child a').addClass('overcrumbs');
        // http://stackoverflow.com/questions/4291151/jquery-count-child-elements

        // counting width for whole vreadcrumbs
        var parent = $('.breadcrumbs').width();
        var last = $('.breadcrumbs li:not(:last-child)').outerWidth();

        var w = 0;

        jQuery('.breadcrumbs li:last-child').each(function(){
          jQuery(this).prevAll().each(function(){
            w += $(this).width();
            console.log(w);
          });
        });
        var newWidthForLastEl = parent - w - 10;

        $('.breadcrumbs li:last-child').width( newWidthForLastEl );

  })(jQuery);
}

// EOF breadcrumbs ...



// form validation


$( '.callback' ).submit(function(e){
    e.preventDefault();
	var name  = $( '.callback [name=login]' ),
		phone = $( '.callback [name=phone]' ),
		email = $( '.callback [name=email]' );

	if ( name.val() === '' ) {
		name.parents('.user-field').addClass( 'error' );
		return false;
	}
  if ( ! validateEmail( email.val()) ) {
		email.parents('.phone-field').addClass( 'error' );
		return false;
	}

  if ( phone.val() === '' ) {
		phone.parents('.email-field').addClass( 'error' );
		return false;
	}

	return true;

	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
});

// "instant"-check
$( '.callback input[type="email"]' ).blur(function() {
	if( ! validateEmail( $(this).val()) ){
		$(this).addClass( 'error' );
	} else {
		$(this).removeClass( 'error' );
	}
});
function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}










// EOF form validation




}); // EOF document.ready MAIN

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d3L0RvY3VtZW50cy93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvd3cvRG9jdW1lbnRzL3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L3NyYy9qcy9mYWtlXzJmMTQ3NTg5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMqL1xuXG4vLyB0aGUgZW50cnkgcG9pbnQgZm9yIGJyb3dzZXJpZnlcbi8vIHZhciBsb2dnZXIgPSByZXF1aXJlKCcuL2xvZ2dlcicpO1xuLy9cbi8vIGxvZ2dlci5sb2coJ0h1cnJheSwgaXQgd29wcmtzISBBbWQgaXQgY2hhbmdlZCBhcyB3ZWxsLiA6KScpO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHNlYXJjaCBmaWVsZFxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwODA3MjAwL2pxdWVyeS11bmNhdWdodC10eXBlZXJyb3ItcHJvcGVydHktb2Ytb2JqZWN0LW9iamVjdC13aW5kb3ctaXMtbm90LWEtZnVuY3RcblxuICAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoXCIjaW5wdC1zZWFyY2hcIikubGVuZ3RoID4gMCkge1xuICAgICAgJChcIiNpbnB0LXNlYXJjaFwiKS5vbihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICQodGhpcykucGFyZW50KCdsYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKFwiI2lucHQtc2VhcmNoXCIpLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZigkKHRoaXMpLnZhbCgpLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pKCk7XG4gIC8vIGVvZiBzZWFyY2ggZmllbGRcblxuICAvLyBjb3VudGVyXG4gIChmdW5jdGlvbigpIHtcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgJCgnI3N0YXRzJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgaW1hZ2VQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgdmFyIHRvcE9mV2luZG93ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICBpZiAoaW1hZ2VQb3MgPCB0b3BPZldpbmRvdys2NTApIHtcbiAgICAgICAgICBhbmltYXRlQ291bnRlcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVDb3VudGVyKCl7XG4gICAgICBpZiAoJCgnI3N0YXRzJykubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgbnVtYmVycyA9IFs4LCA0NTAwMDAsIDEwLCAyNV0sXG4gICAgICAgICAgICBkdXJhdGlvbiA9IFsxLjUsIDQuNSwgMy41LCAzXSxcbiAgICAgICAgICAgIG51bWJlcnAgPSAkKCcjc3RhdHMgLnN0YXQgaDInKSxcbiAgICAgICAgICAgIGNvbW1hX3NlcGFyYXRvcl9udW1iZXJfc3RlcCA9ICQuYW5pbWF0ZU51bWJlci5udW1iZXJTdGVwRmFjdG9yaWVzLnNlcGFyYXRvcignICcpO1xuXG4gICAgICAgIG51bWJlcnAuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgJCh0aGlzKS5hbmltYXRlTnVtYmVyKHtcbiAgICAgICAgICAgIG51bWJlcjogbnVtYmVyc1tpXSxcbiAgICAgICAgICAgIG51bWJlclN0ZXA6IGNvbW1hX3NlcGFyYXRvcl9udW1iZXJfc3RlcFxuICAgICAgICAgIH0sIGR1cmF0aW9uW2ldICogMTAwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcbiAgLy8gZW9mIGNvdW50ZXJcblxuXG4gIC8vIHByb2R1Y3RzIGhvdmVyXG4gIChmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLml0ZW0gLm1ha2UzZCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICQoJy5pdGVtIC5tYWtlM2QnKS5ob3ZlcihmdW5jdGlvbigpe1xuICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKCd6LWluZGV4JywgXCIyMFwiKTtcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygnei1pbmRleCcsIFwiMVwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcbiAgLy8gZW9mIHByb2R1Y3RzIGhvdmVyXG5cblxuXG4gIC8vIHBhZ2luYXRpb25cbiAgaWYgKCQoJy5wYWdpbmF0aW9uJykubGVuZ3RoKSB7XG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICBmdW5jdGlvbiBzbGlkZShvZmZzZXQpIHtcbiAgICAgICAgICBpbmRleCA9IE1hdGgubWluKCBNYXRoLm1heCggaW5kZXggKyBvZmZzZXQsIDAgKSwgdG90YWwgLSAxICk7XG5cbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmNudHInICkuaW5uZXJIVE1MID0gKCBpbmRleCArIDEgKSArICcgLyAnICsgdG90YWw7XG5cbiAgICAgICAgICBwci5zZXRBdHRyaWJ1dGUoICdkYXRhLXN0YXRlJywgaW5kZXggPT09IDAgPyAnZGlzYWJsZWQnIDogJycgKTtcbiAgICAgICAgICBwbC5zZXRBdHRyaWJ1dGUoICdkYXRhLXN0YXRlJywgaW5kZXggPT09IHRvdGFsIC0gMSA/ICdkaXNhYmxlZCcgOiAnJyApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wYWdpbmF0ZS5sZWZ0JyApO1xuICAgICAgICB2YXIgcGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBhZ2luYXRlLnJpZ2h0JyApO1xuXG4gICAgICAgIGlmIChwciAmJiBwbCkge1xuXG4gICAgICAgICAgcHIub25jbGljayA9IHNsaWRlLmJpbmQoIHRoaXMsIC0xICk7XG4gICAgICAgICAgcGwub25jbGljayA9IHNsaWRlLmJpbmQoIHRoaXMsIDEgKTtcblxuICAgICAgICAgIHZhciBpbmRleCA9IDAsIHRvdGFsID0gNTtcblxuXG4gICAgICAgICAgc2xpZGUoMCk7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuICB9XG4gIC8vIGVvZiBwYWdpbmF0aW9uXG5cblxuICAvLyBuZXcgYnJhbmQgc2xpZGVyXG4gIGlmICgkKCBcInVsI3NsaWRlcjFcIiApLmxlbmd0aCkge1xuICAoZnVuY3Rpb24oKSB7XG4gICAgdmFyICRqID0galF1ZXJ5Lm5vQ29uZmxpY3QoKTtcblxuICAgdmFyIHJlYWxTbGlkZXI9ICRqKFwidWwjc2xpZGVyMVwiKS5ieFNsaWRlcih7XG4gICAgICAgICBzcGVlZDozMDAsXG4gICAgICAgICBwYWdlcjpmYWxzZSxcbiAgICAgICAgIG5leHRUZXh0OicnLFxuICAgICAgICAgcHJldlRleHQ6JycsXG4gICAgICAgICBpbmZpbml0ZUxvb3A6ZmFsc2UsXG4gICAgICAgICBoaWRlQ29udHJvbE9uRW5kOnRydWUsXG4gICAgICAgICAgY29udHJvbHM6IGZhbHNlLFxuICAgICAgICAvLyAgb25TbGlkZUJlZm9yZTpmdW5jdGlvbigkc2xpZGVFbGVtZW50LCBvbGRJbmRleCwgbmV3SW5kZXgpe1xuICAgICAgICAvLyAgICBjaGFuZ2VSZWFsVGh1bWIocmVhbFRodW1iU2xpZGVyLG5ld0luZGV4KTtcbiAgICAgICAgIC8vXG4gICAgICAgIC8vICB9XG5cbiAgICAgICB9KTtcblxuXG4gICAgICAgdmFyIHJlYWxUaHVtYlNsaWRlcj0kaihcInVsI2J4LXBhZ2VyMVwiKS5ieFNsaWRlcih7XG4gICAgICAgICBtaW5TbGlkZXM6IDIsXG4gICAgICAgICBtYXhTbGlkZXM6IDMsXG4gICAgICAgICBzbGlkZVdpZHRoOiA4OCxcbiAgICAgICAgIHNsaWRlTWFyZ2luOiAzMCxcbiAgICAgICAgIG1vdmVTbGlkZXM6IDEsXG4gICAgICAgICBwYWdlcjpmYWxzZSxcbiAgICAgICAgIHNwZWVkOjMwMCxcbiAgICAgICAgIGluZmluaXRlTG9vcDpmYWxzZSxcbiAgICAgICAgIGhpZGVDb250cm9sT25FbmQ6dHJ1ZSxcbiAgICAgICAgIG5leHRUZXh0Oic8c3Bhbj48L3NwYW4+JyxcbiAgICAgICAgIHByZXZUZXh0Oic8c3Bhbj48L3NwYW4+JyxcblxuICAgICAgICAgcHJldlNlbGVjdG9yOignLnNsaWRlci1wcmV2JyksXG4gICAgICAgICBuZXh0U2VsZWN0b3I6KCcuc2xpZGVyLW5leHQnKSxcbiAgICAgICAgLy8gIG9uU2xpZGVCZWZvcmU6ZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KXtcbiAgICAgICAgICAgLyokaihcIiNzbGlkZXJUaHVtYlJlYWwgdWwgLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgJHNsaWRlRWxlbWVudC5hZGRDbGFzcyhcImFjdGl2ZVwiKTsgKi9cblxuICAgICAgICAvLyAgfVxuICAgICAgIH0pO1xuXG4gICAgICAgbGlua1JlYWxTbGlkZXJzKHJlYWxTbGlkZXIscmVhbFRodW1iU2xpZGVyKTtcblxuICAgICAgLy8gIGlmKCRqKFwiI2J4LXBhZ2VyMSBsaVwiKS5sZW5ndGg8NSl7XG4gICAgICAvLyAgICAkaihcIiNieC1wYWdlcjEgLmJ4LW5leHRcIikuaGlkZSgpO1xuICAgICAgLy8gIH1cblxuICAgICAgLy8gc2luY3Jvbml6emEgc2xpZGVycyByZWFsaXp6YXppb25pXG4gICAgZnVuY3Rpb24gbGlua1JlYWxTbGlkZXJzKGJpZ1MsdGh1bWJTKXtcblxuICAgICAkaihcInVsI2J4LXBhZ2VyMVwiKS5vbihcImNsaWNrXCIsXCJhXCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgdmFyIG5ld0luZGV4PSRqKHRoaXMpLnBhcmVudCgpLmF0dHIoXCJkYXRhLXNsaWRlSW5kZXhcIik7XG4gICAgICAgICAgIGJpZ1MuZ29Ub1NsaWRlKG5ld0luZGV4KTtcbiAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9zbGlkZXIhPSR0aHVtYlNsaWRlci4gc2xpZGVyIGlzIHRoZSByZWFsc2xpZGVyXG4gICAgZnVuY3Rpb24gY2hhbmdlUmVhbFRodW1iKHNsaWRlcixuZXdJbmRleCl7XG5cbiAgICAgdmFyICR0aHVtYlM9JGooXCIjYngtcGFnZXIxXCIpO1xuICAgICAkdGh1bWJTLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgJHRodW1iUy5maW5kKCdsaVtkYXRhLXNsaWRlSW5kZXg9XCInK25ld0luZGV4KydcIl0nKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICBpZihzbGlkZXIuZ2V0U2xpZGVDb3VudCgpLW5ld0luZGV4Pj00KXtcbiAgICAgICBzbGlkZXIuZ29Ub1NsaWRlKG5ld0luZGV4KTtcbiAgICAgfSBlbHNlIHtcbiAgICAgICBzbGlkZXIuZ29Ub1NsaWRlKHNsaWRlci5nZXRTbGlkZUNvdW50KCktNCk7XG4gICAgIH1cbiAgICB9XG4gIH0pKCk7XG59XG5cbi8vIHNsaWRlciAjMlxuaWYgKCQoIFwidWwjc2xpZGVyMlwiICkubGVuZ3RoKSB7XG4oZnVuY3Rpb24oKSB7XG4gIHZhciAkaiA9IGpRdWVyeS5ub0NvbmZsaWN0KCk7XG5cbiB2YXIgcmVhbFNsaWRlcj0gJGooXCJ1bCNzbGlkZXIyXCIpLmJ4U2xpZGVyKHtcbiAgICAgICBzcGVlZDozMDAsXG4gICAgICAgcGFnZXI6ZmFsc2UsXG4gICAgICAgbmV4dFRleHQ6JycsXG4gICAgICAgcHJldlRleHQ6JycsXG4gICAgICAgaW5maW5pdGVMb29wOmZhbHNlLFxuICAgICAgIGhpZGVDb250cm9sT25FbmQ6dHJ1ZSxcbiAgICAgICAgY29udHJvbHM6IGZhbHNlLFxuICAgICAgLy8gIG9uU2xpZGVCZWZvcmU6ZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KXtcbiAgICAgIC8vICAgIGNoYW5nZVJlYWxUaHVtYihyZWFsVGh1bWJTbGlkZXIsbmV3SW5kZXgpO1xuICAgICAgIC8vXG4gICAgICAvLyAgfVxuXG4gICAgIH0pO1xuXG5cbiAgICAgdmFyIHJlYWxUaHVtYlNsaWRlcj0kaihcInVsI2J4LXBhZ2VyMlwiKS5ieFNsaWRlcih7XG4gICAgICAgbWluU2xpZGVzOiAyLFxuICAgICAgIG1heFNsaWRlczogMyxcbiAgICAgICBzbGlkZVdpZHRoOiA4OCxcbiAgICAgICBzbGlkZU1hcmdpbjogMzAsXG4gICAgICAgbW92ZVNsaWRlczogMSxcbiAgICAgICBwYWdlcjpmYWxzZSxcbiAgICAgICBzcGVlZDozMDAsXG4gICAgICAgaW5maW5pdGVMb29wOmZhbHNlLFxuICAgICAgIGhpZGVDb250cm9sT25FbmQ6dHJ1ZSxcbiAgICAgICBuZXh0VGV4dDonPHNwYW4+PC9zcGFuPicsXG4gICAgICAgcHJldlRleHQ6JzxzcGFuPjwvc3Bhbj4nLFxuXG4gICAgICAgcHJldlNlbGVjdG9yOignLnNsaWRlci1wcmV2JyksXG4gICAgICAgbmV4dFNlbGVjdG9yOignLnNsaWRlci1uZXh0JyksXG4gICAgICAgb25TbGlkZUJlZm9yZTpmdW5jdGlvbigkc2xpZGVFbGVtZW50LCBvbGRJbmRleCwgbmV3SW5kZXgpe1xuICAgICAgICAgLyokaihcIiNzbGlkZXJUaHVtYlJlYWwgdWwgLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICRzbGlkZUVsZW1lbnQuYWRkQ2xhc3MoXCJhY3RpdmVcIik7ICovXG5cbiAgICAgICB9XG4gICAgIH0pO1xuXG4gICAgIGxpbmtSZWFsU2xpZGVycyhyZWFsU2xpZGVyLHJlYWxUaHVtYlNsaWRlcik7XG5cbiAgICAvLyAgaWYoJGooXCIjYngtcGFnZXIxIGxpXCIpLmxlbmd0aDw1KXtcbiAgICAvLyAgICAkaihcIiNieC1wYWdlcjEgLmJ4LW5leHRcIikuaGlkZSgpO1xuICAgIC8vICB9XG5cbiAgICAvLyBzaW5jcm9uaXp6YSBzbGlkZXJzIHJlYWxpenphemlvbmlcbiAgZnVuY3Rpb24gbGlua1JlYWxTbGlkZXJzKGJpZ1MsdGh1bWJTKXtcblxuICAgJGooXCJ1bCNieC1wYWdlcjJcIikub24oXCJjbGlja1wiLFwiYVwiLGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgdmFyIG5ld0luZGV4PSRqKHRoaXMpLnBhcmVudCgpLmF0dHIoXCJkYXRhLXNsaWRlSW5kZXhcIik7XG4gICAgICAgICBiaWdTLmdvVG9TbGlkZShuZXdJbmRleCk7XG4gICB9KTtcbiAgfVxuXG4gIC8vc2xpZGVyIT0kdGh1bWJTbGlkZXIuIHNsaWRlciBpcyB0aGUgcmVhbHNsaWRlclxuICBmdW5jdGlvbiBjaGFuZ2VSZWFsVGh1bWIoc2xpZGVyLG5ld0luZGV4KXtcblxuICAgdmFyICR0aHVtYlM9JGooXCIjYngtcGFnZXIyXCIpO1xuICAgJHRodW1iUy5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAkdGh1bWJTLmZpbmQoJ2xpW2RhdGEtc2xpZGVJbmRleD1cIicrbmV3SW5kZXgrJ1wiXScpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICBpZihzbGlkZXIuZ2V0U2xpZGVDb3VudCgpLW5ld0luZGV4Pj00KSB7XG4gICAgIHNsaWRlci5nb1RvU2xpZGUobmV3SW5kZXgpO1xuICAgfSBlbHNlIHtcbiAgICAgc2xpZGVyLmdvVG9TbGlkZShzbGlkZXIuZ2V0U2xpZGVDb3VudCgpLTQpO1xuICAgfVxuXG5cblxuICB9XG59KSgpO1xufSAvLyBFT0YgaWZcblxuLy8gaG9tZSBzbGlkZXJcbmlmICgkKCBcIiNzbGlkZXItaG9tZVwiICkubGVuZ3RoKSB7XG4gICQoJyNzbGlkZXItaG9tZScpLmJ4U2xpZGVyKHtcbiAgICBzcGVlZDoxMDAwLFxuICAgIC8vIHBhdXNlOjIwMCxcbiAgICAvLyBhdXRvOnRydWUsXG4gICAgcGFnZXI6dHJ1ZSxcbiAgICAvLyBlYXNpbmc6ICdzd2luZycsXG4gICAgbW9kZTonZmFkZScsXG4gICAgbmV4dFRleHQ6JycsXG4gICAgcHJldlRleHQ6JycsXG4gICAgcHJldlNlbGVjdG9yOignLm5leHRlbmQtYXJyb3ctcHJldmlvdXMnKSxcbiAgICBuZXh0U2VsZWN0b3I6KCcubmV4dGVuZC1hcnJvdy1uZXh0JyksXG4gICAgaW5maW5pdGVMb29wOnRydWUsXG4gICAgcGFnZXJDdXN0b206IHRydWUsXG4gICAgb25TbGlkZXJMb2FkOiBmdW5jdGlvbigpe1xuICAgICAgJCgnLmltZy1pdGVtJykuZGVsYXkoNDAwKS5hbmltYXRlKHtcbiAgICAgICAgJ2xlZnQnOiAnKz00NTAnLFxuICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgIH0sIDEyMDApO1xuXG4gICAgICAkKCcuc2xpZGUtY29udGVudCcpLmFuaW1hdGUoe1xuICAgICAgICAndG9wJzogJzUwJScsXG4gICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgfSwgMTIwMCk7XG5cbiAgICAgICQoJy5zbGlkZS1idG4tb3V0ZXInKS5kZWxheSg5MDApLmFuaW1hdGUoe1xuICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgIH0sIDgwMCk7XG5cbiAgICAgIC8vICQoJy5idG4tc2xpZGUnKS5kZWxheSgxMDAwKS5hbmltYXRlKHtcbiAgICAgIC8vICAgJ29wYWNpdHknOiAxXG4gICAgICAvLyB9LCAxMjAwKTtcbiAgICB9LFxuICAgIG9uU2xpZGVBZnRlcjogZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KXtcbiAgICAgICQoJy5pbWctaXRlbScpLmRlbGF5KDQwMCkuYW5pbWF0ZSh7XG4gICAgICAgICdsZWZ0JzogJys9NDUwJyxcbiAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICB9LCAxMjAwKTtcblxuICAgICAgJCgnLnNsaWRlLWNvbnRlbnQnKS5hbmltYXRlKHtcbiAgICAgICAgJ3RvcCc6ICc1MCUnLFxuICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgIH0sIDEyMDApO1xuXG4gICAgICAkKCcuc2xpZGUtYnRuLW91dGVyJykuZGVsYXkoOTAwKS5hbmltYXRlKHtcbiAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICB9LCA4MDApO1xuXG4gICAgICAvLyAkKCcuc2xpZGUtYnRuLW91dGVyJykuZGVsYXkoMTAwMCkuYW5pbWF0ZSh7XG4gICAgICAvLyAgICdvcGFjaXR5JzogMVxuICAgICAgLy8gfSwgMTIwMCk7XG4gICAgfSxcbiAgICBvblNsaWRlQmVmb3JlOiBmdW5jdGlvbigkc2xpZGVFbGVtZW50LCBvbGRJbmRleCwgbmV3SW5kZXgpe1xuICAgICAgLy8gaGlkaW5nIGVsZW1lbnRzIGJlZm9yZSByZWJhc2VcbiAgICAgICQoJy5pbWctaXRlbScpLmFuaW1hdGUoe1xuICAgICAgICAnb3BhY2l0eSc6ICcwJ1xuICAgICAgfSwgNTAwKTtcblxuICAgICAgJCgnLnNsaWRlLWNvbnRlbnQnKS5hbmltYXRlKHtcbiAgICAgICAgJ29wYWNpdHknOiAwXG4gICAgICB9LCA1MDApO1xuXG4gICAgICAkKCcuc2xpZGUtYnRuLW91dGVyJykuYW5pbWF0ZSh7XG4gICAgICAgICdvcGFjaXR5JzogMFxuICAgICAgfSwgNTAwKTtcblxuICAgICAgLy8gY2hhbmdpbmcgcGFyYW1ldGVyc1xuICAgICAgJCgnLmltZy1pdGVtJykuYW5pbWF0ZSh7XG4gICAgICAgICdsZWZ0JzogJy09NDUwJ1xuICAgICAgfSwgNTApO1xuXG4gICAgICAkKCcuc2xpZGUtY29udGVudCcpLmFuaW1hdGUoe1xuICAgICAgICAndG9wJzogJzI1JSdcbiAgICAgIH0sIDUwKTtcblxuICAgICAgLy8gJCgnLnNsaWRlLWJ0bi1vdXRlcicpLmFuaW1hdGUoe1xuICAgICAgLy8gICAndG9wJzogJzY3JSdcbiAgICAgIC8vIH0sIDUwKTtcblxuICAgICAgLy8gJCgnLnNsaWRlLWJ0bi1vdXRlcicpLmFuaW1hdGUoe1xuICAgICAgLy8gICAnb3BhY2l0eSc6IDBcbiAgICAgIC8vIH0sIDUwMCk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gaG9tZSBzbGlkZXJcbihmdW5jdGlvbigkKSB7XG4gICQoJy5ob21lLXNsaWRlcicpLmhvdmVyKGZ1bmN0aW9uKCkge1xuXG4gICAgY2xlYXJUaW1lb3V0KCQuZGF0YSh0aGlzLCAndGltZXInKSk7XG4gICAgJCgnLm5leHRlbmQtYXJyb3cnKS5zdG9wKHRydWUsIHRydWUpLmZhZGVUb2dnbGUoIDMwMCApO1xuICB9KTtcbn0pKGpRdWVyeSk7XG4vLyBFT0YgaG9tZSBzbGlkZXJcbi8vIEVPRiBob21lIHNsaWRlclxuXG5cblxuXG5cblxuXG5cbi8vIEVPRiBieCBzbGlkZXJcblxuXG4gIC8vIGZhcSB0b2dnbGUgcGFnZVxuXG5pZiAoJCggXCIuZmFxLWl0ZW0tdGl0bGVcIiApLmxlbmd0aCkge1xuICAkKCBcIi5mYXEtaXRlbS10aXRsZVwiICkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5zaWJsaW5ncygnLmZhcS1pdGVtLWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICQodGhpcykucGFyZW50KCcuanNGYXFJdGVtJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcblxuICAkKCcucHJvZHVjdHMtbmF2LW1lbnUnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICQoJy5qc1Byb2RNZW51Q29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4gICAgJCgnLmpzQ29sdW1uVGl0bGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIH0pO1xufVxuXG4gIC8vIEVPRiBmYXEgdG9nZ2xlIHBhZ2VcblxuLy8gdG9nZ2xlIGRvY3VtZW50YXRpb24tZ3JpZCB0YWJsZXRcblxuaWYgKCAkKHdpbmRvdykud2lkdGgoKSA8IDEyMDApIHtcbiAgaWYgKCQoIFwiLnBhZ2UtZG9jdW1lbnRhdGlvbi1ncmlkIC5qc0NvbHVtblRpdGxlXCIgKS5sZW5ndGgpIHtcbiAgICAkKCBcIi5wYWdlLWRvY3VtZW50YXRpb24tZ3JpZCAuanNDb2x1bW5UaXRsZVwiICkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAkKCcucHJvZHVjdHMtbmF2LW1lbnUgLnByb2R1Y3RzLW5hdi1jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudSAuY29sdW1uLXRpdGxlLmpzQ29sdW1uVGl0bGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAvLyAkKHRoaXMpLnBhcmVudCgnLmpzRmFxSXRlbScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBFT0YgdG9nZ2xlIGRvY3VtZW50YXRpb24tZ3JpZCB0YWJsZXRcblxuLy8gdG9nZ2xlIHByb2R1Y3QtZ3JpZCB0YWJsZXRcblxuaWYgKCAkKHdpbmRvdykud2lkdGgoKSA8IDEyMDApIHtcbiAgaWYgKCQoIFwiLnBhZ2UtcHJvZHVjdC1ncmlkIC5qc0NvbHVtblRpdGxlXCIgKS5sZW5ndGgpIHtcbiAgICAkKCBcIi5wYWdlLXByb2R1Y3QtZ3JpZCAuanNDb2x1bW5UaXRsZVwiICkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAkKCcucHJvZHVjdHMtbmF2LW1lbnUgLnByb2R1Y3RzLW5hdi1jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudSAuY29sdW1uLXRpdGxlLmpzQ29sdW1uVGl0bGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAvLyAkKHRoaXMpLnBhcmVudCgnLmpzRmFxSXRlbScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBFT0YgdG9nZ2xlIHByb2R1Y3QtZ3JpZCB0YWJsZXRcblxuXG4vLyB0b2dnbGUgc29sdXRpb25zIHRhYmxldFxuXG5pZiAoICQod2luZG93KS53aWR0aCgpIDwgMTIwMCkge1xuICBpZiAoJCggXCIucGFnZS1zb2x1dGlvbnMgLmpzQ29sdW1uVGl0bGVcIiApLmxlbmd0aCkge1xuICAgICQoIFwiLnBhZ2Utc29sdXRpb25zIC5qc0NvbHVtblRpdGxlXCIgKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudSAucHJvZHVjdHMtbmF2LWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgJCgnLnByb2R1Y3RzLW5hdi1tZW51IC5jb2x1bW4tdGl0bGUuanNDb2x1bW5UaXRsZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIC8vICQodGhpcykucGFyZW50KCcuanNGYXFJdGVtJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIEVPRiB0b2dnbGUgc29sdXRpb25zIHRhYmxldFxuXG5cbiAgLy8gYnVyZ2VyXG5cbiAgLy8gYnVyZ2VyIGFuaW1hdGlvbiBpdHNlbGY6XG4kKCdhLmJ1cmdlci1tZW51LCAubWVudS1vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgJCgnLmJ1cmdlci1saW5rJykudG9nZ2xlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xuICAkKCcubWVudS1vdmVybGF5JykuZmFkZVRvZ2dsZSgyMDAsICdsaW5lYXInKTtcbiAgJCgnLm1haW4tbmF2Jykuc2xpZGVUb2dnbGUoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbn0pO1xuXG4kKCcucmVxdWVzdC1jYWxsYmFjay1uYXYnKS5jbGljayhmdW5jdGlvbigpe1xuICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVJbiggMzAwICk7XG4gICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZUluKCAzMDAgKTtcblxuICAvLyBoaWRlIG1lbnUgdG9nZ2xlIGFuZCBjb252ZXJ0IHRvIGJ1cmdlclxuICAkKCcuYnVyZ2VyLWxpbmsnKS5yZW1vdmVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4gICQoJy5tZW51LW92ZXJsYXknKS5mYWRlT3V0KDIwMCwgJ2xpbmVhcicpO1xuICAkKCcubWFpbi1uYXYnKS5zbGlkZVVwKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG59KTtcblxuXG4gICAgc2hvd01haW5Nb2RhbCgpO1xuICAgIGZ1bmN0aW9uIHNob3dNYWluTW9kYWwoKXtcbiAgICAgICQoJy5yZXF1ZXN0LWNhbGxiYWNrJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlSW4oIDMwMCApO1xuICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVJbiggMzAwICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZU1haW5Nb2RhbCgpO1xuICAgIGZ1bmN0aW9uIGNsb3NlTWFpbk1vZGFsKCl7XG4gICAgICAkKCcubW9kYWwtY29udGVudC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZU91dCggMzAwICk7XG4gICAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCggMzAwICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBoaWRlTWFpbk92ZXJsYXkoKTtcbiAgICBmdW5jdGlvbiBoaWRlTWFpbk92ZXJsYXkoKXtcbiAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrRm9ybVZhbHVlcygpO1xuICAgIGZ1bmN0aW9uIGNoZWNrRm9ybVZhbHVlcygpe1xuICAgICAgJCgnLmNhbGxiYWNrLWZvcm0nKS5zdWJtaXQoZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgICAgICBpZiAoISgkKCdbbmFtZT1sb2dpbl0nKS52YWwoKSkgfHwgISgkKCdbbmFtZT1waG9uZV0nKS52YWwoKSkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkKCdodG1sIGJvZHknKS5vbigna2V5dXAnLCBmdW5jdGlvbihlKXtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVPdXQoIDMwMCApO1xuICAgICAgICAgICQoJy5idXJnZXItbGluaycpLnJlbW92ZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbiAgICAgICAgICAkKCcubWVudS1vdmVybGF5JykuZmFkZU91dCgyMDAsICdsaW5lYXInKTtcbiAgICAgICAgICBpZiAoICQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgICAkKCcubWFpbi1uYXYnKS5zbGlkZVVwKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfSk7XG4gIC8vIEVPRiBpbmRleCBtb2RhbCBjb250ZW50XG5cblxuICAvLyBkcm9wRG93biBtZW51XG4gIChmdW5jdGlvbigpIHtcbiAgICBpZiAoICQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XG4gICAgICAkKCAnLmRyb3Bkb3duJyApLm1vdXNlZW50ZXIoXG4gICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCQuZGF0YSh0aGlzLCAndGltZXInKSk7XG5cbiAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZURvd24oMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgKTtcbiAgICAgICQoICcuZHJvcGRvd24nICkubW91c2VsZWF2ZShcbiAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJC5kYXRhKHRoaXMsICd0aW1lcicsIHNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc3ViLW1lbnUnKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlVXAoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9LCB0aGlzKSwgMjAwKSk7XG5cbiAgICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfSkoKTtcbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNzEzNTEzL2pxdWVyeS1kcm9wZG93bi1tZW51LXVzaW5nLXNsaWRldXAtYW5kLXNsaWRlZG93bi1vbi1ob3Zlci1pcy1qdW1weVxuICAvLyBFT0YgZHJvcERvd24gbWVudVxuXG5cblxuICAvLyBmb290ZXItbmF2IHRleHQgY2hhbmdlXG4gIChmdW5jdGlvbigpIHtcbiAgICAgLy8geW91ciBwYWdlIGluaXRpYWxpemF0aW9uIGNvZGUgaGVyZVxuICAgICAvLyB0aGUgRE9NIHdpbGwgYmUgYXZhaWxhYmxlIGhlcmVcblxuICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xuICAgICBcdGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2N3B4KVwiKS5tYXRjaGVzKSB7XG4gICAgIFx0XHR2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4gICAgIFx0XHQkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIHN0cmluZyApO1xuICAgICBcdH0gZWxzZSB7XG4gICAgICAgIHZhciBvcmlnaW4gPSAn0KLQtdGF0L/QvtC00LTQtdGA0LbQutCwJztcbiAgICAgICAgJCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBvcmlnaW4gKTtcbiAgICAgIH1cbiAgICAgfSk7XG5cblxuICB9KSgpO1xuXG4gIChmdW5jdGlvbigpIHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcykge1xuICAgICAgdmFyIHN0cmluZyA9ICfQl9Cw0LrQsNC30LDRgtGMINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjic7XG4gICAgICAkKCcucGFnZS1kb2N1bWVudGF0aW9uIC5idG4tZm9ybSwgLnBhZ2UtcHJvZHVjdC1kZXNjIC5idG4tZm9ybScpLnRleHQoIHN0cmluZyApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgb3JpZ2luID0gJ9CX0LDQutCw0LfQsNGC0Ywg0LHQtdGB0L/Qu9Cw0YLQvdGD0Y4g0LrQvtC90YHRg9C70YzRgtCw0YbQuNGOJztcbiAgICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24gLmJ0bi1mb3JtLCAucGFnZS1wcm9kdWN0LWRlc2MgLmJ0bi1mb3JtJykudGV4dCggb3JpZ2luICk7XG4gICAgfVxuICB9KSgpO1xuXG4gIChmdW5jdGlvbigpIHtcbiAgICAvLyBwcm9kdWN0LWRlc2MgcGFnZVxuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2N3B4KVwiKS5tYXRjaGVzKSB7XG4gICAgICB2YXIgc3RyaW5nID0gJ9CR0LXRgdC/0LvQsNGC0L3QsNGPINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjyc7XG4gICAgICAkKCcucGFnZS1wcm9kdWN0LWRlc2MgLmJ0bi1kZXNjJykudGV4dCggc3RyaW5nICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvcmlnaW4gPSAn0JfQsNC60LDQt9Cw0YLRjCDQsdC10YHQv9C70LDRgtC90YPRjiDQutC+0L3RgdGD0LvRjNGC0LDRhtC40Y4nO1xuICAgICAgJCgnLnBhZ2UtcHJvZHVjdC1kZXNjIC5idG4tZGVzYycpLnRleHQoIG9yaWdpbiApO1xuICAgIH1cbiAgfSkoKTtcblxuXG4gIChmdW5jdGlvbigpIHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMTk5cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgdmFyIHN0cmluZyA9ICfQktGL0LHQtdGA0LjRgtC1INC60LDRgtC10LPQvtGA0LjRjic7XG4gICAgICQoJy5wYWdlLXNvbHV0aW9ucyAucHJvZHVjdHMtbmF2LW1lbnUgLmNvbHVtbi10aXRsZScpLnRleHQoIHN0cmluZyApO1xuICAgIH0gZWxzZSB7XG4gICAgIHZhciBvcmlnaW4gPSAn0JrQsNGC0LXQs9C+0YDQuNC4JztcbiAgICAgJCgnLnBhZ2Utc29sdXRpb25zIC5wcm9kdWN0cy1uYXYtbWVudSAuY29sdW1uLXRpdGxlJykudGV4dCggb3JpZ2luICk7XG4gICAgfVxuICB9KSgpO1xuXG4gIC8vIGRvY3VtZW50YXRpb24tZ3JpZCB0aXRsZVxuICAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTE5OXB4KVwiKS5tYXRjaGVzKSB7XG4gICAgIHZhciBzdHJpbmcgPSAn0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPJztcbiAgICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbi1ncmlkIC5wYWdlLXRpdGxlIGgxJykudGV4dCggc3RyaW5nICk7XG4gICAgfSBlbHNlIHtcbiAgICAgdmFyIG9yaWdpbiA9ICfQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0LTQu9GPINC+0LHQvtGA0YPQtNC+0LLQsNC90LjRjyc7XG4gICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24tZ3JpZCAucGFnZS10aXRsZSBoMScpLnRleHQoIG9yaWdpbiApO1xuICAgIH1cbiAgfSkoKTtcblxuICAvLyBkb2N1bWVudGF0aW9uLWdyaWQgdGl0bGVcbiAgKGZ1bmN0aW9uKCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDExOTlweClcIikubWF0Y2hlcykge1xuICAgICB2YXIgc3RyaW5nID0gJ9CS0YvQsdC10YDQuNGC0LUg0LrQsNGC0LXQs9C+0YDQuNGOJztcbiAgICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbi1ncmlkIC5jb2x1bW4tbGVmdCAuY29sdW1uLXRpdGxlJykudGV4dCggc3RyaW5nICk7XG4gICAgfSBlbHNlIHtcbiAgICAgdmFyIG9yaWdpbiA9ICfQmtCw0YLQtdCz0L7RgNC40LgnO1xuICAgICAkKCcucGFnZS1kb2N1bWVudGF0aW9uLWdyaWQgLmNvbHVtbi1sZWZ0IC5jb2x1bW4tdGl0bGUnKS50ZXh0KCBvcmlnaW4gKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzEyMjMzNi9qYXZhc2NyaXB0LXJlc2l6ZS1ldmVudC1ub3Qtd29ya2luZz9ub3JlZGlyZWN0PTEmbHE9MVxuXG4gIChmdW5jdGlvbigpIHtcbiAgICBpZiAoICQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAvL0FkZCB5b3VyIGphdmFzY3JpcHQgZm9yIGxhcmdlIHNjcmVlbnMgaGVyZVxuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4gICAgICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggc3RyaW5nICk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgfSkoKTtcblxuICAvLyBodHRwOi8vd3d3LmNvYWxtYXJjaC5jb20vYmxvZy9ob3ctdG8tZXhlY3V0ZS1qYXZhc2NyaXB0LWJhc2VkLW9uLXNjcmVlbi1zaXplLXVzaW5nLWpxdWVyeVxuXG4gIC8vIEVPRiBmb290ZXItbmF2IHRleHQgY2hhbmdlXG5cblxuXG4gIC8vIHBhcmFsbGF4XG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgXCIpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJUcmlkZW50XCIpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJFZGdlXCIpID4gMCxcbiAgICAgIHdTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAvLyBwYXJhbGxheCBlZmZlY3QgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiBwYXJhbGxheChwcmx4QmcsIHBybHhDb250YWluZXIsIGZhY3Rvcil7XG4gICAgICBpZiAoaXNJRSkge1xuICAgICAgJChwcmx4QmcpLmNzcyh7XG4gICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwcHgpJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZigod1Njcm9sbCArICQod2luZG93KS5oZWlnaHQoKSkgPj0gJChwcmx4QmcpLm9mZnNldCgpLnRvcCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRydWUhXCIpO1xuICAgICAgJChwcmx4QmcpLmNzcyh7XG4gICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgnICsgKCgkKHBybHhDb250YWluZXIpLm9mZnNldCgpLnRvcCAtIHdTY3JvbGwpIC8gJCh3aW5kb3cpLmhlaWdodCgpICogMTAwKSAqIGZhY3RvciArJyUpJ1xuICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgICAgd1Njcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgIGlmKCQoJy5wYXJhbGxheC1pbmRleCcpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbGxheCgnLmJvdHRvbS1saW5lJywgJy5wYXJhbGxheC1pbmRleCcsIDAuNik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pKCk7XG4gIC8vIEVPRnBhcmFsbGF4XG5cblxuXG5cblxuXG5cblxuICAvLyB0YWJzIG1vZHVsZVxuICAoZnVuY3Rpb24oKSB7XG4gICAgJCgnLmpzLXRhYnMgbGlbZGF0YS1pZF0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpeyByZXR1cm47IH1cblxuICAgICAgJCgnIycgKyAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSkuZmFkZUluKDApLnNpYmxpbmdzKCkuZmFkZU91dCgwKTtcbiAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfSkoKTtcblxuICAvLyB0YWJzIGZvciBtb2JpbGVcbiAgaWYgKCAkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgIChmdW5jdGlvbigkKSB7XG4gICAgICAgICAgIC8vIFlvdSBwYXNzLWluIGpRdWVyeSBhbmQgdGhlbiBhbGlhcyBpdCB3aXRoIHRoZSAkLXNpZ25cbiAgICAgICAgICAgLy8gU28geW91ciBpbnRlcm5hbCBjb2RlIGRvZXNuJ3QgY2hhbmdlXG5cbiAgICAgICAgICAkKCcuZGVzYy1mdWxsLXRpdGxlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAkKCcjbWVudV90YWJzIC5kZXNjLWZ1bGwtdGl0bGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgJCgnI21lbnVfdGFicyAuZGVzYy1mdWxsLXRpdGxlOm5vdCguZGVzYy1mdWxsLXRpdGxlLmFjdGl2ZSknKS5hZGRDbGFzcygnb3ZlcnRhYmJlZCcpO1xuICAgICAgICAgICAgICQoJyNtZW51X3RhYnMgLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdvdmVydGFiYmVkJykuY3NzKCAnd2lkdGgnLCdhdXRvJyApO1xuICAgICAgICAgICAgIHZhciBub25BY3RpdmVUYWJzQ29tbW9uVyA9ICQoJyNtZW51X3RhYnMgLmRlc2MtbmF2Lm1vZHVsZS1oZWFkZXInKS53aWR0aCgpIC0gJCgnI21lbnVfdGFicyAuZGVzYy1mdWxsLXRpdGxlLmFjdGl2ZScpLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICAgICB2YXIgVzRub25BY3RpdmVUYWIgPSBub25BY3RpdmVUYWJzQ29tbW9uVyAvIDIgLSAxO1xuICAgICAgICAgICAgICQoJyNtZW51X3RhYnMgLmRlc2MtZnVsbC10aXRsZTpub3QoLmRlc2MtZnVsbC10aXRsZS5hY3RpdmUpJykub3V0ZXJXaWR0aCggVzRub25BY3RpdmVUYWIgKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICQoJyNtZW51X3RhYnMgLmRlc2MtZnVsbC10aXRsZTpmaXJzdC1jaGlsZCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAkKCcjbWVudV90YWJzIC5kZXNjLWZ1bGwtdGl0bGU6bm90KC5kZXNjLWZ1bGwtdGl0bGUuYWN0aXZlKScpLmFkZENsYXNzKCdvdmVydGFiYmVkJyk7XG4gICAgICAgICAgJCgnI21lbnVfdGFicyAuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ292ZXJ0YWJiZWQnKS5jc3MoICd3aWR0aCcsJ2F1dG8nICk7XG4gICAgICAgICAgdmFyIG5vbkFjdGl2ZVRhYnNDb21tb25XID0gJCgnI21lbnVfdGFicyAuZGVzYy1uYXYubW9kdWxlLWhlYWRlcicpLndpZHRoKCkgLSAkKCcjbWVudV90YWJzIC5kZXNjLWZ1bGwtdGl0bGUuYWN0aXZlJykub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBXNG5vbkFjdGl2ZVRhYiA9IG5vbkFjdGl2ZVRhYnNDb21tb25XIC8gMiAtIDE7XG4gICAgICAgICAgJCgnI21lbnVfdGFicyAuZGVzYy1mdWxsLXRpdGxlOm5vdCguZGVzYy1mdWxsLXRpdGxlLmFjdGl2ZSknKS5vdXRlcldpZHRoKCBXNG5vbkFjdGl2ZVRhYiApO1xuXG4gICAgfSkoalF1ZXJ5KTtcbiAgfVxuXG5cbi8vIEVPRnRhYnMgbW9kdWxlXG5cblxuLy8gYnJlYWRjcnVtYnMgLi4uXG5cbmlmICggJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgKGZ1bmN0aW9uKCQpIHtcbiAgICAgICAgLy8gWW91IHBhc3MtaW4galF1ZXJ5IGFuZCB0aGVuIGFsaWFzIGl0IHdpdGggdGhlICQtc2lnblxuICAgICAgICAvLyBTbyB5b3VyIGludGVybmFsIGNvZGUgZG9lc24ndCBjaGFuZ2VcbiAgICAgICAgdmFyIGNvdW50ID0gJCgnLmJyZWFkY3J1bWJzIGxpJykubGVuZ3RoO1xuICAgICAgICBpZiAoY291bnQgPj0gMykge1xuICAgICAgICAgICQoJy5icmVhZGNydW1icyBsaTpudGgtY2hpbGQobisyKTpub3QoOmxhc3QtY2hpbGQpIGEnKS5odG1sKCcuLi4nKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcuYnJlYWRjcnVtYnMgbGk6bGFzdC1jaGlsZCBhJykuYWRkQ2xhc3MoJ292ZXJjcnVtYnMnKTtcbiAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MjkxMTUxL2pxdWVyeS1jb3VudC1jaGlsZC1lbGVtZW50c1xuXG4gICAgICAgIC8vIGNvdW50aW5nIHdpZHRoIGZvciB3aG9sZSB2cmVhZGNydW1ic1xuICAgICAgICB2YXIgcGFyZW50ID0gJCgnLmJyZWFkY3J1bWJzJykud2lkdGgoKTtcbiAgICAgICAgdmFyIGxhc3QgPSAkKCcuYnJlYWRjcnVtYnMgbGk6bm90KDpsYXN0LWNoaWxkKScpLm91dGVyV2lkdGgoKTtcblxuICAgICAgICB2YXIgdyA9IDA7XG5cbiAgICAgICAgalF1ZXJ5KCcuYnJlYWRjcnVtYnMgbGk6bGFzdC1jaGlsZCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICBqUXVlcnkodGhpcykucHJldkFsbCgpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHcgKz0gJCh0aGlzKS53aWR0aCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbmV3V2lkdGhGb3JMYXN0RWwgPSBwYXJlbnQgLSB3IC0gMTA7XG5cbiAgICAgICAgJCgnLmJyZWFkY3J1bWJzIGxpOmxhc3QtY2hpbGQnKS53aWR0aCggbmV3V2lkdGhGb3JMYXN0RWwgKTtcblxuICB9KShqUXVlcnkpO1xufVxuXG4vLyBFT0YgYnJlYWRjcnVtYnMgLi4uXG5cblxuXG4vLyBmb3JtIHZhbGlkYXRpb25cblxuXG4kKCAnLmNhbGxiYWNrJyApLnN1Ym1pdChmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cdHZhciBuYW1lICA9ICQoICcuY2FsbGJhY2sgW25hbWU9bG9naW5dJyApLFxuXHRcdHBob25lID0gJCggJy5jYWxsYmFjayBbbmFtZT1waG9uZV0nICksXG5cdFx0ZW1haWwgPSAkKCAnLmNhbGxiYWNrIFtuYW1lPWVtYWlsXScgKTtcblxuXHRpZiAoIG5hbWUudmFsKCkgPT09ICcnICkge1xuXHRcdG5hbWUucGFyZW50cygnLnVzZXItZmllbGQnKS5hZGRDbGFzcyggJ2Vycm9yJyApO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuICBpZiAoICEgdmFsaWRhdGVFbWFpbCggZW1haWwudmFsKCkpICkge1xuXHRcdGVtYWlsLnBhcmVudHMoJy5waG9uZS1maWVsZCcpLmFkZENsYXNzKCAnZXJyb3InICk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cbiAgaWYgKCBwaG9uZS52YWwoKSA9PT0gJycgKSB7XG5cdFx0cGhvbmUucGFyZW50cygnLmVtYWlsLWZpZWxkJykuYWRkQ2xhc3MoICdlcnJvcicgKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcblxuXHRmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XG5cdFx0dmFyIHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcblx0XHRyZXR1cm4gcmUudGVzdChlbWFpbCk7XG5cdH1cbn0pO1xuXG4vLyBcImluc3RhbnRcIi1jaGVja1xuJCggJy5jYWxsYmFjayBpbnB1dFt0eXBlPVwiZW1haWxcIl0nICkuYmx1cihmdW5jdGlvbigpIHtcblx0aWYoICEgdmFsaWRhdGVFbWFpbCggJCh0aGlzKS52YWwoKSkgKXtcblx0XHQkKHRoaXMpLmFkZENsYXNzKCAnZXJyb3InICk7XG5cdH0gZWxzZSB7XG5cdFx0JCh0aGlzKS5yZW1vdmVDbGFzcyggJ2Vycm9yJyApO1xuXHR9XG59KTtcbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcblx0dmFyIHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcblx0cmV0dXJuIHJlLnRlc3QoZW1haWwpO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBFT0YgZm9ybSB2YWxpZGF0aW9uXG5cblxuXG5cbn0pOyAvLyBFT0YgZG9jdW1lbnQucmVhZHkgTUFJTlxuIl19
