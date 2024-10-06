<script setup>
   import { ref } from 'vue'
   import { store } from '../store/store.js'
   import { useIntersectionObserver, useAnimate } from '@vueuse/core'
   import AnimatedText from './AnimatedText.vue'

   const animatedName = ref(`<Isaac Hartwick />`);
   const isVisible = ref(false);
   const top = ref(null);
   const keyframes = [
      { opacity: 0, transform: 'translateX(20px)'},
      { opacity: 1 },
   ]

   const {isActive} = useIntersectionObserver(top, ([{ isIntersecting }]) => {
      if(!isVisible.value && isIntersecting) {
         isVisible.value = true;
         useAnimate(top, keyframes, {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out',
         });
      }
   });
</script>
<template>
   <div class="section scrollspy" id="top"></div>
   <section class="hero">
      <div class="row" ref="top">
         <div class="col s12 m6">
            <div class="valign-wrapper">
               <div class="hero-content">
                  <h4>Who is this guy?</h4>
                  <AnimatedText :text="animatedName" />
                  <div class="down-arrow clickable" @click="store.scrollTo('about')">
                     <img src="../assets/images/down-arrow-7.svg" width="50">
                  </div>
               </div>
            </div>
         </div>
         <div class="col m6">
            <div class="profile-pic">
               <img src="../assets/images/profile.png" width="300">
            </div>
         </div>
      </div>
   </section>
</template>

<style>
   .hero {
      width: 100%;
      background: white !important;
      opacity: .8;
      overflow-y: hidden;
      height: 90vh;
   }

   .hero h1 {
      color: black;
      font-size: 30px;
      margin: 10px 0;
      font-family: Lekton, sans-serif;
   }

   .hero .hero-content {
      margin: 0 auto !important;
      text-align: center;
   }

   .hero .hero-content h2,
   .hero .hero-content .element {
      color: grey;
   }

   .hero .profile-pic {
      padding-top: 80px;
      width: 200px;
      margin: 0 auto;
   }

   .hero .down-arrow {
      text-align: center;
      position: relative;
      top: 60px;
      animation-duration: 1.5s;
   }

   .hero .profile-pic img {
      position: absolute;
      bottom: 0;
   }

   .hero .arrow {
      position: relative;
      top: 100px;
   }

   .hero div.valign-wrapper {
      height: 100vh;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
   }

   .hero-content h4 {
      font-family: Lekton, sans-serif;
      font-size: 18px;
      color: black;
      letter-spacing: .1em;
      margin-bottom: 0px;
   }

   .down-arrow {
      animation: bounce 2s infinite;
   }

   @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
      40% {transform: translateY(-30px);} 
      60% {transform: translateY(-15px);} 
   }
   @media screen and (max-width: 600px) {
      .profile-pic {
         display: none;
      }
   }
</style>