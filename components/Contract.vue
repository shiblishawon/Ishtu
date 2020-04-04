<template>
  <!--====== CONATCT PART START ======-->

  <section id="contact" class="contact-area pt-125 pb-130">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title section-title-2 text-center pb-30">
            <h5 class="sub-title">contact us</h5>
            <h2 class="title">Get In Touch</h2>
          </div> <!-- section -title -->
        </div>
      </div> <!-- row -->

      <div class="contact-form">
        <form id="contact-form" action="https://html.codeceil.com/bizto/bizto/assets/contact.php" method="post" data-toggle="validator">
          <div class="row">
            <div class="col-lg-6">
              <div class="single-contact-form form-group">
                <input type="text" name="name" placeholder="Enter Your Name" data-error="Name is required." required="required">
                <div class="help-block with-errors"></div>
              </div> <!-- single contact form -->
            </div>
            <div class="col-lg-6">
              <div class="single-contact-form form-group">
                <input type="email" name="email" placeholder="Enter Your Email" data-error="Valid email is required." required="required">
                <div class="help-block with-errors"></div>
              </div> <!-- single contact form -->
            </div>
            <div class="col-lg-6">
              <div class="single-contact-form form-group">
                <input type="text" name="number" placeholder="Your Phone Number" data-error="Phone is required." required="required">
                <div class="help-block with-errors"></div>
              </div> <!-- single contact form -->
            </div>
            <div class="col-lg-6">
              <div class="single-contact-form form-group">
                <input type="text" name="subject" placeholder="Your Subject" data-error="Subject is required." required="required">
                <div class="help-block with-errors"></div>
              </div> <!-- single contact form -->
            </div>
            <div class="col-lg-12">
              <div class="single-contact-form form-group">
                <textarea name="message" placeholder="Write Your Message" data-error="Please,leave us a message." required="required"></textarea>
                <div class="help-block with-errors"></div>
              </div> <!-- single contact form -->
            </div>
            <p class="form-message"></p>
            <div class="col-lg-12">
              <div class="single-contact-form text-center">
                <button type="submit" class="main-btn main-btn-2">Send Message</button>
              </div> <!-- single contact form -->
            </div>
          </div> <!-- row -->
        </form>
      </div> <!-- contact form -->
    </div> <!-- container -->
    <div class="contact-woman" data-aos="fade-left" data-aos-duration="1000">
      <img src="assets/images/svg/contact.png" alt="Woman">
    </div>
  </section>

  <!--====== CONATCT PART ENDS ======-->
</template>

<script>
    export default {
        name: "Contract"
    }
</script>

<style scoped>

</style>
