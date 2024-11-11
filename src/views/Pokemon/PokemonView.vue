<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useIntersectionObserver, useAnimate } from '@vueuse/core'
import { pokemonInit } from './js/pokemon.js'
import { confetti } from './js/confetti.js'

const isVisible = ref(false);
const pokemonContainer = ref(null);
const keyframes = [
   { opacity: 0, transform: 'translateY(20px)' },
   { opacity: 1 },
]

onMounted(() => {
   useIntersectionObserver(pokemonContainer, ([{ isIntersecting }]) => {
      if (!isVisible.value && isIntersecting) {
         isVisible.value = true;
         useAnimate(pokemonContainer, keyframes, {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out',
         })
      }
   });
   pokemonInit();
});

onUnmounted(() => {
   confetti.stop();
});
</script>

<template>
   <div class="game-container">
      <div ref="pokemonContainer">
         <div class="intro">
            <div class="row center-align">
               <div class="col s12 m6">
                  <div class="row">
                     <p class="left-align" id="introText"></p>
                  </div>
                  <div class="row">
                     <a class="waves-effect waves-light btn light-blue lighten-1 play-btn">Play</a>
                  </div>
               </div>
               <div class="col s12 m6">
                  <img src="./img/ash.png" alt="" width="200px">
               </div>
            </div>
         </div>

         <div class="countdown">
            <h1></h1>
         </div>

         <div class="game-completed">
            <a class="waves-effect waves-light btn light-blue lighten-1 play-again-btn">Shuffle & Play Again</a>
            <img src="./img/pikachu-success.gif" alt="" width="100px">
         </div>

         <div class="match-game">
            <div class="row center-align">
               <img src="./img/pokemon-logo.png" alt="Pokemon Logo Image" class="pokemon-logo">
            </div>

            <div class="row">
               <div class="col s6 m3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front"></div>
                        <div class="flip-card-back"></div>
                     </div>
                  </div>
               </div>
               <div class="col s6 m3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front"></div>
                        <div class="flip-card-back"></div>
                     </div>
                  </div>
               </div>
               <div class="col s6 m3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front"></div>
                        <div class="flip-card-back"></div>
                     </div>
                  </div>
               </div>
               <div class="col s6 m3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front"></div>
                        <div class="flip-card-back"></div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="row">
               <div class="col s6 m3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front"></div>
                        <div class="flip-card-back"></div>
                     </div>
                  </div>
               </div>
               <div class="col s6 m3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front"></div>
                        <div class="flip-card-back"></div>
                     </div>
                  </div>
               </div>
               <div class="col s6 m3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front"></div>
                        <div class="flip-card-back"></div>
                     </div>
                  </div>
               </div>
               <div class="col s6 m3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front"></div>
                        <div class="flip-card-back"></div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="row">
               <div class="col s6 m3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front"></div>
                        <div class="flip-card-back"></div>
                     </div>
                  </div>
               </div>
               <div class="col s6 m3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front"></div>
                        <div class="flip-card-back"></div>
                     </div>
                  </div>
               </div>
               <div class="col s6 m3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front"></div>
                        <div class="flip-card-back"></div>
                     </div>
                  </div>
               </div>
               <div class="col s6 m3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front"></div>
                        <div class="flip-card-back"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
.game-container {
   background-color: #fff9c4;
   font-family: 'Press Start 2P', cursive;
   padding-top: 50px;
   min-height: 100vh;
}

#introText {
   min-height: 100px;
}

.play-btn {
   transition: all .3s ease-in-out;
}

.play-again-btn {
   display: block;
   width: 290px;
   margin: 0 auto;
   font-size: 12px;
}

.countdown h1 {
   margin: 200px auto;
   text-align: center;
   color: black;
}

.match-game {
   display: none;
   transition: all .3s ease-in-out;
}

.game-completed {
   display: none;
   margin: 200px auto;
   text-align: center;
}

.pokemon-logo {
   width: 280px;
   height: 100px;
   margin: 20px;
}

.flip-card {
   background-color: transparent;
   width: 180px;
   height: 200px;
   perspective: 1000px;
   margin: 0 auto;
}

.flip-card:hover {
   transition: all .1s ease-in-out;
   transform: scale(1.1);
   cursor: pointer;
}

.flip-card-inner {
   position: relative;
   width: 160px;
   height: 160px;
   text-align: center;
   transition: transform 0.5s;
   transform-style: preserve-3d;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
   border-radius: 50%;
}

.flip-card-front,
.flip-card-back {
   position: absolute;
   width: 100%;
   height: 100%;
   -webkit-backface-visibility: hidden;
   backface-visibility: hidden;
}

.flip-card-front {
   background: url('./img/pokeball.png');
   background-size: 120%;
   background-repeat: no-repeat;
   background-position: center;
   color: black;
   border-radius: 50%;
}

.flip-card-back {
   color: white;
   transform: rotateY(180deg);
   border-radius: 50%;
   padding: 10px;
}

.flipped {
   transform: rotateY(180deg);
}

.disabled {
   pointer-events: none;
}

.blastoise-back {
   background: url('./img/blastoise.png');
   background-size: 60%;
   background-repeat: no-repeat;
   background-position: center;
   background-color: #fff;
}

.charazard-back {
   background: url('./img/charazard.png');
   background-size: 70%;
   background-repeat: no-repeat;
   background-position: center;
   background-color: #fff;
}

.mewtwo-back {
   background: url('./img/mewtwo.png');
   background-size: 70%;
   background-repeat: no-repeat;
   background-position: center;
   background-color: #fff;
}

.pikachu-back {
   background: url('./img/pikachu.png');
   background-size: 70%;
   background-repeat: no-repeat;
   background-position: center;
   background-color: #fff;
}

.venusaur-back {
   background: url('./img/venusaur.png');
   background-size: 70%;
   background-repeat: no-repeat;
   background-position: center;
   background-color: #fff;
}

.clefairy-back {
   background: url('./img/clefairy.png');
   background-size: 50%;
   background-repeat: no-repeat;
   background-position: center;
   background-color: #fff;
}

@media (max-width: 850px) {
   .flip-card {
      width: 100px;
      height: 150px;
   }

   .flip-card-inner {
      width: 100px;
      height: 100px;
   }

   .pokemon-logo {
      width: 250px;
      height: 90px;
   }
}
</style>