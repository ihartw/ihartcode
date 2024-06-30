<script setup>
   import { ref } from 'vue'
   import { store } from '../store/store.js'
   import { useIntersectionObserver, useAnimate } from '@vueuse/core'

   const isVisible = ref(false);
   const skills = ref(null);
   const bar = ref(document.querySelectorAll('.bar-fill'));
   const keyframes = [
      { opacity: 0},
      { opacity: 1, transform: 'translateX(20px)' },
   ]

   const barfill = [
      { width: '0%' },
      { width: '100%' },
   ]

   const {isActive} = useIntersectionObserver(skills, ([{ isIntersecting }]) => {
      if(!isVisible.value && isIntersecting) {
         isVisible.value = true;
         useAnimate(skills, keyframes, {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out',
         });
         document.querySelectorAll('.bar-fill').forEach(i => {
            useAnimate(i, barfill, {
               duration: 4000,
               fill: 'forwards',
               easing: 'ease-in-out',
            });
         });
      }
   });

</script>

<template>
   <section id="skills" ref="skills" class="skills section scrollspy">
      <div class="row">
         <div class="col s11 l6">
            <h3 class="center-align">My Skills</h3>
            <p>
               The languages and frameworks listed are what I've worked with the most but I have exposure to all sorts
               of web technologies and work to expand my Fullstack knowledge. I'm mostly interested in UI development
               with frameworks like Vue or React but I'm always interested in anything Web Dev related.
            </p>
            <p>Check out some of my work at
               <a href="https://github.com/ihartw" target="_blank" class="link">GitHub</a>
            </p>
         </div>
         <div class="col s11 l6">
            <div class="bar-title">JavaScript<span class="align-right"></span></div>
            <div class="bar">
               <div class="bar-fill"></div>
            </div>
            <div class="bar-title">React<span class="align-right"></span></div>
            <div class="bar">
               <div class="bar-fill"></div>
            </div>
            <div class="bar-title">React Native<span class="align-right"></span></div>
            <div class="bar">
               <div class="bar-fill" ></div>
            </div>
            <div class="bar-title">Vue<span class="align-right"></span></div>
            <div class="bar">
               <div class="bar-fill" ></div>
            </div>
            <div class="bar-title">HTML5 &amp; CSS3<span class="align-right"></span></div>
            <div class="bar">
               <div class="bar-fill" ></div>
            </div>
            <div class="bar-title">Git &amp; GitHub<span class="align-right"></span></div>
            <div class="bar">
               <div class="bar-fill" ></div>
            </div>
            <div class="bar-title">REST API<span class="align-right"></span></div>
            <div class="bar">
               <div class="bar-fill" ></div>
            </div>
            <div class="bar-title">Bitbucket<span class="align-right"></span></div>
            <div class="bar">
               <div class="bar-fill" ></div>
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped>
   .skills {
      opacity: 0;
   }
   .bar-title {
      font-size: 12px;
      margin-bottom: 5px;
      margin-top: 20px;
      color: #bfbfbf
   }

   .bar {
      width: 100%;
      height: 3px;
      background: #777;
   }

   .bar-fill {
      height: 3px;
   }

   .bar,
   .bar-fill {
      border-radius: 3px
   }
</style>