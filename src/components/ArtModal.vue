<script setup>
   import {
      ref,
      onMounted
   } from 'vue'
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

   const items = ref([{
         imageUrl: BruceLeeImg,
         id: '#art14'
      },
      {
         imageUrl: WalkenImg,
         id: '#art9'
      },
      {
         imageUrl: ShredderImg,
         id: '#art2'
      },
      {
         imageUrl: DarthMaulImg,
         id: '#art3'
      },
      {
         imageUrl: FrankImg,
         id: '#art1'
      },
      {
         imageUrl: LeonImg,
         id: '#art4'
      },
      {
         imageUrl: SpidermanImg,
         id: '#art7'
      },
      {
         imageUrl: HellboyImg,
         id: '#art15'
      },
      {
         imageUrl: HalloweenImg,
         id: '#art8'
      },
      {
         imageUrl: ThrillerImg,
         id: '#art12'
      },
      {
         imageUrl: TmntImg,
         id: '#art6'
      },
      {
         imageUrl: AntonImg,
         id: '#art10'
      },
   ])
</script>

<template>
   <div v-for="item in items" :key="item.id" :id="item.id" class="modal">
      <div class="modal-content">
         <img :src="item.imageUrl" class="center-align modal-img" />
      </div>
   </div>
</template>

<style>
   .modal {
      height: auto;
      width: fit-content;
      padding: 15px;
      background-color: transparent;
      display: inline;
      overflow: initial;
   }

   .modal .modal-content {
      padding: 0px !important;
      width: 20%;
   }

   .modal-img {
      width: 400px;
   }
      
   @media screen and (max-width: 600px) {
      .modal-img {
         width: 250px;
      }
   }
</style>