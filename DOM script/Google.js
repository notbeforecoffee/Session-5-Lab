// Let's Make the Google Logo Spin!


// first use 'inspect' in the developer tools to verify what the class name is for the google logo, in our case, 'lnXdpd'.  This classname changes, based on whether Google is using a 'Google Doodle' that day or not.

document.querySelector('.lnXdpd').setAttribute('id','spinspinspin');


//Validate that it worked
document.getElementById('spinspinspin')


//assign it to a variable for expediency.  We could also have skipped a step earlier, and assigned 'logo' directly, instead of 'spinspinspin', but I want you to see the various methods in action!
const logo = document.getElementById('spinspinspin')

// apply our first style property
logo.style.transition = 'rotate 3000ms ease-in-out';

// add a function, that listens for our mouse movement
logo.addEventListener('mouseover', (e) => {
    e.target.style.rotate = '1440deg'
})

//add a second function that resets the logo's position on mouse out
logo.addEventListener('mouseout', (e) => {
    e.target.style.rotate = '0deg'
})



//Make the Whole Page Spin!
document.body.setAttribute('id', 'spin')

const page = document.getElementById('spin')

page.style.transition = 'rotate 3000ms ease-in-out'

page.style.rotate = '1440deg'



//Change the text for the 'Search' and 'I'm Feeling Lucky' Buttons 

const search = document.getElementsByClassName('gNO89b')

// if you type 'search' in the console again, you will see a HTMLCollection object returned.  This object is a pseudo Array, and we can access items within it it using [], just like an array

search[1].value = 'Unfound Things' 

const lucky = document.getElementsByClassName('RNmpXc')

lucky[1].value = 'Dirty Harry Option'

lucky[1].style.background='blue' 


