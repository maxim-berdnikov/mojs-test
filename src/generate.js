const OPTS = {
    fill: "none",
    radius: 25,
    strokeWidth: { 50: 0 },
    scale: { 0: 1 },
    duration: 500,
    left: 0,
    top: 0,
    easing: "cubic.out"
  };
  
  const mainCircle = new mojs.Shape({
    ...OPTS,
    stroke: "cyan"
  });
  
  const smallCircles = [];
  const colors = ["deeppink", "magenta", "yellow", "#00F87F"];
  
  for (let i = 0; i < 4; i++) {
    smallCircles.push(
      new mojs.Shape({
        ...OPTS,
        parent: mainCircle.el,
        radius: { 0: 15 },
        strokeWidth: { 30: 0 },
        left: "50%",
        top: "50%",
        stroke: colors[i % colors.length],
        delay: "rand(0, 350)",
        x: "rand(-50, 50)",
        y: "rand(-50, 50)",
        radius: "rand(5, 20)"
      })
    );
  }
  
  document.addEventListener("click", function (e) {
    mainCircle.tune({ x: e.pageX, y: e.pageY }).replay();
  
    for (let i = 0; i < smallCircles.length; i++) {
      smallCircles[i].generate().replay();
    }
  });
  
  // new MojsPlayer({ add: timeline });
  