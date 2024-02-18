//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger-menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  currentSlide = index;
}

function nextSlide() {
  showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  showSlide(
    (currentSlide - 1 + slides.length) % slides.length
  );
}

showSlide(currentSlide);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
  });
});

function handleSlide(slider, direction) {
  var slides = $(slider).find('.slide');
  if(slides.length < 1) return;

  // Register active slide
  var activeSlide = $(slider).find('.active');

  // Next function
  if (direction == 'next') {
    slides.last().after(slides.first());
    activeSlide.removeClass('active').next('.slide').addClass('active');
  }

  // Previous function
  if (direction == 'previous') {
    slides.first().before(slides.last());
    activeSlide.removeClass('active').prev('.slide').addClass('active');
  }

  // Move the first slide to the end when at the last slide
  if (activeSlide.is(slides.last())) {
    slides.first().appendTo(slider);
  }

  // Move the last slide to the start when at the first slide
  if (activeSlide.is(slides.first())) {
    slides.last().prependTo(slider);
  }
}

setInterval(nextSlide, 3000);

const inputImagePath = 'input-image.jpg';
const outputImagePath = 'output-image.jpg';
const width = 400; // Set the desired width

sharp(inputImagePath)
  .resize(width)
  .toFile(outputImagePath, (err, info) => {
    if (err) {
      console.error('Error resizing the image:', err);
    } else {
      console.log('Image resized successfully:', info);
    }
  });