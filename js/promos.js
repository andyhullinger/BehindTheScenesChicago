$('.ea').waypoint(function () {
    tweenEA.seek(0);
    tweenEA.play();
}, {
    offset: 200
});


var tweenEA = new TimelineMax({
    paused: true
});
tweenEA.from('.ea h1', 1, {
    scale: 0
});
tweenEA.from('.ea h1 span', 1, {
    y: 500
});
tweenEA.to('.ea h1', .5, {
    delay: 2,
    x: "100",
    alpha: 0
});
tweenEA.to('.ea img', 7, {
    x: 280
});

tweenEA.from('.ea h2', 1, {
    x: "-50",
    alpha: 0
});
tweenEA.from('.ea h2 span', 1, {
    x: "50",
    alpha: 0
});