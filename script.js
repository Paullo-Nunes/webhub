window.addEventListener('load', () => {
    const videoHero = document.querySelector(".hero .bg video");
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)
    videoHero.src = "/assets/img/video-hero.mp4";
    videoHero.autoplay = true;
    videoHero.loop = true;
    videoHero.muted = true;

    const videoFooter = document.querySelector("footer video");

    videoFooter.src = "/assets/img/video-footer.mp4";
    videoFooter.autoplay = true;
    videoFooter.loop = true;
    videoFooter.muted = true;


    //Quando rolar a página cada retângulo desse
    gsap.to(".retangulos div", {
        y: "0%",
        stagger: 0.08,
        scrollTrigger: {
            trigger: ".transicao",
            markers: true,
            scrub: 3,
            start: "0% 0%",
            end: "+=100%",
            pin: true,
            scrub: 3,
            
        }
    });

});
