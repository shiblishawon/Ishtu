<template>
  <header id="home" class="header-area">
    <div class="navigation fixed-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="/">
                <h4 style="color: #fff; font-size: 28px">Ishtu</h4>
              </a>

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button> <!-- navbar-toggler -->

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active"><a class="page-scroll" href="#home">Home</a></li>
                  <li class="nav-item"><a class="page-scroll" href="#about">About</a></li>
                  <li class="nav-item"><a class="page-scroll" href="#service">Services</a></li>
                  <li class="nav-item"><a class="page-scroll" href="#work">Portfolio</a></li>
                  <li class="nav-item"><a class="page-scroll" href="#team">Team</a></li>
                  <li class="nav-item"><a class="page-scroll" href="#blog">Blog</a></li>
                  <li class="nav-item"><a class="page-scroll" href="#contact">Contact</a></li>
                </ul>
              </div> <!-- navbar collapse -->
              <div class="navbar-btn d-none d-sm-block">
                <a class="main-btn" href="#">Support</a>
              </div>
            </nav> <!-- navbar -->
          </div>
        </div> <!-- row -->
      </div> <!-- container -->
    </div> <!-- navigation -->

    <div class="header-content-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="header-content overflow-hidden">
              <h5 class="sub-title wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">Web Design, Branding, UI Design</h5>
              <h1 class="header-title wow fadeInLeft" data-wow-duration="2s" data-wow-delay="1s">We Are Making Creative Product</h1>
              <p class="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="1.8s">Lorem ipsum dolor sit ameconecteur adipisicing elit sed do eiusmod.</p>
              <a class="main-btn wow fadeInUp" data-wow-duration="2s" data-wow-delay="2s" href="#">Contact Us</a>
            </div> <!-- header content -->
          </div>
        </div> <!-- row -->
      </div> <!-- container -->
      <div class="header-banner">
        <div class="banner-svg">
          <img src="assets/images/banner/banner-full.png" alt="banner">
          <div class="banner-shape one animation1">
            <img src="assets/images/banner/shape-1.svg" alt="shape">
          </div>
          <div class="banner-shape tow animation4">
            <img src="assets/images/banner/shape-2.svg" alt="shape">
          </div>
          <div class="banner-shape three" data-aos="fade-down" data-aos-duration="1000">
            <img src="assets/images/banner/shape-3.svg" alt="shape">
          </div>
          <div class="banner-shape fore animation2">
            <img src="assets/images/banner/shape-4.svg" alt="shape">
          </div>
          <div class="banner-shape five animation3">
            <img src="assets/images/banner/shape-5.svg" alt="shape">
          </div>
          <div class="banner-shape six animation4">
            <img src="assets/images/banner/shape-6.svg" alt="shape">
          </div>
          <div class="banner-shape saven animation1">
            <img src="assets/images/banner/shape-7.svg" alt="shape">
          </div>
        </div> <!-- row -->
      </div> <!-- header banner -->
    </div> <!-- header content -->
  </header>
</template>

<script>
    export default {
        name: "Header",
      mounted() {
        $(window).on('scroll', function(event) {
          var scroll = $(window).scrollTop();
          if (scroll < 30) {
            $(".navigation").removeClass("sticky");
          } else{
            $(".navigation").addClass("sticky");
          }
        });
        var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
          var scrollbarLocation = $(this).scrollTop();

          scrollLink.each(function() {

            var sectionOffset = $(this.hash).offset().top - 90;

            if ( sectionOffset <= scrollbarLocation ) {
              $(this).parent().addClass('active');
              $(this).parent().siblings().removeClass('active');
            }
          });
        });

        $(".navbar-toggler").on('click', function() {
          $(this).toggleClass('active');
        });

        $(".navbar-nav a").on('click', function() {
          $(".navbar-toggler").removeClass('active');
        });


        //===== close navbar-collapse when a  clicked

        $(".navbar-nav a").on('click', function () {
          $(".navbar-collapse").removeClass("show");
        });

        new WOW().init();

        AOS.init();

      }
    }
</script>

<style scoped>

</style>
