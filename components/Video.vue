<template>
  <!--====== VIDEO PART START ======-->

  <section id="video" class="video-area pt-125 pb-130 bg_cover" style="background-image: url(assets/images/video-bg.jpg)">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-lg-7">
          <div class="video-content">
            <h2 class="video-title">Why We’re The Best Match For Your Business!</h2>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be suthere isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator, Lorem ipsum dolor sit amet consectetur adipicing.</p>
            <a href="#">Read more about us <i class="fa fa-angle-right"></i></a>
          </div> <!-- video content -->
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
    <div class="video-woman" data-aos="fade-left" data-aos-duration="1000">
      <img src="assets/images/svg/video.png" alt="Shape">
    </div>
    <div class="main-video">
      <div class="video-image">
        <img src="assets/images/video-image.jpg" alt="Video">
        <a class="video-popup" href="https://www.youtube.com/watch?v=TcMBFSGVi1c&amp;t=70s">Play</a>
      </div>
    </div>
  </section>

  <!--====== VIDEO PART ENDS ======-->
</template>

<script>
    export default {
      name: "Video",
      mounted() {
        $('.video-popup').magnificPopup({
          type: 'iframe'
          // other options
        });
      }
    }
</script>

<style scoped>

</style>
