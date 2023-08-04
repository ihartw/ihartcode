<script setup>
   import {
      ref,
      onMounted,
      onUnmounted
   } from 'vue'
   import { useAnimate } from '@vueuse/core'

   onMounted(() => {
      
      console.log(screenHeight.value);
      // setStars();
   });
   const mercury = ref(null);
   const mercuryOrbit = useAnimate(mercury,{
      from: {
         transform: 'rotate(0deg)'
      },
      to: {
         transform: 'rotate(360deg) translateX(140px) rotate(-360deg)'
      },
      duration: 10000,
      repeat: Infinity,
      easing: 'linear'
   });
   const screenHeight = ref(window.innerHeight);
   const stars = ref([]);
   const twinkleStars = () => {
      const random = Math.floor(Math.random() * stars.value.length);
      const twinklingStar = stars.value[random % stars.value.length];
      twinklingStar.twinkle = true;

      setTimeout(() => {
         twinklingStar.twinkle = false;
      }, 500);
   };
   const setStars = () => {
      const numberOfStars = Math.floor(window.innerWidth / 2);
      for (let i = 0; i < numberOfStars; i++) {
         const starsYAxis = Math.floor(Math.random() * 150) + 1;
         const starsXAxis = Math.floor(Math.random() * 150) + 1;
         const starSize = Math.random();

         stars.value.push({
            id: i,
            y: `${starsYAxis}%`,
            x: `${starsXAxis}%`,
            size: starSize,
            twinkle: false,
         });
      }

      setInterval(() => {
         twinkleStars();
      }, 200);
   };
</script>

<template>
   <a class="waves-effect waves-light btn back-btn grey lighten-4" @click="backToSolarSystem()"><i
         class="material-icons left">arrow_back</i>Solar System</a>
   <div class="solar-system">
      <!-- <div class="sun planet tooltipped" @click="selectSun()" data-position="top" data-tooltip="Sun">
         <div class="sun-glow"></div>
      </div> -->

      <!-- Orbit Lines -->
      <div class="rings">
         <div class="ring1">
            <!-- <div class="mercury planet tooltipped" @click="selectMercury()" data-position="top" data-tooltip="Mercury"></div> -->
         </div>
         <div class="ring2"></div>
         <div class="ring3"></div>
         <div class="ring4"></div>
         <div class="ring5"></div>
         <div class="ring6"></div>
         <div class="ring7"></div>
         <div class="ring8"></div>
      </div>

      <!-- Planets in Orbit-->
      <!-- <div class="mercury planet tooltipped" @click="selectMercury()" data-position="top" data-tooltip="Mercury">
      </div> -->
      <!-- <div class="venus planet tooltipped" @click="selectVenus()" data-position="top" data-tooltip="Venus"></div>
      <div class="earth planet tooltipped" @click="selectEarth()" data-position="top" data-tooltip="Earth"></div>
      <div class="mars planet tooltipped" @click="selectMars()" data-position="top" data-tooltip="Mars"></div>
      <div class="jupiter planet tooltipped" @click="selectJupiter()" data-position="top" data-tooltip="Jupiter">
      </div>
      <div class="saturn planet tooltipped" @click="selectSaturn()" data-position="top" data-tooltip="Saturn"></div>
      <div class="uranus planet tooltipped" @click="selectUranus()" data-position="top" data-tooltip="Uranus"></div>
      <div class="neptune planet tooltipped" @click="selectNeptune()" data-position="top" data-tooltip="Neptune">
      </div> -->
   </div>

   <!-- Planet Info -->
   <div class="planet-items">
      <h3 class="planet-item-title"></h3>
      <div class="planet-item sun-item"></div>
      <div class="planet-item earth-item"></div>
      <div class="planet-item mercury-item"></div>
      <div class="planet-item venus-item"></div>
      <div class="planet-item mars-item"></div>
      <div class="planet-item jupiter-item"></div>
      <div class="planet-item saturn-item"></div>
      <div class="planet-item uranus-item"></div>
      <div class="planet-item neptune-item"></div>
   </div>

   <!-- Stars -->
   <!-- <div class="stars-container">
      <div v-for="star in stars" class="stars" :key="star.id" :style="{ top: star.y, left: star.x, transform: 'scale(' + star.size + ')' }"></div>
   </div> -->

</template>

<style scoped src="./css/planets.css">
</style>