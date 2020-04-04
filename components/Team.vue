<template>
  <!--====== TEAM PART START ======-->

  <section id="team" class="team-area pt-125 pb-100">
    <div class="team-man" data-aos="fade-right" data-aos-duration="1000">
      <img src="assets/images/svg/team.png" alt="Man">
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center pb-30">
            <h5 class="sub-title">Team member</h5>
            <h2 class="title">Team You Want To Work With Us</h2>
          </div> <!-- section -title -->
        </div>
      </div> <!-- row -->
      <div class="row team-active">
        <div class="col-lg-4">
          <div class="single-team text-center">
            <div class="team-image">
              <img src="assets/images/team/t-1.jpg" alt="Team">
            </div>
            <div class="team-content">
              <h4 class="team-name"><a href="#">Rolin Marino</a></h4>
              <span>CEO & Founder</span>
              <ul>
                <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
              </ul>
            </div>
          </div> <!-- row -->
        </div>
        <div class="col-lg-4">
          <div class="single-team text-center">
            <div class="team-image">
              <img src="assets/images/team/t-2.jpg" alt="Team">
            </div>
            <div class="team-content">
              <h4 class="team-name"><a href="#">Mostofa Kamal</a></h4>
              <span>UX Researcher</span>
              <ul>
                <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
              </ul>
            </div>
          </div> <!-- row -->
        </div>
        <div class="col-lg-4">
          <div class="single-team text-center">
            <div class="team-image">
              <img src="assets/images/team/t-3.jpg" alt="Team">
            </div>
            <div class="team-content">
              <h4 class="team-name"><a href="#">Tahmina Anny</a></h4>
              <span>UI Designer</span>
              <ul>
                <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
              </ul>
            </div>
          </div> <!-- row -->
        </div>
        <div class="col-lg-4">
          <div class="single-team text-center">
            <div class="team-image">
              <img src="assets/images/team/t-4.jpg" alt="Team">
            </div>
            <div class="team-content">
              <h4 class="team-name"><a href="#">Bobby Akter</a></h4>
              <span>Web Designer</span>
              <ul>
                <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
              </ul>
            </div>
          </div> <!-- row -->
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
  </section>

  <!--====== TEAM PART ENDS ======-->
</template>

<script>
    export default {
        name: "Team",
      mounted() {
        $('.team-active').slick({
          dots: false,
          infinite: true,
          speed: 800,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          prevArrow:'<span class="prev"><i class="fa fa-angle-left"></i></span>',
          nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
              }
            }
          ]
        });

      }
    }
</script>

<style scoped>

</style>
