import lightGallery from 'lightgallery';



const lightgalleries = document.querySelectorAll('#lightgallery');

if (lightgalleries) {
  lightgalleries.forEach(lightgallery => {
    lightGallery(lightgallery, {
      speed: 700,
    });
  });
}

