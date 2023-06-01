// create and append elements to document 

// our lightbox exists all the time, but  we can use css to make sure it doesn't display until we want it to
// this div contains only the background opacity (like an overlay, and it covers the whole screen)
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// creating the child element of the lightbox overlay above
const lightboxImg = document.createElement('img');
lightboxImg.id = 'lightboxImg';
lightbox.appendChild(lightboxImg);


// create array from gallery images

// querySelectorAll does exactly what it says on the tin, and puts those elements in an array
const images = document.querySelectorAll('.gallery img');

// listen for click event, for all images in array

// populate image on click event
//'images is the array, and each 'image' is the element we want to effect
// 'e' can be anything you want, but 'e' or 'event' is the convention
images.forEach((image) => {
  //for each image, it adds an event listener, for onClick
  image.addEventListener('click', (e) => {
    //if the element gets clicked, the lightbox image src === the element src,
    lightboxImg.src = image.src;
    // adds a class to the list of classes that the element ('image') has
    // 'active' is used by the css to make the lightbox display whatever the currently selected element is
    lightbox.classList.add('active');
  });
});

//hide lightbox when clicking anywhere outside of the image

//here we are adding an event listener to the modal itself, allowing us to close it with a 'click', as long as we click outside of the picture
lightbox.addEventListener('click', (e) => {
    // e.currentTarget is whatever you click on, but e.target ONLY refers to the parent element ('lightbox')  NOT to it child elements ('images')
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
});
