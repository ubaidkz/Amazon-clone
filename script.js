document.querySelectorAll('.product-carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const leftBtn = carousel.querySelector('.nav.left');
  const rightBtn = carousel.querySelector('.nav.right');

  const scrollAmount = 300;

  leftBtn.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});





const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
    
  });
});



let search = document.querySelector(".nav-search");

search.addEventListener("click", (e) => {
  e.stopPropagation(); 
  search.style.border = "3px solid #faad48";
});

document.addEventListener("click", () => {
  search.style.border = "none"; 
});





let prevScrollPos = window.pageYOffset;
const navbar1 = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    navbar1.style.top = "0";
  } else {
    // Scrolling down
    navbar1.style.top = "-60px"; // Hide off screen
  }

  prevScrollPos = currentScrollPos;
});
