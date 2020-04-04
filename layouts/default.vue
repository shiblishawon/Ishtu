<template>
  <div>
    <Header/>
    <nuxt />
    <Footer/>
  </div>
</template>

<style>

</style>
<script>
  import Header from "~/components/Header";
  import Footer from "~/components/Footer";
  export default {
    components: {
      Footer,
      Header
    },
    head(){
      return{
        title: "Ishtu - Vue Nuxt Creative Agency Landing Page Template"
      }
    }

  }
</script>
