
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth'});
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav__link');
  
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        const targetId = link.getAttribute('href').substring(1);
        smoothScroll(targetId);
        console.log("sam");

      });
    });
  });
  

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from('#nav', {
        y: '-10',
        opacity:0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to('.boundingelem', {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2
    })
    .from('#herofooter', {
        y: -10,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -1,
        opacity: 0
    })
}
var timeout;

function circleChaptaKaro() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);
        
        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function(){
            document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;

        }, 100);


    });
}


function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
    document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
})

}

firstPageAnim();
circleMouseFollower();
circleChaptaKaro();

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function(dets){


        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: .5,
        });
    });


    elem.addEventListener("mousemove", function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20, diffrot*0.5),
        });
    });
});
