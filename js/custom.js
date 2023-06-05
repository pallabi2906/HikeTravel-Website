$(document).ready(function(){
	


$(".photo a").fancybox();

//SLICK-JS-banner section
  $('.banner-backgroundimages').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    autoplayspeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseonhover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //banner-second-slider

  $('.banner-second-slider').slick({
    infinite: true,
    autoplay: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    autoplayspeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseonhover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //mobile-menu
  $(".menubtn").click(function() {
    $('.menuholder').addClass("menuholderadd");
});
  $(".cross").click(function() {
    $('.menuholder').removeClass("menuholderadd");
});

  $(".hashchild .newadd").click(function() {
    $(this).parents('.hashchild').children('.submenu').slideToggle();
});


    //wow
  new WOW().init();

  
  // team slider
$('.card-slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
//smooth js
$('.list').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 500); // The number here represents the speed of the scroll in milliseconds
      return false;
    }
  }
});


//parallax//
$('.para').parallax({imageSrc: 'images/banner-image-3.png'});

//mouyse-move-parallax//
document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

  //sticky-navbar
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100){  
        $('body').addClass("sticky");
      }
      else{
        $('body').removeClass("sticky");
      }
    });

    //scroll-top
    $('.header-element').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500); // The number here represents the speed of the scroll in milliseconds
          return false;
        }
      }
    });
  })
