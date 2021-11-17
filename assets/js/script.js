(function ($) {
    'use strict'
 
    $(document).ready(function() {
        // jQuery code
    
          $("[data-trigger]").on("click", function(e){
            e.preventDefault();
            e.stopPropagation();
            var offcanvas_id =  $(this).attr('data-trigger');
            $(offcanvas_id).toggleClass("show");
            $('body').toggleClass("offcanvas-active");
            $(".screen-overlay").toggleClass("show");
    
        }); 
    
    
        // Close menu when pressing ESC
        $(document).on('keydown', function(event) {
            if(event.keyCode === 27) {
               $(".offcanvas").removeClass("show");
               $("body").removeClass("overlay-active");
            }
        });
    
        $(".btn-close, .screen-overlay").click(function(e){
            $(".screen-overlay").removeClass("show");
            $(".offcanvas").removeClass("show");
            $(".listing-panel").removeClass("show");
            $("body").removeClass("offcanvas-active"); 
    
        }); 
        
    });   

    $(document).ready(function() {
        
        $(document).on('click', '.dropdown-menu', function (e) {
            e.stopPropagation();
        });
  
        // make it as accordion for smaller screens
        if ($(window).width() < 992) {
            $('.dropdown-menu a').click(function(e){
                e.preventDefault();
              if($(this).next('.submenu').length){
                  $(this).next('.submenu').toggle();
              }
              $('.dropdown').on('hide.bs.dropdown', function () {
                 $(this).find('.submenu').hide();
              })
            });
        }
        // make it as accordion for smaller screens
        if ($(window).width()) {
            $('.dropdown-menu a').click(function(e){
                e.preventDefault();
              if($(this).next('.submenu__offcenvas').length){
                  $(this).next('.submenu__offcenvas').toggle();
              }
              $('.dropdown').on('hide.bs.dropdown', function () {
                 $(this).find('.submenu__offcenvas').hide();
              })
            });
        }
        
    });

    $('.card-toggle').on('click', function () {
        $('.card-content').toggleClass('active');
    }); 
    $('.toggle-close').on('click', function () {
        $('.card-content').removeClass('active');
    });


    // Select Option
    $(document).ready(function(){
        $(".default_option").on('click', function(){
          $(this).parent().toggleClass("active"); 
        });

        $(".select_ul li").on('click', function(){
          var currentele = $(this).html();
          $(".default_option li").html(currentele);
          $(this).parents(".select_wrap").removeClass("active");   
        });  
    });
 
    // Select Option
    $(document).ready(function(){
        $(".default_option2").on('click', function(){
          $(this).parent().toggleClass("active");
        });

        $(".category-scr li").on('click', function(){
          var currentele = $(this).html();
          $(".default_option2 li").html(currentele);
          $(this).parents(".select_wrap2").removeClass("active");
        });
    });
 
    // Tabs 
    $('ul.tabs li').on('click', function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tabs-list').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
        
    });

    
 
    $('.hero-banner-slider').owlCarousel({
        loop: true,
        dots: true, 
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 700,
        nav: false,  
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1, 
                dots: true, 
                nav: false,
            },
            600:{
                items:1, 
            },
            1000:{
                items:1
            }
        }
    });  
 
    $('.cdn-shopify-slid').owlCarousel({
        loop: true,
        dots: false, 
        autoplay: true,
        autoplayTimeout: 3500,
        smartSpeed: 500,
        nav: true,  
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:3, 
            },
            600:{
                items:4, 
            },
            1000:{
                items:6
            }
        }
    });  
 
    $('.promotion-slid').owlCarousel({
        loop: true,
        dots: false, 
        margin: 20,
        autoplay: false,
        autoplayTimeout: 3500,
        smartSpeed: 500,
        nav: false,  
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsiveClass:true, 
        responsive:{
            0:{
                items:2, 
                autoplay: true,
                center: true,
                
                
            },
            600:{
                items:2, 
                autoplay: true,
                center: true,
            },
            1000:{
                items:3, 
            }
        }
    });  
 
    $('.fruits-slid').owlCarousel({
        loop: true,
        mouseDrag: false,
        dots: false, 
        margin: 20,
        autoplay: false,
        autoplayTimeout: 3500,
        smartSpeed: 500,
        nav: true,  
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:2,  
                margin: 10,
            },
            600:{
                items:3,  
            },
            1000:{
                items:4,
            },
            1200:{
                items:5,
            }
        }
    });  


    $('.deals-outlets-slid').owlCarousel({
        loop: true,
        dots: false, 
        margin: 30,
        autoplay: false,
        autoplayTimeout: 3500,
        smartSpeed: 500,
        nav: true,  
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,  
            },
            600:{
                items:1,  
            },
            1000:{
                items:2
            }
        }
    });  
     
  
    if ($('.client-say-sliders').length) { 
        $('.client-say-sliders').slick({
            dots: false,
            slidesToShow: 1,
            autoplay: false,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: { 

                  }
                },
                {
                  breakpoint: 768,
                  settings: { 
                    dots: true,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    dots: true,
                  }
                } 
            ]
        });
        setTimeout(function() {
            $('.slick-prev').prepend('<div class="prev-slick-arrow arrow-icon"><span class="fas fa-arrow-left"></span></div><div class="prev-slick-img slick-thumb-nav"><img src="/prev.jpg" class="img-responsive"></div>');
            $('.slick-next').append('<div class="next-slick-arrow arrow-icon"><span class="fas fa-arrow-right"></span></div><div class="next-slick-img slick-thumb-nav"><img src="/next.jpg" class="img-responsive"></div>');
            get_prev_slick_img();
            get_next_slick_img();
        }, 500);
    
        $('.client-say-sliders').on('click', '.slick-prev', function() {
            get_prev_slick_img();
        });
        $('.client-say-sliders').on('click', '.slick-next', function() {
            get_next_slick_img();
        });
        $('.client-say-sliders').on('swipe', function(event, slick, direction) {
            if (direction == 'left') {
                get_prev_slick_img();
            }
            else {
                get_next_slick_img();
            }
        });
        /* 
        $('.slick-dots').on('click', 'li button', function() {
            var li_no = $(this).parent('li').index();
            if ($(this).parent('li').index() > li_no) {
                get_prev_slick_img()
            }
            else {
                get_next_slick_img()
            }
        });
            */
        function get_prev_slick_img() {
            // For prev img
            var prev_slick_img = $('.slick-current').prev('.client-item').find('img').attr('src');
            $('.prev-slick-img img').attr('src', prev_slick_img);
            $('.prev-slick-img').css('background-image', 'url(' + prev_slick_img + ')');
            // For next img
            var prev_next_slick_img = $('.slick-current').next('.client-item').find('img').attr('src');
            $('.next-slick-img img').attr('src', prev_next_slick_img);
            $('.next-slick-img').css('background-image', 'url(' + prev_next_slick_img + ')');
        }
        function get_next_slick_img() {
            // For next img
            var next_slick_img = $('.slick-current').next('.client-item').find('img').attr('src');
            $('.next-slick-img img').attr('src', next_slick_img);
            $('.next-slick-img').css('background-image', 'url(' + next_slick_img + ')');
            // For prev img
            var next_prev_slick_img = $('.slick-current').prev('.client-item').find('img').attr('src');
            $('.prev-slick-img img').attr('src', next_prev_slick_img);
            $('.prev-slick-img').css('background-image', 'url(' + next_prev_slick_img + ')');
        }
            
    }

    if ($('.product-details-slider').length) {  
        $('.product-sliderOne').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button class="product-slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="product-slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
            fade: true,
            asNavFor: '.product-sliderTwo'
        });
        $('.product-sliderTwo').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.product-sliderOne',
            dots: false,
            arrows: true,
            prevArrow: '<button class="product-slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="product-slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
            centerMode: true,
            focusOnSelect: true

        });
    }
 

    // Quantity
    $(document).ready(($) => {
        $('.quantity').on('click', '.plus', function(e) {
            let $input = $(this).prev('input.qty');
            let val = parseInt($input.val());
            $input.val( val+1 ).change();
        });
 
        $('.quantity').on('click', '.minus', 
            function(e) {
            let $input = $(this).next('input.qty');
            var val = parseInt($input.val());
            if (val > 0) {
                $input.val( val-1 ).change();
            } 
        });
    });

    //active Click add
    $('.product-color-chack li').click(function(){
        $('.product-color-chack li').removeClass("active");
        $(this).addClass("active");
    }); 
    $('.product-size li').click(function(){
        $('.product-size li').removeClass("active");
        $(this).addClass("active");
    });

    
     

     /*
    ========================================
    Tabs
    ========================================
    */
   $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tabs-list').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    // product Images Zoom
    $('.product-img').imgZoom({ 
        marginLeft: 5,
        origin: 'data-origin'
    });

    $(document).ready(function(){
	
        $('#price-range-submit').show();
    
        $("#min_price,#max_price").on('change', function () {
    
          $('#price-range-submit').hide();
    
          var min_price_range = parseInt($("#min_price").val());
    
          var max_price_range = parseInt($("#max_price").val());
    
          if (min_price_range > max_price_range) {
            $('#max_price').val(min_price_range);
          }
    
          $("#slider-range").slider({
            values: [min_price_range, max_price_range]
          });
          
        });
    
    
        $("#min_price,#max_price").on("paste keyup", function () {                                        
    
          $('#price-range-submit').hide();
    
          var min_price_range = parseInt($("#min_price").val());
    
          var max_price_range = parseInt($("#max_price").val());
          
          if(min_price_range == max_price_range){
    
                max_price_range = min_price_range + 100;
                
                $("#min_price").val(min_price_range);		
                $("#max_price").val(max_price_range);
          }
    
          $("#slider-range").slider({
            values: [min_price_range, max_price_range]
          });
    
        });
    
    
        $(function () {
          $("#slider-range").slider({
            range: true,
            orientation: "horizontal",
            min: 0,
            max: 10000,
            values: [0, 10000],
            step: 100,
    
            slide: function (event, ui) {
              if (ui.values[0] == ui.values[1]) {
                  return false;
              }
              
              $("#min_price").val(ui.values[0]);
              $("#max_price").val(ui.values[1]);
            }
          });
    
          $("#min_price").val($("#slider-range").slider("values", 0));
          $("#max_price").val($("#slider-range").slider("values", 1));
    
        });
    
        $("#slider-range,#price-range-submit").click(function () {
    
          var min_price = $('#min_price').val();
          var max_price = $('#max_price').val();
    
          $("#searchResults").text("Price: " + "৳ " + min_price  + " " + "-" + " " + "৳ " + max_price );
        });
    
    });

    
    $(document).ready(function() {
        $(".set .toggle").on("click", function() {
          if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
              .siblings(".content")
              .slideUp(200);
            $(".set .toggle i")
              .removeClass("fa-chevron-up")
              .addClass("fa-chevron-down");
          } else {
            $(".set .toggle i")
              .removeClass("fa-chevron-up")
              .addClass("fa-chevron-down");
            $(this)
              .find("i")
              .removeClass("fa-chevron-down")
              .addClass("fa-chevron-up");
            $(".set .toggle").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
              .siblings(".content")
              .slideDown(200);
          }
        });
    });

    //for menu active class
    $('.filter-grid-list').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    $(".drawer-item").drawer({
		slideSpeed: 200,
		arrowIcon: "&#9660;"
	});


    $(document).ready(function(){
        var input = document.querySelector("#phone");
        window.intlTelInput(input, { 
          utilsScript: "assets/build/js/utils.js",
        });
    });

    /*---------------------------
       Menu menu-content
    ------------------------------ */

    $(".header-menu-vertical .menu-title").on("click", function (event) {
        $(".header-menu-vertical .menu-content").slideToggle(500);
    });

    $(".menu-content").each(function () {
        var $ul = $(this),
            $lis = $ul.find(".menu-item:gt(7)"),
            isExpanded = $ul.hasClass("expanded");
        $lis[isExpanded ? "show" : "hide"]();

        if ($lis.length > 0) {
            $ul.append(
                $(
                    '<li class="expand">' +
                        (isExpanded ? '<a href="javascript:;"><span><i class="fas fa-minus"></i>Close Categories</span></a>' : '<a href="javascript:;"><span><i class="fas fa-plus"></i>More Categories</span></a>') +
                        "</li>"
                ).click(function (event) {
                    var isExpanded = $ul.hasClass("expanded");
                    event.preventDefault();
                    $(this).html(isExpanded ? '<a href="javascript:;"><span><i class="fas fa-plus"></i>More Categories</span></a>' : '<a href="javascript:;"><span><i class="fas fa-minus"></i>Close Categories</span></a>');
                    $ul.toggleClass("expanded");
                    $lis.toggle(300);
                })
            );
        }
    });

  

    if ($('#countdown').length) {  
        // Flash Sales Time Countdown
        const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    
        let birthday = "dec 10, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {   
        let now = new Date().getTime(),
            distance = countDown - now; 
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    
            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
        
                headline.innerText = "Todays Flash Sales Off!";
                countdown.style.display = "none";
                content.style.display = "block";
        
                clearInterval(x);
            } 
        }, 0);
    }


    
 
})(jQuery);


