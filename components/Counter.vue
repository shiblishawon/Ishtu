<template>
  <!--====== COUNTER PART START ======-->

  <section id="counter" class="counter-area gray-bg pt-100 pb-130">
    <div class="counter-man">
      <img data-aos="fade-right" data-aos-duration="1000" src="/assets/images/svg/counter-man.svg" alt="Man">
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 col-sm-8">
          <div class="single-counter text-center mt-30">
            <div class="counter-item">
              <span><span class="counter">16</span>K</span>
              <p>Global Customer</p>
            </div> <!-- counter-item -->
          </div> <!-- single counter -->
        </div>
        <div class="col-md-4 col-sm-8">
          <div class="single-counter text-center mt-30">
            <div class="counter-item">
              <span><span class="counter">750</span>+</span>
              <p>Global Customer</p>
            </div> <!-- counter-item -->
          </div> <!-- single counter -->
        </div>
        <div class="col-md-4 col-sm-8">
          <div class="single-counter text-center mt-30">
            <div class="counter-item">
              <span><span class="counter">25</span>+</span>
              <p>Global Customer</p>
            </div> <!-- counter-item -->
          </div> <!-- single counter -->
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
  </section>

  <!--====== COUNTER PART ENDS ======-->
</template>

<script>
    export default {
        name: "Counter",
      mounted() {
        $('.counter').counterUp({
          delay: 10,
          time: 2000,
        });
      }
    }
</script>

<style scoped>

</style>
