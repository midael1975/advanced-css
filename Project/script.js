function initialize() {

    startanime();
}


function startanime() {

    var tl = gsap.timeline();
    var h = gsap.timeline();
    var s = gsap.timeline();

    tl.to(image2, 20, { opacity: 1, delay: 10, ease: Expo.easeOut });
    tl.to(image2, 20, { opacity: 0, delay: 10, ease: Expo.easeOut, onComplete: startanime });

    h.to(head, 20, { color: "#fff", delay: 10, ease: Expo.easeOut });
    h.to(head, 20, { color: "#000", delay: 10, ease: Expo.easeOut });

    s.to(subhead, 20, { color: "#fff", delay: 10, ease: Expo.easeOut });
    s.to(subhead, 20, { color: "#000", delay: 10, ease: Expo.easeOut });
}




window.onload = addEventListener("load", initialize);