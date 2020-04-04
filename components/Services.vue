<template>
  <!--====== SERVICES PART START ======-->

  <section id="service" class="services-area pt-125 pb-130">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="section-title text-center pb-10">
            <h5 class="sub-title">Our Amazing Services</h5>
            <h2 class="title">We’r Provided Best Digital Marketing Services!</h2>
          </div> <!-- section -title -->
        </div>
      </div> <!-- row -->
      <div class="row">
        <div class="col-lg-5">
          <div class="nav flex-column services-content mt-50" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="active" id="v-pills-application-tab" data-toggle="pill" href="#v-pills-application" role="tab" aria-controls="v-pills-application" aria-selected="true">
              <div class="single-services">
                <h4 class="services-title">Application Development</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div> <!-- single services -->
            </a>

            <a id="v-pills-web-tab" data-toggle="pill" href="#v-pills-web" role="tab" aria-controls="v-pills-web" aria-selected="false">
              <div class="single-services">
                <h4 class="services-title">Web Development</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div> <!-- single services -->
            </a>

            <a id="v-pills-uiux-tab" data-toggle="pill" href="#v-pills-uiux" role="tab" aria-controls="v-pills-uiux" aria-selected="false">
              <div class="single-services">
                <h4 class="services-title">UI/UX Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div> <!-- single services -->
            </a>

            <a id="v-pills-graphic-tab" data-toggle="pill" href="#v-pills-graphic" role="tab" aria-controls="v-pills-graphic" aria-selected="false">
              <div class="single-services">
                <h4 class="services-title">Graphic Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div> <!-- single services -->
            </a>
          </div> <!-- nav -->
        </div>
        <div class="col-lg-7">
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-application" role="tabpanel" aria-labelledby="v-pills-application-tab">
              <div class="services-image animation1 mt-50">
                <img src="assets/images/services.png" alt="Services">
              </div> <!-- services image -->
            </div>

            <div class="tab-pane fade" id="v-pills-web" role="tabpanel" aria-labelledby="v-pills-web-tab">
              <div class="services-image animation1 mt-50">
                <img src="assets/images/services.png" alt="Services">
              </div> <!-- services image -->
            </div>

            <div class="tab-pane fade" id="v-pills-uiux" role="tabpanel" aria-labelledby="v-pills-uiux-tab">
              <div class="services-image animation1 mt-50">
                <img src="assets/images/services.png" alt="Services">
              </div> <!-- services image -->
            </div>

            <div class="tab-pane fade" id="v-pills-graphic" role="tabpanel" aria-labelledby="v-pills-graphic-tab">
              <div class="services-image animation1 mt-50">
                <img src="assets/images/services.png" alt="Services">
              </div> <!-- services image -->
            </div>
          </div> <!-- tab content -->
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
    <div class="services-woman">
      <img data-aos="fade-left" data-aos-duration="1000" src="assets/images/svg/services-woman.png" alt="Woman">
    </div> <!-- services woman -->
  </section>

  <!--====== SERVICES PART ENDS ======-->
</template>

<script>
    export default {
        name: "Services"
    }
</script>

<style scoped>

</style>
