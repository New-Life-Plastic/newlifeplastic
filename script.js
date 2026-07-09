/*=========================================
 New Life Plastic Company
 Corporate Website
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================
      HERO SLIDER
    =========================*/

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let currentSlide = 0;
    let autoSlide = null;

    function showSlide(index) {

        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        if (slides[index]) slides[index].classList.add("active");
        if (dots[index]) dots[index].classList.add("active");
    }

    function nextSlide() {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }

    function prevSlide() {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);

    }

    function startSlider() {

        if (slides.length <= 1) return;

        stopSlider();

        autoSlide = setInterval(nextSlide, 5000);

    }

    function stopSlider() {

        if (autoSlide) {
            clearInterval(autoSlide);
        }

    }

    if (slides.length > 0) {

        showSlide(currentSlide);
        startSlider();

    }

    if (nextBtn) {

        nextBtn.addEventListener("click", () => {

            stopSlider();
            nextSlide();
            startSlider();

        });

    }

    if (prevBtn) {

        prevBtn.addEventListener("click", () => {

            stopSlider();
            prevSlide();
            startSlider();

        });

    }

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            currentSlide = index;

            showSlide(currentSlide);

            stopSlider();

            startSlider();

        });

    });

    /*=========================
      STICKY HEADER
    =========================*/

    const header = document.getElementById("header");

    function stickyHeader() {

        if (!header) return;

        if (window.scrollY > 80) {

            header.classList.add("active");

        } else {

            header.classList.remove("active");

        }

    }

    window.addEventListener("scroll", stickyHeader);

    stickyHeader();

    /*=========================
      MOBILE MENU
    =========================*/

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("show");

        });

        document.querySelectorAll(".nav-menu a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("show");

            });

        });

    }

    /*=========================
      REVEAL ANIMATION
    =========================*/

    const reveals = document.querySelectorAll(
        ".about-preview,.company-stats,.stat-box"
    );

    function revealSection() {

        const trigger = window.innerHeight - 120;

        reveals.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < trigger) {

                item.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", revealSection);

    revealSection();

    /*=========================
      KEYBOARD CONTROL
    =========================*/

    document.addEventListener("keydown", (e) => {

        if (!slides.length) return;

        if (e.key === "ArrowRight") {

            stopSlider();
            nextSlide();
            startSlider();

        }

        if (e.key === "ArrowLeft") {

            stopSlider();
            prevSlide();
            startSlider();

        }

    });

    /*=========================
      TOUCH SWIPE
    =========================*/

    const hero = document.querySelector(".hero");

    let touchStartX = 0;
    let touchEndX = 0;

    if (hero) {

        hero.addEventListener("touchstart", (e) => {

            touchStartX = e.changedTouches[0].screenX;

        });

        hero.addEventListener("touchend", (e) => {

            touchEndX = e.changedTouches[0].screenX;

            if (touchStartX - touchEndX > 60) {

                stopSlider();
                nextSlide();
                startSlider();

            }

            if (touchEndX - touchStartX > 60) {

                stopSlider();
                prevSlide();
                startSlider();

            }

        });

    }

    /*=========================
      SMOOTH SCROLL
    =========================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    /*=========================
      PAUSE WHEN TAB HIDDEN
    =========================*/

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) {

            stopSlider();

        } else {

            startSlider();

        }

    });

    /*=========================
      BACK TO TOP
    =========================*/

    const topBtn = document.querySelector(".back-to-top");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                topBtn.classList.add("show");

            } else {

                topBtn.classList.remove("show");

            }

        });

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

    console.log("New Life Plastic Website Loaded Successfully.");

});
