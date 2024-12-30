const numbers = document.querySelectorAll('.number');
let animationTriggered = false;

const container = document.querySelector('.why-choose-us'); // Target the specific container

container.addEventListener('mouseenter', () => {
  if (!animationTriggered) {
    animationTriggered = true; // Ensure animation runs only once on hover
    numbers.forEach((num) => {
      const target = +num.getAttribute('data-target'); // Target number
      let count = 0; // Start from 0

      const updateCounter = () => {
        if (count < target) {
          count += Math.ceil(target / 100); // Increment step
          if (count > target) count = target; // Ensure no overshoot
          num.textContent = count;
          requestAnimationFrame(updateCounter); // Smooth animation
        }
      };

      updateCounter();
    });
  }
});



function navigateToPage() {
  window.location.href = "contact.html";
}



function serviceToabout() {
  window.location.href = "about.html";
}