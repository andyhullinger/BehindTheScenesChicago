$('#ea').waypoint(function () {
    tweenEA.seek(0);
    tweenEA.play();
}, {
    offset: 200
});


var tweenEA = new TimelineMax({
    paused: true
});
tweenEA.from('#ea h1', 1, {
    scale: 0
});
tweenEA.from('#ea h1 span', 1, {
    y: 500
});
tweenEA.to('#ea h1', .5, {
    delay: 2,
    x: "100",
    alpha: 0
});
tweenEA.to('#ea img', 7, {
    x: 280
});

tweenEA.from('#ea h2', 1, {
    x: "-50",
    alpha: 0
});
tweenEA.from('#ea h2 span', 1, {
    x: "50",
    alpha: 0
});




$('#tb').waypoint(function () {
    tweenTB.seek(0);
    tweenTB.play();
}, {
    offset: 200
});


var tweenTB = new TimelineMax({
    paused: true
});


tweenTB.to('#tb img', .6, {
    delay: 2,
    x: -1360,
    y: 100
}, 0);

tweenTB.to('#tb img', .6, {
    delay: 4.2,
    x: -960,
    y: -60,
    scale: 1.2
}, 0);

tweenTB.to('#tb img', 1.5, {
    delay: 6.8,
    x: -700,
    y: 100
}, 0);





tweenTB.from('#tb .cogito', 1, {
    scale: 5,
    alpha: 0,
    ease: Bounce.easeOut
}, 0);

tweenTB.from('#tb .ergo', 1, {
    delay: 3,
    scale: 5,
    alpha: 0,
    ease: Bounce.easeOut
}, 0);

tweenTB.from('#tb .sum', 1, {
    delay: 5,
    scale: 5,
    alpha: 0,
    ease: Bounce.easeOut
}, 0);



tweenTB.to('#tb .cogito', 1, {
    delay: 1.5,
    autoAlpha: 0
}, 0);

tweenTB.to('#tb .ergo', 1, {
    delay: 4.2,
    autoAlpha: 0
}, 0);
tweenTB.to('#tb .sum', 1, {
    delay: 6.1,
    autoAlpha: 0
}, 0);



tweenTB.from('#tb .the', 2.5, {
    delay: 8,
    alpha: 0
}, 0);

tweenTB.from('#tb .art', 2.5, {
    delay: 8.4,
    alpha: 0
}, 0);

tweenTB.from('#tb .of', 2.5, {
    delay: 8.8,
    alpha: 0
}, 0);

tweenTB.from('#tb .winning', 2.5, {
    delay: 9.2,
    alpha: 0
}, 0);

tweenTB.from('#tb .argument', 2.5, {
    delay: 9.6,
    alpha: 0
}, 0);