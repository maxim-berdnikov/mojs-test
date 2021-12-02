const simpleShapeswirl = new mojs.ShapeSwirl({
    fill: "#F64040",
    y: { 0: -150 },
    swirlSize: 10,
    swirlFrequency: 10,
    duration: 1000,
    radius: 10,
    direction: -1,
    pathScale: 0.5,
    degreeShift: 90
  });
  
  const shapeswirl = new mojs.ShapeSwirl({
    y: { 0: -150 },
    // other props:
    isSwirl: true, // sets if the shape should follow sinusoidal path, true by default
    swirlSize: 10, // defines amplitude of the sine
    swirlFrequency: 3, // defines frequency of the sine
    pathScale: "rand( .1, 1 )", // defines how much the total path length should be scaled
    direction: 1, // direction of the sine could be 1 or -1
    degreeShift: 45 // rotatation shift for the sinusoidal path
  });
  
  document.addEventListener("click", () => simpleShapeswirl.replay());
  