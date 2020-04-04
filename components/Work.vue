<template>
  <!--====== WORK PART START ======-->

  <section id="work" class="work-area gray-bg pt-125 pb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="section-title text-center pb-10">
            <h5 class="sub-title">Our recent works</h5>
            <h2 class="title">We’ve Done Lot’s Of Work, Let’s Check Some From Here</h2>
          </div> <!-- section -title -->
        </div>
      </div> <!-- row -->
      <div class="row">
        <div class="col-lg-12">
          <div class="work-menu text-center pt-40 pb-30">
            <ul>
              <li data-filter="*" class="active">All Works <span>06</span></li>
              <li data-filter=".design">Design <span>04</span></li>
              <li data-filter=".development">Development <span>03</span></li>
              <li data-filter=".branding">Branding <span>03</span></li>
            </ul>
          </div> <!-- work menu -->
        </div>
      </div> <!-- row -->
      <div class="row grid">
        <div class="col-lg-4 col-md-6 col-sm-6 design development">
          <div class="single-work text-center mt-30">
            <div class="work-image">
              <img src="assets/images/work/w-1.jpg" alt="Work">
              <div class="work-overlay">
                <ul class="work-icon">
                  <li><a class="image-popup" href="assets/images/work/w-1.jpg"><i class="fa fa-picture-o"></i></a></li>
                  <li><a href="#"><i class="fa fa-link"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="work-content">
              <h4 class="work-title"><a href="#">YouTube Redesign</a></h4>
              <span>Design, Branding, Logo</span>
            </div>
          </div> <!-- single work -->
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 development branding">
          <div class="single-work text-center mt-30">
            <div class="work-image">
              <img src="assets/images/work/w-2.jpg" alt="Work">
              <div class="work-overlay">
                <ul class="work-icon">
                  <li><a class="image-popup" href="assets/images/work/w-2.jpg"><i class="fa fa-picture-o"></i></a></li>
                  <li><a href="#"><i class="fa fa-link"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="work-content">
              <h4 class="work-title"><a href="#">YouTube Redesign</a></h4>
              <span>Design, Branding, Logo</span>
            </div>
          </div> <!-- single work -->
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 design">
          <div class="single-work text-center mt-30">
            <div class="work-image">
              <img src="assets/images/work/w-3.jpg" alt="Work">
              <div class="work-overlay">
                <ul class="work-icon">
                  <li><a class="image-popup" href="assets/images/work/w-3.jpg"><i class="fa fa-picture-o"></i></a></li>
                  <li><a href="#"><i class="fa fa-link"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="work-content">
              <h4 class="work-title"><a href="#">YouTube Redesign</a></h4>
              <span>Design, Branding, Logo</span>
            </div>
          </div> <!-- single work -->
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 branding design">
          <div class="single-work text-center mt-30">
            <div class="work-image">
              <img src="assets/images/work/w-4.jpg" alt="Work">
              <div class="work-overlay">
                <ul class="work-icon">
                  <li><a class="image-popup" href="assets/images/work/w-4.jpg"><i class="fa fa-picture-o"></i></a></li>
                  <li><a href="#"><i class="fa fa-link"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="work-content">
              <h4 class="work-title"><a href="#">YouTube Redesign</a></h4>
              <span>Design, Branding, Logo</span>
            </div>
          </div> <!-- single work -->
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 design">
          <div class="single-work text-center mt-30">
            <div class="work-image">
              <img src="assets/images/work/w-5.jpg" alt="Work">
              <div class="work-overlay">
                <ul class="work-icon">
                  <li><a class="image-popup" href="assets/images/work/w-5.jpg"><i class="fa fa-picture-o"></i></a></li>
                  <li><a href="#"><i class="fa fa-link"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="work-content">
              <h4 class="work-title"><a href="#">YouTube Redesign</a></h4>
              <span>Design, Branding, Logo</span>
            </div>
          </div> <!-- single work -->
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 branding development">
          <div class="single-work text-center mt-30">
            <div class="work-image">
              <img src="assets/images/work/w-6.jpg" alt="Work">
              <div class="work-overlay">
                <ul class="work-icon">
                  <li><a class="image-popup" href="assets/images/work/w-6.jpg"><i class="fa fa-picture-o"></i></a></li>
                  <li><a href="#"><i class="fa fa-link"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="work-content">
              <h4 class="work-title"><a href="#">YouTube Redesign</a></h4>
              <span>Design, Branding, Logo</span>
            </div>
          </div> <!-- single work -->
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
    <div class="work-woman">
      <img data-aos="fade-right" data-aos-duration="1000" src="assets/images/svg/work-man.svg" alt="Man">
    </div> <!-- services woman -->
  </section>

  <!--======  WORK PART ENDS ======-->
</template>

<script>
    export default {
        name: "Work",
      mounted() {

        $('.container').imagesLoaded(function () {
          var $grid = $('.grid').isotope({
            // options
            transitionDuration: '1s'
          });

          // filter items on button click
          $('.work-menu ul').on( 'click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
          });

          //for menu active class
          $('.work-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
          });
        });

        $('.image-popup').magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });

      }
    }
</script>

<style scoped>

</style>
