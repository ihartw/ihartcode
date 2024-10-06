<script>
   export default {
      name: 'AnimatedText',
      props: {
         text: {
            type: String,
            required: true,
         },
      },
   };
</script>

<template>
   <div class="animated-text">
      <span v-for="(letter, index) in text" :key="index" class="letter" :class="{'highlight': index > 5 }" :style="{ animationDelay: `${index * 0.1}s` }">
         {{ letter }}
      </span>
   </div>
</template>
  
<style>
   .animated-text {
      display: flex;
   }

   .letter {
      opacity: 0;
      transform: translateY(10px);
      animation: fadeInUp 0.5s forwards;
      color: black;
      font-size: 30px;
      margin: 10px 0;
      font-family: Lekton, sans-serif;
   }

   @keyframes fadeInUp {
      to {
         opacity: 1;
         transform: translateY(0);
      }
   }
</style>
  