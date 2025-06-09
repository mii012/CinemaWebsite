const a1 = () => {
    document.getElementById("mainPage").style.display = 'block'
    document.getElementById("reviewPage").style.display = 'none'
    document.getElementById("favoritePage").style.display = 'none'
    document.getElementById("recommendationPage").style.display = 'none'
}   

//canvas animation     

window.addEventListener('load', function () {
    var
      img = new Image,
      ctx = document.getElementById('canvas').getContext('2d');
  
    img.src = './pictures/ghost.png';
    img.addEventListener('load', function () {
  
      var interval = setInterval(function() {
        var x = 0, y = 10;
  
        return function () {
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          ctx.drawImage(img, x, y, 40, 40);
  
          x += 1;
          if (x > ctx.canvas.width) {
            x = 0;
          }
        };
      }(), 1000/100);
    }, false);
}, false);


// slideshow 1

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//2

let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(m) {
  showSlides2(slideIndex2 += m);
}

// Thumbnail image controls
function currentSlide2(m) {
  showSlides2(slideIndex2 = m);
}

function showSlides2(m) {
  let j;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  if (m > slides2.length) {slideIndex2 = 1}
  if (m < 1) {slideIndex2 = slides2.length}
  for (j = 0; j < slides2.length; j++) {
    slides2[j].style.display = "none";
  }
  for (j = 0; j < dots2.length; j++) {
    dots2[j].className = dots2[j].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
}

//3

let slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(o) {
  showSlides3(slideIndex3 += o);
}

// Thumbnail image controls
function currentSlide3(o) {
  showSlides3(slideIndex3 = o);
}

function showSlides3(o) {
  let p;
  let slides3 = document.getElementsByClassName("mySlides3");
  let dots3 = document.getElementsByClassName("dot3");
  if (o > slides3.length) {slideIndex3 = 1}
  if (o < 1) {slideIndex3 = slides3.length}
  for (p = 0; p < slides3.length; p++) {
    slides3[p].style.display = "none";
  }
  for (p = 0; p < dots3.length; p++) {
    dots3[p].className = dots3[p].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += " active";
}

