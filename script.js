/*=========================================
New Life Plastic Company
Corporate Website
=========================================*/

// ===============================
// Hero Slider
// ===============================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;
let autoSlide;

// Show Slide
function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

// Next Slide
function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

// Previous Slide
function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length-1;

    }

    showSlide(currentSlide);

}

// Auto Slider

function startSlider(){

    autoSlide = setInterval(()=>{

        nextSlide();

    },5000);

}

function stopSlider(){

    clearInterval(autoSlide);

}

// Buttons

if(nextBtn){

nextBtn.addEventListener("click",()=>{

    stopSlider();

    nextSlide();

    startSlider();

});

}

if(prevBtn){

prevBtn.addEventListener("click",()=>{

    stopSlider();

    prevSlide();

    startSlider();

});

}

// Dots

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        stopSlider();

        currentSlide=index;

        showSlide(currentSlide);

        startSlider();

    });

});

// Start Slider

showSlide(currentSlide);

startSlider();



// ===============================
// Sticky Header
// ===============================

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("active");

    }

    else{

        header.classList.remove("active");

    }

});



// ===============================
// Mobile Menu
// ===============================

const menuToggle=document.getElementById("menu-toggle");

const navMenu=document.querySelector(".nav-menu");

menuToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("show");

});



// Close Menu

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("show");

    });

});



// ===============================
// Reveal Animation
// ===============================

const reveals=document.querySelectorAll(".about-preview,.company-stats,.stat-box");

function revealSection(){

    const trigger=window.innerHeight-120;

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<trigger){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealSection);

window.addEventListener("load",revealSection);



// ===============================
// Keyboard Slider
// ===============================

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        stopSlider();

        nextSlide();

        startSlider();

    }

    if(e.key==="ArrowLeft"){

        stopSlider();

        prevSlide();

        startSlider();

    }

});



// ===============================
// Touch Swipe
// ===============================

let touchStartX=0;

let touchEndX=0;

const hero=document.querySelector(".hero");

hero.addEventListener("touchstart",(e)=>{

    touchStartX=e.changedTouches[0].screenX;

});

hero.addEventListener("touchend",(e)=>{

    touchEndX=e.changedTouches[0].screenX;

    if(touchStartX-touchEndX>50){

        stopSlider();

        nextSlide();

        startSlider();

    }

    if(touchEndX-touchStartX>50){

        stopSlider();

        prevSlide();

        startSlider();

    }

});



// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



// ===============================
// Console
// ===============================

console.log("New Life Plastic Company Website Loaded");
