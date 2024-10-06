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
               I’m a passionate Software Engineer who thrives on problem-solving and crafting elegant web and mobile applications. Beyond coding, I enjoy playing musical instruments and drawing, which fuel my creativity. I love blending my artistic flair with my technical expertise to develop exceptional products and engaging user experiences. If you’re seeking a versatile engineer with a diverse skill set, I’d love to connect! Feel free to reach out on
            </p>
            <p>
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