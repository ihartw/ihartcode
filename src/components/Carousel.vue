<script setup>
   import { ref } from 'vue'
   import { store } from '../store/store.js'
   import { useIntersectionObserver, useAnimate } from '@vueuse/core'
   import BruceLeeImg from '../assets/images/bruce-lee1.jpeg'
   import WalkenImg from '../assets/images/walken.png'
   import ShredderImg from '../assets/images/shredder.jpeg'
   import DarthMaulImg from '../assets/images/darth-maul.jpeg'
   import FrankImg from '../assets/images/frank.jpeg'
   import LeonImg from '../assets/images/leon.jpeg'
   import SpidermanImg from '../assets/images/spiderman.png'
   import HellboyImg from '../assets/images/hellboy1.jpeg'
   import HalloweenImg from '../assets/images/halloween.png'
   import ThrillerImg from '../assets/images/thriller.png'
   import TmntImg from '../assets/images/tmnt4.jpeg'
   import AntonImg from '../assets/images/anton.jpeg'

   const isVisible = ref(false);
   const art = ref(null);
   const keyframes = [
      { opacity: 0},
      { opacity: 1, transform: 'translateX(20px)' },
   ]

   useIntersectionObserver(art, ([{ isIntersecting }]) => {
      if(!isVisible.value && isIntersecting) {
         isVisible.value = true;
         useAnimate(art, keyframes, {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out',
         })
      }
      isIntersecting ? store.activeValue = 'art' : null;
   });

   const items = ref([{
         imageUrl: BruceLeeImg,
         href: '#art14'
      },
      {
         imageUrl: WalkenImg,
         href: '#art9'
      },
      {
         imageUrl: DarthMaulImg,
         href: '#art3'
      },
      {
         imageUrl: FrankImg,
         href: '#art1'
      },
      {
         imageUrl: LeonImg,
         href: '#art4'
      },
      {
         imageUrl: AntonImg,
         href: '#art10'
      },
      {
         imageUrl: SpidermanImg,
         href: '#art7'
      },
      {
         imageUrl: HellboyImg,
         href: '#art15'
      },
      {
         imageUrl: HalloweenImg,
         href: '#art8'
      },
      {
         imageUrl: ThrillerImg,
         href: '#art12'
      },
      {
         imageUrl: TmntImg,
         href: '#art6'
      },
      {
         imageUrl: ShredderImg,
         href: '#art2'
      },
   ])
</script>

<template>
   <div class="carousel" ref="art">
      <div v-for="item in items" :key="item.href" class="carousel-item valign-wrapper">
         <a class="waves-effect waves-light modal-trigger" :data-target="item.href">
            <img :src="item.imageUrl" alt="" />
         </a>
      </div>
   </div>
</template>

<style>
   .modal-trigger:hover {
      cursor: zoom-in;
   }

   .carousel {
      opacity: 0;
      height: 400px !important;
   }

   .carousel-item {
      width: 300px !important;
      height: 300px;
   }

   .carousel-item img {
      width: 100%;
      object-fit: cover;
   }

   @media screen and (max-width: 600px) {
      .carousel-item {
         width: 190px !important;
      }
      .carousel-item img {
         width: 190px;
      }
   }
</style>