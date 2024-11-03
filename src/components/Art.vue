<script setup>
   import Carousel from './Carousel.vue'
   import ArtModal from './ArtModal.vue'
</script>

<template>
   <section id="art" class="section scrollspy">
      <div class="row padded-top">
         <div class="col s12 title">
            <h3 class="description center-align">Artwork</h3>
         </div>
      </div>
      <div class="valign-wrapper">
         <carousel></carousel>
         <art-modal></art-modal>
      </div>
   </section>
</template>
<style scoped>
   #art {
      margin-bottom: 50px;
      margin-top: 100px;
   }
</style>