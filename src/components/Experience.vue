<script setup>
import { ref } from 'vue'
import { useIntersectionObserver, useAnimate } from '@vueuse/core'

const isVisible = ref(false);
const experience = ref(null);
const resumeLine = ref(null);
const activeItem = ref({
   id: 1,
   date: 'May 2021 - Present',
   company: 'Kyndr',
   role: 'Senior Frontend Engineer',
   link: 'https://kyndr.com/#/join',
   details: [
      'Built and launched the Kyndr mobile app, a social media platform for Android & iOS using React Native, JavaScript, TestFlight, and more.',
      'Championed an Atomic design system leading to scalable front end architecture and reused throughout the company.',
      'Collaborated closely with backend developers, designers, and product managers to drive project success.',
      'Built an internal user dashboard for stake holders and users to create and moderate content within the app.',
   ]
});
const activeRole = ref(null);
const role = ref({
   id: 1,
   date: 'May 2021 - Present',
   company: 'Kyndr',
   role: 'Senior Frontend Engineer',
   link: 'https://kyndr.com/#/join',
   details: [
      'Built and launched the Kyndr mobile app, a social media platform for Android & iOS using React Native, JavaScript, TestFlight, and more.',
      'Championed an Atomic design system leading to scalable front end architecture and reused throughout the company.',
      'Collaborated closely with backend developers, designers, and product managers to drive project success.',
      'Built an internal user dashboard for stake holders and users to create and moderate content within the app.',
   ]
});
const companies = [
   {
      id: 1,
      date: 'May 2021 - Present',
      company: 'Kyndr',
      role: 'Senior Frontend Engineer',
      link: 'https://kyndr.com/#/join',
      details: [
         'Built and launched the Kyndr mobile app, a social media platform for Android & iOS using React Native, JavaScript, TestFlight, and more.',
         'Championed an Atomic design system leading to scalable front end architecture and reused throughout the company.',
         'Collaborated closely with backend developers, designers, and product managers to drive project success.',
         'Built an internal user dashboard for stake holders and users to create and moderate content within the app.',
      ]
   },
   {
      id: 2,
      date: 'May 2019 - Sep 2020',
      company: 'EverFi',
      role: 'Front End Developer',
      link: 'https://everfi.com/',
      details: [
         'Developed the interactive visual experience for numerous courses aimed at K-12 and higher education students.',
         'Created proprietary library and SDK of reusable components using React, Backbone.js, Handlebars, JSON, YAML, and JavaScript.',
         'Led and provided guidance on the development of diverse courses.',
      ]
   },
   {
      id: 3,
      date: 'Mar 2017 - April 2019',
      company: 'eDriving',
      role: 'Lead Front End Developer',
      link: 'https://www.edriving.com/',
      details: [
         'Partnered with the design team to create innovative and visually captivating web pages.',
         'Conducted A/B testing on PPC landing pages using Optimizely, leading to increased user conversions.',
         'Enhanced page load speeds by 15% through the implementation of lazy loading, client-side caching, and Lighthouse optimization.',
      ]
   },
   {
      id: 4,
      date: 'Aug 2017 - Oct 2017',
      company: 'Scribd',
      role: 'Front End Developer (Contract)',
      link: 'https://www.scribd.com/',
      details: [
         'Developed engaging landing pages for PPC ad campaigns to maximize conversion rates.',
      ]
   },
   {
      id: 5,
      date: 'Jan 2016 - Aug 2017',
      company: 'Codify Academy',
      role: 'Lead Mentor | Front End Developer',
      link: 'https://www.linkedin.com/company/codify-academy/about/',
      details: [
         'Taught the fundamentals of front end web development for a 16 week coding bootcamp covering HTML, CSS, JavaScript, Bootstrap, jQuery, and Angular.',
         `Co-Authored Codify's comprehensive library of textbooks & instructional videos.`,
         'Responsible for the development and maintenance of the company marketing website.',
      ]
   }
]

const keyframes = [
   { opacity: 0, transform: 'translateX(20px)' },
   { opacity: 1 },
]

const line = [
   { height: '1px' },
   { height: '200px' },
]

useIntersectionObserver(experience, ([{ isIntersecting }]) => {
   if (!isVisible.value && isIntersecting) {
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

const handleClick = (item) => {
   activeItem.value = item;

   useAnimate(activeRole, keyframes, {
      duration: 1000,
      fill: 'forwards',
      easing: 'ease-in-out',
   })
   role.value = item;
}

</script>

<template>
   <section id="experience" class="section scrollspy experience" ref="experience">
      <div class="row">
         <div class="col s12 title">
            <h3 id="xp" class="center-align">Experience</h3>
         </div>
      </div>
      <div class="row">
         <div class="col s12 m4">
            <div class="timeline-container">
               <div class="timeline" ref="resumeLine"></div>
               <div v-for="item in companies" :key="item.id" class="timeline-item" @click="handleClick(item)" :id="item.id"
                  :class="{ 'active-timeline-item': activeItem?.id === item.id }">
                  <span class="title">{{ item.company }}</span>
               </div>
            </div>
         </div>
         <div class="col s12 m8">
            <div class="active-role" ref="activeRole">
               <div v-if="role">
                  <h5>{{ role.role }} <a class="company clickable link" :href="role.link" target="_blank">{{
                     `@${role.company}` }}</a></h5>
                  <p>{{ role.date }}</p>
                  <ul>
                     <li v-for="detail in role.details" :key="detail">{{ detail }}</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped>
.experience {
   opacity: 0;
   padding-bottom: 50px;
   padding-top: 100px;
   margin-top: 200px;
}

.timeline-container {
   margin-left: 40px;
}

.timeline {
   display: block;
   opacity: 1;
   width: 1px;
   height: 1px;
   position: absolute;
   left: 25px;
   background: #777;
   -webkit-transition: all 2s ease-out;
   -moz-transition: all 2s ease-out;
   -ms-transition: all 2s ease-out;
   -o-transition: all 2s ease-out;
   transition: all 2s ease-out;
   margin-top: 25px;
   overflow: hidden
}

.strong {
   font-weight: 800;
   color: white;
}

.timeline-item {
   border-radius: 5px;
   width: 140px;
   display: flex;
   transition: background 0.5s ease;
   height: 45px;
   align-items: center;
   margin: 5px;
}

.timeline-item:before {
   content: "\A";
   display: inline-block;
   position: relative;
   top: 0px;
   left: -35px;
   width: 9px;
   height: 9px;
   border: 1px solid #ef5350;
   background: #ef5350;
   -webkit-border-radius: 100%;
   -moz-border-radius: 100%;
   border-radius: 100%
}

.timeline-item:hover {
   cursor: pointer;
   background: rgba(255, 255, 255, 0.1);
}

.active-timeline-item {
   background: rgba(255, 255, 255, 0.1);
   color: #ef5350;
}

.title {
   font-weight: 1000;
}

.company {
   font-weight: 900;
   color: #ef5350;
}

.active-role {
   height: 400px;
}

ul li {
   position: relative;
   padding-left: 30px;
   margin-bottom: 10px;
}

ul li:before {
   content: "▞";
   position: absolute;
   left: 0px;
   color: #ef5350;
}

@media screen and (max-width: 600px) {
   .timeline-container {
      margin-left: 0px;
      display: block ruby;
      overflow: scroll;
      display: flex;
      overflow-x: auto;
      gap: 10px;
      scroll-snap-type: x mandatory;
   }

   .timeline {
      display: none;
   }

   .timeline-item {
      justify-content: center;
      margin-right: 5px;
      padding: 0 20px;
      display: flex;
      min-width: 150px;
   }

   .timeline-item:before {
      display: none;
   }
}</style>