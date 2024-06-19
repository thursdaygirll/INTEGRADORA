document.addEventListener('DOMContentLoaded', () => {
    const images = [
      '../assets/images/bck.webp', // Corrected paths
      '../assets/images/v2.webp',
      '../assets/images/cat1.jpg'
    ];
    let currentImageIndex = 0;
    const banner = document.querySelector('.banner');
  
    function changeImage() {
      const currentImage = banner.querySelector('img.active');
      currentImage.classList.remove('active');
      currentImageIndex = (currentImageIndex + 1) % images.length;
      const nextImage = banner.querySelector(`img[data-index="${currentImageIndex}"]`);
      nextImage.classList.add('active');
    }
  
    images.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.setAttribute('data-index', index);
      if (index === 0) img.classList.add('active');
      banner.appendChild(img);
    });
  
    setInterval(changeImage, 3000);
  
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
      card.addEventListener("click", function() {
        // Toggle flipped class on the clicked card
        this.classList.toggle("flipped");
      });
    });
  });
  