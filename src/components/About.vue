<script setup>
   import { ref } from 'vue'
   import { store } from '../store/store.js'
   import { useIntersectionObserver, useAnimate } from '@vueuse/core'

   const isVisible = ref(false);
   const about = ref(null);
   const keyframes = [
      { opacity: 0, transform: 'translateX(20px)'},
      { opacity: 1 },
   ]

   const {isActive} = useIntersectionObserver(about, ([{ isIntersecting }]) => {
      if(!isVisible.value && isIntersecting) {
         isVisible.value = true;
         useAnimate(about, keyframes, {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out',
         });
      }
   });
</script>

<template>
   <section id="about" class="about section scrollspy" ref="about">
      <div class="row padded-top">
         <div class="col m12 l6 push-l6">
            <h3 class="center-align">About Me</h3>
            <p>
               I'm a Software Engineer who loves problem solving and building beautiful web/mobile
               applications. Outside of coding I also enjoy playing instruments and drawing as a hobby. I consider myself a creative and enjoy mixing my artistic ability with my technical skills to create awesome products and experiences. If
               you're looking for a talented Engineer that has a wide range of skills get in touch!
            </p>
            <p>Connect with me on
               <a href="https://www.linkedin.com/in/isaac-hartwick-44b883117" target="_blank" class="link">LinkedIn</a>
            </p>
         </div>
         <div class="col m12 l6 pull-l6 web-apps">
            <img src="../assets/images/web-apps.png" class="center-align">
         </div>
      </div>
   </section>
</template>

<style scoped>
   .about {
      opacity: 0;
   }

   .about .web-apps {
      padding-top: 40px;
      text-align: center;
   }

   .about .web-apps img {
      max-width: 60%;
   }
</style>