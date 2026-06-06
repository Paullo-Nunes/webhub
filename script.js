window.addEventListener('load', () => {
    const videoHero = document.querySelector(".hero .bg video");
    
    videoHero.src = "/assets/img/video-hero.mp4";
    videoHero.autoplay = true;
    videoHero.loop = true;
    videoHero.muted = true;

    const videoFooter = document.querySelector("footer video");
    
    videoFooter.src = "/assets/img/video-footer.mp4";
    videoFooter.autoplay = true;
    videoFooter.loop = true;
    videoFooter.muted = true;

})

