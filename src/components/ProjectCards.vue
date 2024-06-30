<script setup>
   import { ref } from 'vue'
   import { useIntersectionObserver, useAnimate } from '@vueuse/core'
   import { store } from '../store/store.js'
   import MarvelImg from '../assets/images/marvel.png'
   import RickMortyImg from '../assets/images/rick_morty.jpeg'
   import PlanetariumImg from '../assets/images/stars.jpeg'
   import KeyboardImg from '../assets/images/keyboard.png'
   import PikaImg from '../assets/images/pika.jpg'
   import GoogleImg from '../assets/images/google_books.png'
   import router from '../router/index.js'

   const isVisible = ref(false);
   const projectsRef = ref(null);
   const keyframes = [
      { opacity: 0, transform: 'translateX(20px)'},
      { opacity: 1 },
   ]

   const {isActive} = useIntersectionObserver(projectsRef, ([{ isIntersecting }]) => {
      if(!isVisible.value && isIntersecting) {
         isVisible.value = true;
         useAnimate(projectsRef, keyframes, {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out',
         })
      }
   });

   const projects = ref([
      {
         title: 'Google Books',
         link: 'https://ihartcode-vue-google-books.netlify.app/',
         imageUrl: GoogleImg,
         description: 'A web app built with Vue.js and the Google Books API. Search for books and save them to your library.',
      },
      {
         title: 'Virtual Keyboard',
         link: 'https://ihartcode-virtual-keyboard.netlify.app/#/',
         imageUrl: KeyboardImg,
         description: `A virtual keyboard made with Vue.js and materialize css. Use your keyboard to play or touch if you're on mobile`,
      },
      {
         title: 'Marvel',
         link: 'https://ihartcode-marvel.netlify.app',
         imageUrl: MarvelImg,
         description: 'A web app using the Marvel API and built with Vue & Bootstrap',
      },
      {
         title: 'Memory Game',
         link: 'memory-match/index.html',
         imageUrl: PikaImg,
         description: 'A Pokemon memory game. Help Ash with his memory and flex your own.',
      },
   ])

   const pokemonNav = () => {
      router.push({ name: 'pokemon' })
   }
</script>

<template>
   <section id="projects" ref="projectsRef" class="projects section scrollspy">
      <div class="row padded-top">
         <div class="col s12 title">
            <h3 id="projects-title" class="center-align">Fun Projects</h3>
         </div>
      </div>
      <div class="row">
         <div v-for="project in projects" :key="project.title" class="col s12 m12 l6" style="margin-bottom: 15px;">
            <div class="card small z-depth-3 hoverable">
               <div class="card-image waves-effect waves-block waves-light">
                  <img width="100%" :src="project.imageUrl" class="activator" />
               </div>
               <div class="card-content grey darken-4">
                  <span class="card-title">{{ project.title }}
                     <i class="material-icons right clickable activator">more_vert</i></span>
                  <p class="clickable activator">Read More</p>
               </div>
               <div class="card-reveal grey darken-4 text-white">
                  <span class="card-title">{{project.title}}<i class="material-icons right">close</i></span>
                  <p>{{project.description}}</p>
                  <div class="row">
                     <a v-if="project.imageUrl === PikaImg" class="waves-effect waves-light btn-small blue lighten-1 hoverable" @click="pokemonNav">View Project</a>
                     <a v-else class="waves-effect waves-light btn-small blue lighten-1 hoverable" :href="project.link"
                        target="_blank">View
                        Project</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<style>
   .projects {
      opacity: 0;
   }

   .projects .card {
      background-color: #212121 !important;
   }

   .projects .card-title {
      font-size: 18px;
   }

   .projects .card-content p a {
      font-size: 12px;
   }

   .projects img {
      min-height: 200px;
   }

   .projects .card:hover {
      transform: scale(1.05);
      transition: all .3s ease 0s;
   }

   .projects .btn-small {
      font-size: 10px;
      margin: 10px;
   }

   .card .card-reveal .card-title {
      margin-bottom: 10px;
   }
</style>