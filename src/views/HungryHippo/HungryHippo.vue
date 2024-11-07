<script setup>
import { onMounted, ref } from 'vue'
import { useIntersectionObserver, useAnimate } from '@vueuse/core'

const isVisible = ref(false);
const projectContainer = ref(null);
const keyframes = [
   { opacity: 0 },
   { opacity: 1 },
]


onMounted(() => {
   useIntersectionObserver(projectContainer, ([{ isIntersecting }]) => {
      if (!isVisible.value && isIntersecting) {
         isVisible.value = true;
         useAnimate(projectContainer, keyframes, {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out',
         })
      }
   });
});

</script>

<template>
   <div class="project-container" ref="projectContainer">
      <h3 class="center-align grey darken-4">Making updates just chill 👽 ✌🏽...</h3>
      <!-- <div class="circle">
         <div class="dot"></div>
      </div>

      <div class="item"></div> -->
   </div>
</template>

<style scoped>
.project-container {
   background-color: #ef9a9a;
   height: 100vh;
   overflow: hidden;
}

.circle {
   width: 60px;
   height: 60px;
   position: absolute;
   top: 50px;
   left: 50px;
   transform: translateX(-15px) translateY(-15px);
   pointer-events: none;
   z-index: 9999;
   -webkit-transition: opacity .4s ease-in-out;
   transition: opacity .4s ease-in-out;
}

.circle .dot {
   width: 30px;
   height: 30px;
   border-radius: 50%;
   background-color: #81d4fa;
   -webkit-transition: 600ms all cubic-bezier(.23, 1, .32, 1);
   transition: 600ms all cubic-bezier(.23, 1, .32, 1);
}

.item {
   height: 40px;
   width: 40px;
   background-color: #fff;
   border-radius: 50%;
   position: absolute;
   display: inline-block;
}
</style>