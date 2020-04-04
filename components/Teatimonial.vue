<template>
  <!--====== TESTIMONIAL PART START ======-->

  <section id="testimonial" class="testimonial-area pt-125 pb-130">
    <div class="single-author-left author-one">
      <img src="assets/images/testimonial/ts-1.jpg" alt="Author">
    </div> <!-- author -->
    <div class="single-author-left author-tow">
      <img src="assets/images/testimonial/ts-2.jpg" alt="Author">
    </div> <!-- author -->
    <div class="single-author-left author-three">
      <img src="assets/images/testimonial/ts-3.jpg" alt="Author">
    </div> <!-- author -->

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section-title text-center pb-50">
            <h5 class="sub-title">client’s feedback</h5>
            <h2 class="title">You Can See Our Clients Feedback</h2>
          </div> <!-- section -title -->
        </div>
      </div> <!-- row -->
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="testimonial-active">
            <div class="single-testimonial text-center">
              <div class="testimonial-icon">
                <i class="flaticon-quote"></i>
              </div>
              <div class="testimonial-content mt-50">
                <p>Lorem ipsum dolor sit amet, consectetur scing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse is an ultrices gravida. Risus commodo. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h6 class="name mt-30">Mohammad Mostofa</h6>
                <span>CEO of uipark</span>
              </div>
            </div> <!-- single testimonial -->
            <div class="single-testimonial text-center">
              <div class="testimonial-icon">
                <i class="flaticon-quote"></i>
              </div>
              <div class="testimonial-content mt-50">
                <p>Lorem ipsum dolor sit amet, consectetur scing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse is an ultrices gravida. Risus commodo. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h6 class="name mt-30">Mohammad Mostofa</h6>
                <span>CEO of uipark</span>
              </div>
            </div> <!-- single testimonial -->
          </div> <!-- testimonial active -->
        </div>
      </div> <!-- row -->
    </div> <!-- container -->

    <div class="single-author-right author-one">
      <img src="assets/images/testimonial/ts-4.jpg" alt="Author">
    </div> <!-- author -->
    <div class="single-author-right author-tow">
      <img src="assets/images/testimonial/ts-5.jpg" alt="Author">
    </div> <!-- author -->
    <div class="single-author-right author-three">
      <img src="assets/images/testimonial/ts-6.jpg" alt="Author">
    </div> <!-- author -->
  </section>

  <!--====== TESTIMONIAL PART ENDS ======-->
</template>

<script>
    export default {
        name: "Teatimonial",
      mounted() {
        $('.testimonial-active').slick({
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow:'<span class="prev"><i class="flaticon-left-arrow"></i></span>',
          nextArrow: '<span class="next"><i class="flaticon-right-arrow"></i></span>',
        });

      }
    }
</script>

<style scoped>

</style>
