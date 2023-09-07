const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var timeout;
const mouseSkew = ()=>{
    var xScale = 1
    var yScale = 1

    var xPrev = 0
    var yPrev = 0
    window.addEventListener('mousemove', function(dets){
        clearTimeout(timeout)
        xScale = gsap.utils.clamp(0.6, 1.4, dets.clientX - xPrev)
        yScale = gsap.utils.clamp(0.6, 1.4, dets.clientY - yPrev)

        xPrev = dets.clientX
        yPrev = dets.clientY

        mouseFollower(xScale, yScale)

        timeout = setTimeout(function(){
            document.querySelector('.circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px), scale(1, 1)`;
        }, 100)
    })
}

mouseSkew()

const mouseFollower = (xScale, yScale) =>{
    window.addEventListener('mousemove', function(dets){
        document.querySelector('.circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px), scale(${xScale}, ${yScale})`;
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