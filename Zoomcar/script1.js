var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
var slideIndex1  = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}
// Thumbnail image controls

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("cars");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

  function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("comment");
    if (n > slides.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex1-1].style.display = "block";
  }

 
 var slide=1; 
 slidecarousel(slide);

 function slidesplus(n) {
  slidecarousel(slide += n);
  
}
  var anim_timeout;
 function slidecarousel(n) {
  var i;
  
  var slides = document.getElementsByClassName("iconcarousel");
  if (n > 2) {slide = 1}
  if (n < 1) {slide = 2}
  if(n == 2) {slide = 2}
  if(n == 1) {slide = 1}
  
   
    if(slide == 1){
        
        slides[0].style.display="block"   
        slides[1].style.display="block"
        slides[2].style.display="block"
        slides[3].style.display="block"
        slides[4].style.display="block"
        slides[5].style.display="none"
        slides[6].style.display="none"
        slides[7].style.display="none"
        slides[8].style.display="none"
        slides[9].style.display="none"
      
    }

    if(slide==2){
      slides[0].style.display="none"   
      slides[1].style.display="none"
      slides[2].style.display="none"
      slides[3].style.display="none"
      slides[4].style.display="none"
      slides[5].style.display="block"
      slides[6].style.display="block"
      slides[7].style.display="block"
      slides[8].style.display="block"
      slides[9].style.display="block"

    }

    anim_timeout = setTimeout(slidecarousel,1000,slide+1);
    
  
}
 
function mouseinside(){    
  clearTimeout(anim_timeout);  
}
function mouseoutside(){
        
  anim_timeout = setTimeout(slidecarousel,1000,slide+1);
}