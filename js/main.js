'use strict';

/* <div class="slide ">
<img src="img/01.jpg" alt="img-1">
</div>
<div class="slide">
<img src="img/02.jpg" alt="">
</div>
<div class="slide active">
<img src="img/03.jpg" alt="">
</div>
<div class="slide">
<img src="img/04.jpg" alt="">
</div>
<div class="slide">
<img src="img/05.jpg" alt="">
</div> */


// MARK UP HTML
 const images = ['01.jpg' , '02.jpg', '03.jpg' ,'04.jpg' , '05.jpg' ];
 const slider = document.querySelector('.slider');
 let currentSlide = 0;
 const prev = document.querySelector('.prev');
 const next = document.querySelector('.next');

 for( let i = 0; i < images.length; i++){

    //slide
    const slide = document.createElement('div');
    slide.classList.add('slide');

    if(i === currentSlide){
        slide.classList.add('active');
    }

    //img
    const img = document.createElement('img');
    img.src = `img/${images[i]}`;
    img.alt = `Carousel/${images[i]}`;

    slide.append(img);
    slider.append(slide);

 }

const domSlides = document.querySelectorAll('.slide');

//  SLIDER EVENTS
 prev.addEventListener('click', function(){
    console.log("Ho cliccato su prev");

if(currentSlide > 0 ){

    domSlides[currentSlide].classList.remove('active');
    currentSlide--;
    domSlides[currentSlide].classList.add('active');
}
 });

 next.addEventListener('click', function(){
    console.log("Ho cliccato su next");

    if(currentSlide < domSlides.length - 1){

        domSlides[currentSlide].classList.remove('active');
        currentSlide++;
        domSlides[currentSlide].classList.add('active');
        
    }
 });

