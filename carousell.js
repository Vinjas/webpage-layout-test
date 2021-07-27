const imageNumberDefault = 1;
var imageNumber = imageNumberDefault;

function nextImage(n) {
    carousell(imageNumber += n);
}

function currentImage(n) {
    carousell(imageNumber = n);
}

function carousell(n) {
    var number = document.getElementsByClassName("main-wrapper-carousell");
    var dots = document.getElementsByClassName("main-dots__dot");

    if (n > number.length) {
        imageNumber = 1
    }
    if (n < 1) {
        imageNumber = number.length
    }

    for (let i = 0; i < number.length; i++) {
        number[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    number[imageNumber - 1].style.display = "block";
    dots[imageNumber - 1].className += " active";
} 

carousell(imageNumberDefault);