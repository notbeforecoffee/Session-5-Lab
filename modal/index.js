// create and append elements to document 

// our lightbox exists all the time, but  we can use css to make sure it doesn't display until we want it to
// this div contains only the background opacity contained in the css (like an overlay)
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// Creating the Child Element of the lightbox div Above
const lightboxImg = document.createElement('img');
lightboxImg.id = 'lightboxImg';
lightbox.appendChild(lightboxImg);


// Creating an Array from the Gallery Images

// querySelectorAll does exactly what it says on the tin by selecting all elements that share the identifier, and puts those elements in an array for us to use
const images = document.querySelectorAll('.gallery img');


// Listen for Click Event, for all Images in the Array

// populate image on click event
//'images' is the array, while each 'image' is the element we want to affect in that array
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


//Hide lightbox When Clicking Anywhere Outside of the Original Image

//here we are adding an event listener to the modal itself, allowing us to close it with a 'click', as long as we click outside of the picture
lightbox.addEventListener('click', (e) => {
    // e.currentTarget is whatever you click on, but e.target ONLY refers to the parent element ('lightbox')  NOT to it child elements ('images')
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
});
