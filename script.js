var timeout;
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });


function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector(
                "#minicircle"
            ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    });
}

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector(
            ".circle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}

circleChaptaKaro();
circleMouseFollower();

const firstPageAnimation = () =>{
    const tl = gsap.timeline()
    tl.to('.nav .bounding h1', {
        y: 0,
        opacity: 1,
        ease: Expo.easeInOut,
        duration: 2,
    })
    .to('.page1 .top .bounding h1', {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 0.1,
        delay: -2
    })
    .to('.page1 .top .bounding p', {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1.5
    })
    .to('.page1 .middle .bounding h1', {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 0.1,
        delay: -1.8
    })
    .to('.page1 .bottom',{
        opacity: 1,
        delay: -1
    })
}

firstPageAnimation()