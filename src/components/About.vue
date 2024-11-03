<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver, useAnimate } from '@vueuse/core'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

const isVisible = ref(false);
const about = ref(null);
const playerRef = ref(null);
const keyframes = [
   { opacity: 0, transform: 'translateX(20px)' },
   { opacity: 1 },
]

onMounted(() => {
   const dotLottie = playerRef.value.getDotLottieInstance();
   useIntersectionObserver(about, ([{ isIntersecting }]) => {
      if (!isVisible.value && isIntersecting) {
         isVisible.value = true;
         useAnimate(about, keyframes, {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out',
         });
         dotLottie.play();
      }
   });
})
</script>

<template>
   <section id="about" class="about section scrollspy" ref="about">
      <div class="row padded-top">
         <div class="col m12 l6 push-l6">
            <h3 class="center-align">About Me</h3>
            <p>
               I’m a passionate Software Engineer who thrives on problem-solving and crafting elegant web and mobile
               applications. Beyond coding, I enjoy playing musical instruments and drawing, which fuel my creativity. I
               love blending my artistic flair with my technical expertise to develop exceptional products and engaging
               user experiences. If you’re seeking a versatile engineer with a diverse skill set, I’d love to connect! Feel
               free to reach out on
            </p>
            <p>
               <a href="https://www.linkedin.com/in/isaac-hartwick-44b883117" target="_blank" class="link">LinkedIn <i class="fa-brands fa-linkedin"></i></a>
            </p>
         </div>
         <div class="col m12 l6 pull-l6 web-apps">
            <DotLottieVue style="height: 350px; width: 350px" ref="playerRef" src="https://lottie.host/3dee8212-5a42-461e-ab33-9532ed53c712/vL3D8GDsrL.json" />
         </div>
      </div>
   </section>
</template>

<style scoped>
   .about {
      opacity: 0;
      margin-top: 50px;
   }

   .about .web-apps {
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .about .web-apps img {
      max-width: 80%;
   }
</style>