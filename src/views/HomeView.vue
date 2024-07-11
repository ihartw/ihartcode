<script setup>
   import { onMounted, ref } from 'vue'
   import 'materialize-css/dist/js/materialize.min'
   import 'materialize-css/dist/css/materialize.min.css'
   import ProjectCards from '../components/ProjectCards.vue'
   import Hero from '../components/Hero.vue'
   import About from '../components/About.vue'
   import Skills from '../components/Skills.vue'
   import Art from '../components/Art.vue'
   import Experience from '../components/Experience.vue'

   onMounted(() => {
      M.AutoInit();
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
      </div>
</template>

<style>
   .container {
      width: 75% !important;
   }

   @media screen and (max-width: 600px) {
      .container {
         width: 90% !important;
      }
   }
</style>