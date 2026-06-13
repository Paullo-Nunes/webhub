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

    //Criando uma linha do tempo para que cada animação seja sequencial
    const linhaDoTempo = gsap.timeline({
        scrollTrigger: {
            trigger: ".transicao",
            markers: false,          //*retira as marcações do scroll trigger
            scrub: 3,
            start: "0% 0%",
            end: "+=3000",
            pin: true,
            
        }
    });
    linhaDoTempo.to(".retangulos div", {
        y: "0%",
        stagger: 0.3,
        duration: 4
        
    })
    linhaDoTempo.to(".secao2", {
        opacity: 1,
        duration: 0.1
    })
     //o from vai fazer com que a animação seja debaixo para cima, e o Y se refere a linha vertical
    
    //o splitText faz com que o texto seja dividido. O segundo parâmetro mostra de qual maneira será feita essa divisão
    const split = new SplitText(".secao2 h2", {
        types: "chars",
        mask: "lines"
    })
    linhaDoTempo.from(split.chars, {
        y: 100,
        stagger: 0.1,
        duration: 1
    })

});
