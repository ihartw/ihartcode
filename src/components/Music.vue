<script setup>
   import { ref } from 'vue'
   import { useIntersectionObserver, useAnimate } from '@vueuse/core'

   const isVisible = ref(false);
   const music = ref(null);
   const keyframes = [
      { opacity: 0, transform: 'translateX(20px)'},
      { opacity: 1 },
   ]
   
   useIntersectionObserver(music, ([{ isIntersecting }]) => {
      if(!isVisible.value && isIntersecting) {
         isVisible.value = true;
         useAnimate(music, keyframes, {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out',
         })
      }
   });
</script>

<template>
   <section id="music" class="section scrollspy" ref="music">
      <div class="row padded-top">
         <div class="col s12 title">
            <h3 class="description center-align">Music</h3>
         </div>
      </div>
      <div class="valign-wrapper">
         <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/64igaErujpAouO4RmEd3vZ?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
   </section>
</template>

<style scoped>
   #music {
      margin-bottom: 50px;
      margin-top: 100px;
   }
</style>