export const planetsInit = () => {
   let earth = document.querySelector('.earth');
   let solarSystem = document.querySelector('.solar-system');
   let planetItems = document.querySelector('.planet-items');
   let earthItem = document.querySelector('.earth-item');
   let mercuryItem = document.querySelector('.mercury-item');
   let venusItem = document.querySelector('.venus-item');
   let marsItem = document.querySelector('.mars-item');
   let jupiterItem = document.querySelector('.jupiter-item');
   let saturnItem = document.querySelector('.saturn-item');
   let uranusItem = document.querySelector('.uranus-item');
   let neptuneItem = document.querySelector('.neptune-item');
   let sunItem = document.querySelector('.sun-item');
   let planetItemTitle = document.querySelector('.planet-item-title');
   let backBtn = document.querySelector('.back-btn');

   function setStars() {
      let starsContainer = document.querySelector('.stars-container');
      let numberOfStars = Math.floor(window.innerWidth / 2);

      for (let i = 0; i < numberOfStars; i++) {
         starsContainer.innerHTML += '<div class="stars"></div>';
      }

      let stars = document.querySelectorAll('.stars');

      stars.forEach(function (star) {
         let starsYAxis = Math.floor(Math.random() * 150) + 1;
         let starsXAxis = Math.floor(Math.random() * 150) + 1;
         let starSize = Math.random();
         star.style.top = `${starsYAxis}%`;
         star.style.left = `${starsXAxis}%`;
         star.style.transform = `scale(${starSize})`;
      });

      function twinkleStars() {
         let random = Math.floor(Math.random() * stars.length)
         let twinklingStar = stars[random % stars.length];
         twinklingStar.classList.add('twinkle');

         setTimeout(function () {
            twinklingStar.classList.remove('twinkle');
         }, 500);
      };

      setInterval(function () {
         twinkleStars();
      }, 200);
   }

   function selectEarth() {
      earthItem.style.display = 'block';
      earthItem.classList.add('animate__animated', 'animate__zoomInLeft');
      planetItemTitle.textContent = 'Earth';
      setTimeout(function () {
         earthItem.classList.add('rotate-planet');
      }, 500);
   };

   function selectMercury() {
      mercuryItem.style.display = 'block';
      mercuryItem.classList.add('animate__animated', 'animate__zoomInLeft');
      planetItemTitle.textContent = 'Mercury';
      setTimeout(function () {
         mercuryItem.classList.add('rotate-planet');
      }, 500);
   };

   function backToSolarSystem() {
      planetItems.querySelectorAll('.planet-item').forEach(function (item) {
         item.classList.remove('animate__animated', 'animate__zoomInLeft', 'rotate-planet');
         item.style.display = 'none';
      });

      solarSystem.classList.remove('animate__animated', 'animate__fadeOut');
      solarSystem.classList.add('animate__animated', 'animate__fadeIn');
      solarSystem.querySelectorAll('.planet').forEach(function (planet) {
         planet.style.pointerEvents = 'all';
      });

      backBtn.style.opacity = '0';

      setTimeout(function () {
         solarSystem.classList.remove('animate__animated', 'animate__fadeIn');
      }, 500);
   };

   setStars();

   // Global actions that happen when any planet is clicked
   document.querySelectorAll('.planet').forEach(function (planet) {
      planet.addEventListener('click', function () {
         solarSystem.classList.add('animate__animated', 'animate__fadeOut');
         solarSystem.querySelectorAll('.planet').forEach(function (planet) {
            planet.style.pointerEvents = 'none';
         });
         planetItemTitle.style.display = 'block';
         planetItemTitle.classList.add('animate__animated', 'animate__zoomInLeft');
         backBtn.style.opacity = '.5';
      });
   });
}