const images = document.querySelectorAll('.cont-second img');
let currentIndex = 0; 
let allImagesShown = false; 

function showNextImage() {
  if (currentIndex < images.length && !allImagesShown) {
 
    images[currentIndex].classList.add('show');
    currentIndex++;
    setTimeout(showNextImage, 500); 
  } else if (currentIndex === images.length && !allImagesShown) {
    
    allImagesShown = true;
    currentIndex = 0;
    setTimeout(hideNextImage, 3000); 
  }
}

function hideNextImage() {
  if (currentIndex < images.length) {
  
    images[currentIndex].classList.remove('show');
    images[currentIndex].classList.add('hide');
    currentIndex++;
    setTimeout(hideNextImage, 500); 
  } else {
    
    allImagesShown = false;
    currentIndex = 0;
    images.forEach((img) => img.classList.remove('hide'));
    setTimeout(showNextImage, 1000);
  }
}

setTimeout(showNextImage, 0);