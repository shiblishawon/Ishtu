<template>
  <!--====== FEATURES PART START ======-->

  <section id="features" class="features-area mt-80">
    <div class="container">
      <div class="features pt-100 pb-130">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-8 col-sm-9">
            <div class="single-features text-center mt-30">
              <div class="features-icon">
                <img src="assets/images/features/icon-1.png" alt="features">
              </div>
              <div class="features-content mt-30">
                <h4 class="features-title"><a href="#">Business Analysis</a></h4>
                <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit sed do eiusmod tempor incididunt labore dolore magnad.</p>
              </div>
            </div> <!-- single features -->
          </div>
          <div class="col-lg-4 col-md-8 col-sm-9">
            <div class="single-features text-center mt-30">
              <div class="features-icon">
                <img src="assets/images/features/icon-2.png" alt="features">
              </div>
              <div class="features-content mt-30">
                <h4 class="features-title"><a href="#">Data Managment</a></h4>
                <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit sed do eiusmod tempor incididunt labore dolore magnad.</p>
              </div>
            </div> <!-- single features -->
          </div>
          <div class="col-lg-4 col-md-8 col-sm-9">
            <div class="single-features text-center mt-30">
              <div class="features-icon">
                <img src="assets/images/features/icon-3.png" alt="features">
              </div>
              <div class="features-content mt-30">
                <h4 class="features-title"><a href="#">Friendly Support</a></h4>
                <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit sed do eiusmod tempor incididunt labore dolore magnad.</p>
              </div>
            </div> <!-- single features -->
          </div>
        </div> <!-- row -->
        <div class="features-man" data-aos="fade-right" data-aos-duration="1000">
          <img src="assets/images/features/features.svg" alt="features">
        </div>
      </div> <!-- features -->
    </div> <!-- container -->
  </section>

  <!--====== FEATURES PART ENDS ======-->
</template>

<script>
    export default {
        name: "Features",
      mounted() {
        $('.blog-area').on('mouseover', '.single-blog', function() {
          $('.single-blog.active').removeClass('active');
          $(this).addClass('active');
        });

      }
    }
</script>

<style scoped>

</style>
