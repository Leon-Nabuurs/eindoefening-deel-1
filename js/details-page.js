var slideIndex = 1;
showSlides_L(slideIndex);
showSlides_P(slideIndex);

function plusSlides_L(n) {
  showSlides_L(slideIndex += n);
}

function currentSlide_L(n) {
  showSlides_L(slideIndex = n);
}

function showSlides_L(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_L");
  var dots = document.getElementsByClassName("dot_L");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "inline-block";  
  dots[slideIndex-1].className += " active";
}

function plusSlides_P(n) {
  showSlides_P(slideIndex += n);
}

function currentSlide_P(n) {
  showSlides_P(slideIndex = n);
}

function showSlides_P(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_P");
  var dots = document.getElementsByClassName("dot_P");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "inline-block";  
  dots[slideIndex-1].className += " active";
}
