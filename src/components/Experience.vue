<script setup>
   import { ref } from 'vue'
   import { store } from '../store/store.js'
   import { useIntersectionObserver, useAnimate } from '@vueuse/core'

   const isVisible = ref(false);
   const experience = ref(null);
   const resumeLine = ref(null);
   const keyframes = [
      { opacity: 0, transform: 'translateX(20px)'},
      { opacity: 1 },
   ]

   const line = [
      { height: '1px'},
      { height: '80%' },
   ]

   const {isActive} = useIntersectionObserver(experience, ([{ isIntersecting }]) => {
      if(!isVisible.value && isIntersecting) {
         isVisible.value = true;
         useAnimate(experience, keyframes, {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out',
         })
         useAnimate(resumeLine, line, {
            duration: 3000,
            fill: 'forwards',
            easing: 'ease-in-out',
         })
      }
   });

</script>
<template>
   <section id="experience" class="section scrollspy experience" ref="experience">
      <div class="row">
         <div class="col s12 title">
            <h3 id="xp" class="center-align">Experience</h3>
         </div>
      </div>
      <div class="row timeline-container">
         <div class="timeline" ref="resumeLine"></div>
         <div class="row">
            <div class="time">May 2021 - Present</div>
            <div class="details"><span class="strong">Kyndr by Infiniscape</span><br>Senior Frontend Engineer</div>
         </div>
         <div class="row">
            <div class="time">May 2019 - Sep 2020</div>
            <div class="details"><span class="strong">EverFi, Inc</span><br>Front End Developer</div>
         </div>
         <div class="row">
            <div class="time">Mar 2017 - April 2019</div>
            <div class="details"><span class="strong">eDriving, LLC</span><br>Lead Front End Developer</div>
         </div>
         <div class="row">
            <div class="time">Aug 2017 - Oct 2017</div>
            <div class="details"><span class="strong">Scribd</span><br>Freelance Front End Developer</div>
         </div>
         <div class="row">
            <div class="time">Nov 2016 - Feb 2017</div>
            <div class="details"><span class="strong">CBS Interactive</span><br>Software Engineer (Contract)
            </div>
         </div>
         <div class="row">
            <div class="time">Jan 2016 - Aug 2017</div>
            <div class="details"><span class="strong">Codify Academy</span><br>Lead Mentor | Front End
               Developer</div>
         </div>
      </div>
   </section>
</template>

<style>
   .experience {
      opacity: 0;
      padding-bottom: 50px;
      padding-top: 100px;
   }

   .timeline-container {
      margin-left: 50px;
   }

   .timeline {
      display: block;
      opacity: 1;
      width: 1px;
      height: 1px;
      position: absolute;
      left: 24px;
      background: #777;
      -webkit-transition: all 2s ease-out;
      -moz-transition: all 2s ease-out;
      -ms-transition: all 2s ease-out;
      -o-transition: all 2s ease-out;
      transition: all 2s ease-out;
      margin-top: 35px;
      overflow: hidden
   }

   .time {
      font-size: 12px;
   }

   .time:before {
      content: "\A";
      display: inline-block;
      position: relative;
      top: 20px;
      left: -30px;
      width: 9px;
      height: 9px;
      border: 1px solid #ef5350;
      background: #ef5350;
      -webkit-border-radius: 100%;
      -moz-border-radius: 100%;
      border-radius: 100%
   }

   .details {
      margin-left: 10px;
   }

   .strong {
      font-weight: 800;
      color: white;
   }
</style>