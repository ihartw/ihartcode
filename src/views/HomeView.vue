<script setup>
   import { onMounted } from 'vue'
   import 'materialize-css/dist/js/materialize.min'
   import 'materialize-css/dist/css/materialize.min.css'
   import ProjectCards from '../components/ProjectCards.vue'
   import Hero from '../components/Hero.vue'
   import About from '../components/About.vue'
   import Skills from '../components/Skills.vue'
   import Art from '../components/Art.vue'
   import Experience from '../components/Experience.vue'
   import Music from '../components/Music.vue'

   onMounted(() => {
      M.AutoInit();
      let x = 0;
      let y = 0;

      const updateGradient = () => {
         document.body.style.background = `radial-gradient(circle 600px at ${x}px ${y}px, #222126, #1a191d)`;
         requestAnimationFrame(updateGradient);
      }

      document.addEventListener('mousemove', (event) => {
         x = event.pageX;
         y = event.pageY;
      });

      updateGradient();
   });
</script>

<template>
   <hero></hero>
   <div class="container">
      <about></about>
      <skills></skills>
      <experience></experience>
      <project-cards></project-cards>
      <art></art>
      <music></music>
   </div>
</template>

<style>
   .container {
      width: 95% !important;
   }
</style>