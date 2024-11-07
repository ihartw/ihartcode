<script setup>
import { onMounted, ref } from 'vue'
import { useIntersectionObserver, useAnimate } from '@vueuse/core'

const isVisible = ref(false);
const projectContainer = ref(null);
const starsContainer = ref(null);
const solarSystemVisible = ref(true);
const planetInfoVisible = ref(false);
const planetItem = ref({ title: 'Sun', name: 'sun', class: 'sun-item' });
const keyframes = [
   { opacity: 0 },
   { opacity: 1 },
]


onMounted(() => {
   M.AutoInit();
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

const planets = [
   { title: 'Sun', name: 'sun', class: 'sun-item', description: 'The Sun is a massive, hot sphere of gas at the center of our solar system, producing energy through nuclear fusion. Its intense heat and light sustain life on Earth and influence the orbits of planets, moons, and other celestial objects.' },
   { title: 'Mercury', name: 'mercury', class: 'mercury-item', description: 'Mercury is the smallest and innermost planet in our solar system, orbiting closest to the Sun with extreme temperature variations between its day and night sides. It has a rocky, cratered surface similar to our Moon and lacks a significant atmosphere to retain heat or protect it from solar radiation.' },
   { title: 'Venus', name: 'venus', class: 'venus-item', description: 'Venus is the second planet from the Sun, known for its thick, toxic atmosphere filled with carbon dioxide and clouds of sulfuric acid, creating a runaway greenhouse effect that makes it the hottest planet in the solar system. Its surface is rocky and volcanic, and it rotates in the opposite direction to most planets, meaning the Sun rises in the west and sets in the east.' },
   { title: 'Earth', name: 'earth', class: 'earth-item', description: 'Earth is the third planet from the Sun and the only known world to support life, thanks to its unique combination of liquid water, protective atmosphere, and mild temperatures. It has a diverse surface of continents, oceans, and ecosystems that sustain a rich variety of plants, animals, and human life.' },
   { title: 'Mars', name: 'mars', class: 'mars-item', description: 'Mars, the fourth planet from the Sun, is a cold, desert-like world with a reddish appearance due to iron oxide on its surface. Known for its vast canyons, extinct volcanoes, and polar ice caps, Mars is a prime target in the search for past or present signs of life.' },
   { title: 'Jupiter', name: 'jupiter', class: 'jupiter-item', description: 'Jupiter, the largest planet in our solar system, is a gas giant known for its powerful storms, including the iconic Great Red Spot, a massive storm persisting for centuries. Composed primarily of hydrogen and helium, Jupiter has over 75 moons and a strong magnetic field, making it a fascinating and complex planet to study.' },
   { title: 'Saturn', name: 'saturn', class: 'saturn-item', description: 'Saturn, the sixth planet from the Sun, is famous for its stunning ring system made of ice and rock particles that extend thousands of kilometers. As a gas giant composed mostly of hydrogen and helium, Saturn also has numerous moons, including the largest, Titan, which features a thick atmosphere and lakes of liquid methane.' },
   { title: 'Uranus', name: 'uranus', class: 'uranus-item', description: 'Uranus is the seventh planet from the Sun and is unique for its sideways rotation, with its axis tilted at an extreme angle of about 98 degrees. This ice giant is primarily composed of hydrogen, helium, and icy compounds, and is surrounded by faint rings and 27 known moons.' },
   { title: 'Neptune', name: 'neptune', class: 'neptune-item', description: 'Neptune is the eighth and farthest planet from the Sun, known for its striking blue color, which is due to the methane in its atmosphere. This icy giant has the strongest winds in the solar system and is surrounded by five rings and 14 moons, with Triton being its largest moon.' },
]

const selectPlanet = (item) => {
   solarSystemVisible.value = false;
   planetInfoVisible.value = true;
   planetItem.value = item;
}

const backToSolarSystem = () => {
   solarSystemVisible.value = true;
   planetInfoVisible.value = false;
}

</script>

<template>
   <div class="project-container" ref="projectContainer">
      <div class="solar-system" :class="{'hidden': !solarSystemVisible}">

         <!-- Orbit Lines -->
         <div class="ring1"></div>
         <div class="ring2"></div>
         <div class="ring3"></div>
         <div class="ring4"></div>
         <div class="ring5"></div>
         <div class="ring6"></div>
         <div class="ring7"></div>
         <div class="ring8"></div>

         <!-- Planets in Orbit-->
         <div v-for="planet in planets" :key="planet" class="planet tooltipped" :class="planet.name" @click="selectPlanet(planet)" data-position="top" :data-tooltip="planet.title"></div>
      </div>

      <!-- Planet Info -->
      <div class="planet-items" v-if="planetInfoVisible">
         <a class="waves-effect waves-light btn back-btn grey lighten-1" @click="backToSolarSystem()"><i class="material-icons left">arrow_back</i>Solar System</a>
         <div class="animate__animated animate__zoomInLeft">
            <h3 class="planet-item-title">{{ planetItem.title }}</h3>
            <div class="planet-item" :class="planetItem.class"></div>
         </div>
      </div>

      <!-- Stars -->
      <div class="stars-container" ref="starsContainer">
         <div class="stars"></div>
         <div class="stars2"></div>
         <div class="stars3"></div>
      </div>
   </div>
</template>

<style scoped src="./css/planets.css"></style>