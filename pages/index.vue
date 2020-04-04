<template>
  <div>
    <Features/>
    <About/>
    <Counter/>
    <Services/>
    <Work/>
    <Video/>
    <Team/>
    <Pricing/>
    <Teatimonial/>
    <Blog/>
    <Contract/>
  </div>
</template>

<script>



import Features from "../components/Features";
import About from "../components/About";
import Counter from "../components/Counter";
import Services from "../components/Services";
import Work from "../components/Work";
import Video from "../components/Video";
import Team from "../components/Team";
import Pricing from "../components/Pricing";
import Teatimonial from "../components/Teatimonial";
import Blog from "../components/Blog";
import Contract from "../components/Contract";
export default {
  components: {
    Contract,
    Blog,
    Teatimonial,
    Pricing,
    Team,
    Video,
    Work,
    Services,
    Counter,
    About,
    Features
  }
}

</script>

<style>

</style>
