import { confetti } from './confetti.js';
import { useAnimate } from '@vueuse/core'

export const pokemonInit = () => {
   const flipCard = document.querySelectorAll('.flip-card');
   const countDown = document.querySelector('.countdown h1');
   const matchGame = document.querySelector('.match-game');
   const gameCompleted = document.querySelector('.game-completed');
   const playBtn = document.querySelector('.play-btn');
   const playAgain = document.querySelector('.play-again-btn');
   let firstCardClass;
   let firstCard;
   let secondCardClass;
   let secondCard;
   let flippedCardsCount = 0;
   let completedCount = 0;
   let pokemonArr = ['blastoise', 'charazard', 'clefairy', 'mewtwo', 'pikachu', 'venusaur', 'blastoise',
      'charazard', 'clefairy', 'mewtwo', 'pikachu', 'venusaur'
   ];
   const keyframes = [{
         opacity: 0
      },
      {
         opacity: 1
      }
   ]

   function startCountdown() {
      flipCard.forEach(card => {
         const randomIndex = Math.floor(Math.random() * pokemonArr.length);
         const pokemonName = pokemonArr.splice(randomIndex, 1)[0];
         card.classList.add(pokemonName);
         card.children[0].children[1].classList.add(`${pokemonName}-back`);
      });

      countDown.style.display = 'block';
      countDown.textContent = '3';
      setTimeout(() => {
         countDown.textContent = '2';
      }, 1000);
      setTimeout(() => {
         countDown.textContent = '1';
      }, 2000);
      setTimeout(() => {
         countDown.textContent = 'GO!';
      }, 3000);
      setTimeout(() => {
         countDown.style.display = 'none';
         matchGame.style.display = 'block';
         useAnimate(matchGame, keyframes, {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out',
         })
         document.querySelectorAll('.flip-card-inner').forEach(card => {
            card.classList.add('flipped');
         });
      }, 4400);
      setTimeout(() => {
         document.querySelectorAll('.flip-card-inner').forEach(card => {
            card.classList.remove('flipped');
         });
      }, 5000);
   }

   playBtn.addEventListener('click', () => {
      document.querySelector('.intro').style.display = 'none';
      startCountdown();
   });

   flipCard.forEach(card => {
      card.addEventListener('click', () => {
         flippedCardsCount++;

         if (flippedCardsCount === 1) {
            firstCardClass = card.classList[1];
            firstCard = card;
            card.classList.add('disabled');
         }

         if (flippedCardsCount === 2) {
            secondCardClass = card.classList[1];
            secondCard = card;

            if (firstCardClass === secondCardClass) {
               card.classList.add('disabled');
               flippedCardsCount = 0;
               completedCount++;
            } else {
               setTimeout(() => {
                  firstCard.children[0].classList.remove('flipped');
                  firstCard.classList.remove('disabled');
                  secondCard.children[0].classList.remove('flipped');
                  secondCard.classList.remove('disabled');
                  flippedCardsCount = 0;
               }, 500);
            }
         }

         card.children[0].classList.toggle('flipped');

         if (completedCount === 6) {
            setTimeout(() => {
               matchGame.style.display = 'none';
               gameCompleted.style.display = 'block';
               playAgain.style.display = 'block';
               flipCard.forEach(card => {
                  card.classList.remove('disabled');
               });
               confetti.start();
            }, 800);
         }
      });
   });

   function reset() {
      completedCount = 0;
      flippedCardsCount = 0;
      pokemonArr = ['blastoise', 'charazard', 'clefairy', 'mewtwo', 'pikachu', 'venusaur', 'blastoise',
         'charazard', 'clefairy', 'mewtwo', 'pikachu', 'venusaur'
      ];
      gameCompleted.style.display = 'none';
      flipCard.forEach(card => {
         card.classList.forEach(className => {
            if (pokemonArr.includes(className)) {
               card.classList.remove(className);
            }
         });
      });
      document.querySelectorAll('.flip-card-back').forEach(card => {
         card.classList.forEach(className => {
            if (pokemonArr.includes(className)) {
               card.classList.remove(className);
            }
         });
      });
      document.querySelectorAll('.flip-card-inner').forEach(card => {
         card.classList.remove('flipped');
      });
      confetti.stop();
   }

   playAgain.addEventListener('click', () => {
      reset();
      startCountdown();
   });
}