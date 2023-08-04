<script setup>
   import { store } from '../store/store.js'
   import { onMounted, ref, watch } from 'vue'

   watch(() => store.activeValue, (newValue) => {})

</script>

<template>
   <header v-if="store.navVisible">
      <ul class="section">
         <li><img class="logo nav-link link-top" src="../assets/images/bruce.gif" @click="store.scrollTo('top')"></li>
         <li class="nav-link link-about" @click="store.scrollTo('about')">About</li>
         <li class="nav-link link-skil" @click="store.scrollTo('skills')">Skills</li>
         <li class="nav-link link-projects" @click="store.scrollTo('projects')">Projects</li>
         <li class="nav-link link-art" @click="store.scrollTo('art')">Artwork</li>
         <li class="nav-link link-experience" @click="store.scrollTo('experience')">Experience</li>
      </ul>
   </header>
</template>

<style>
   header {
      display: inline-block;
      width: 100px;
      position: fixed;
      z-index: 1000;
      font-size: 14px;
   }

   .logo {
      width: 50px;
      height: 50px;
      border-radius: 100px;
      margin-left: 10px;
   }

   .nav-link {
      margin-left: 5px;
      padding-left: 5px;
      color: #969696;
   }

   .active-nav {
      color: #ef5350;
      border-left: 2px solid #ef5350;
   }
   .nav-link:hover {
      cursor: pointer;
      color: #ef5350;
      border-left: 2px solid #ef5350;
      transition: all .2s ease-in-out;
   }
</style>