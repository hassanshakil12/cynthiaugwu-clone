// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

const mouseFollower = (dets) =>{
    window.addEventListener('mousemove', function(dets){
        document.querySelector('.circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

mouseFollower()

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