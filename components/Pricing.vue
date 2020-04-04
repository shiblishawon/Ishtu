<template>
  <!--====== PRICING PART START ======-->

  <section id="pricing" class="pricing-area gray-bg pt-125 pb-130">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center">
            <h5 class="sub-title">pricing plan</h5>
            <h2 class="title">Choose Your Best Pricing Plan</h2>
          </div> <!-- section -title -->
        </div>
      </div> <!-- row -->
      <div class="pricing-card">
        <div class="row">
          <div class="col-lg-12">
            <div class="cd-pricing-container cd-has-margins pt-60">
              <div class="cd-pricing-switcher">
                <div class="fieldset">
                  <input type="radio" name="duration-2" value="yearly" id="yearly-2" checked>
                  <label for="yearly-2">Yearly</label>
                  <input type="radio" name="duration-2" value="monthly" id="monthly-2">
                  <label for="monthly-2">Monthly</label>
                  <span class="cd-switch"></span>
                </div>
              </div> <!-- cd pricing-switcher -->

              <ul class="cd-pricing-list cd-bounce-invert">
                <li>
                  <ul class="cd-pricing-wrapper">
                    <li data-type="yearly" class="is-visible">
                      <div class="single-pricing pricing-body text-center mt-30">
                        <div class="pricing-thumb">
                          <img src="assets/images/svg/priceing-1.svg" alt="pricing">
                        </div>
                        <div class="pricing-price mt-30">
                          <h2>$25 <span>/yr</span></h2>
                          <p>Starter</p>
                        </div>
                        <div class="pricing-content mt-25">
                          <p class="mb-35">Power And Predictive Dialing Quality & Customer Experience 24/7 phone and email support</p>
                          <a class="main-btn" href="#">Buy Now</a>
                        </div>
                      </div> <!-- single price -->
                    </li>
                    <li data-type="monthly" class="is-hidden">
                      <div class="single-pricing pricing-body text-center mt-30">
                        <div class="pricing-thumb">
                          <img src="assets/images/svg/priceing-1.svg" alt="pricing">
                        </div>
                        <div class="pricing-price mt-30">
                          <h2>$125 <span>/mo</span></h2>
                          <p>Starter</p>
                        </div>
                        <div class="pricing-content mt-25">
                          <p class="mb-35">Power And Predictive Dialing Quality & Customer Experience 24/7 phone and email support</p>
                          <a class="main-btn" href="#">Buy Now</a>
                        </div>
                      </div> <!-- single price -->
                    </li>
                  </ul> <!-- cd-pricing-wrapper -->
                </li>
                <li class="cd-popular">
                  <ul class="cd-pricing-wrapper">
                    <li data-type="yearly" class="is-visible">
                      <div class="single-pricing pricing-body text-center mt-30">
                        <div class="pricing-thumb">
                          <img src="assets/images/svg/priceing-2.svg" alt="pricing">
                        </div>
                        <div class="pricing-price mt-30">
                          <h2>$25 <span>/yr</span></h2>
                          <p>Starter</p>
                        </div>
                        <div class="pricing-content mt-25">
                          <p class="mb-35">Power And Predictive Dialing Quality & Customer Experience 24/7 phone and email support</p>
                          <a class="main-btn" href="#">Buy Now</a>
                        </div>
                      </div> <!-- single price -->
                    </li>
                    <li data-type="monthly" class="is-hidden">
                      <div class="single-pricing pricing-body text-center mt-30">
                        <div class="pricing-thumb">
                          <img src="assets/images/svg/priceing-2.svg" alt="pricing">
                        </div>
                        <div class="pricing-price mt-30">
                          <h2>$125 <span>/mo</span></h2>
                          <p>Starter</p>
                        </div>
                        <div class="pricing-content mt-25">
                          <p class="mb-35">Power And Predictive Dialing Quality & Customer Experience 24/7 phone and email support</p>
                          <a class="main-btn" href="#">Buy Now</a>
                        </div>
                      </div> <!-- single price -->
                    </li>
                  </ul> <!-- cd-pricing-wrapper -->
                </li>
                <li>
                  <ul class="cd-pricing-wrapper">
                    <li data-type="yearly" class="is-visible">
                      <div class="single-pricing pricing-body text-center mt-30">
                        <div class="pricing-thumb">
                          <img src="assets/images/svg/priceing-3.svg" alt="pricing">
                        </div>
                        <div class="pricing-price mt-30">
                          <h2>$25 <span>/yr</span></h2>
                          <p>Starter</p>
                        </div>
                        <div class="pricing-content mt-25">
                          <p class="mb-35">Power And Predictive Dialing Quality & Customer Experience 24/7 phone and email support</p>
                          <a class="main-btn" href="#">Buy Now</a>
                        </div>
                      </div> <!-- single price -->
                    </li>
                    <li data-type="monthly" class="is-hidden">
                      <div class="single-pricing pricing-body text-center mt-30">
                        <div class="pricing-thumb">
                          <img src="assets/images/svg/priceing-3.svg" alt="pricing">
                        </div>
                        <div class="pricing-price mt-30">
                          <h2>$125 <span>/mo</span></h2>
                          <p>Starter</p>
                        </div>
                        <div class="pricing-content mt-25">
                          <p class="mb-35">Power And Predictive Dialing Quality & Customer Experience 24/7 phone and email support</p>
                          <a class="main-btn" href="#">Buy Now</a>
                        </div>
                      </div> <!-- single price -->
                    </li>
                  </ul> <!-- cd-pricing-wrapper -->
                </li>
              </ul> <!-- cd-pricing-list -->
            </div> <!-- cd-pricing-container -->
          </div>
        </div> <!-- row -->
      </div> <!-- row -->
    </div> <!-- container -->
  </section>

  <!--====== PRICING PART ENDS ======-->
</template>

<script>
    export default {
        name: "Pricing"
    }
</script>

<style scoped>

</style>
