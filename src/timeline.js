// const circle1 = new mojs.Shape({
//   shape: "circle",
//   scale: { 0: 1 },
//   easing: "cubic.out",
//   duration: 300,
//   isShowEnd: false,
//   radius: 20,
//   top: "rand(40%, 60%)",
//   left: "rand(40%, 60%)",
//   fill: "deeppink",
//   isShowStart: false,
// });

// const rect1 = new mojs.Shape({
//   shape: "rect",
//   radius: 15,
//   strokeWidth: 5,
//   scale: { 0: 1 },
//   left: "rand(40%, 60%)",
//   fill: "cyan",
//   isShowStart: false,
//   easing: "cubic.out",
//   duration: 300,
//   isShowEnd: false,
//   delay: 100,
// });

// const polygon1 = new mojs.Shape({
//   shape: "polygon",
//   radiusX: 10,
//   radiusY: 20,
//   scale: { 0: 1 },
//   easing: "cubic.out",
//   duration: 300,
//   isShowEnd: false,
//   left: "rand(40%, 60%)",
//   fill: "yellow",
//   isShowStart: false,
//   delay: 200,
// });

// const zigzag = new mojs.Shape({
//   shape: "zigzag",
//   points: 11,
//   radius: 25,
//   radiusY: 50,
//   left: "rand(40%, 60%)",
//   fill: "none",
//   stroke: "deeppink",
//   isShowStart: false,
//   scale: { 0: 1 },
//   easing: "cubic.out",
//   duration: 300,
//   isShowEnd: false,
//   delay: 300,
// });

// const curve = new mojs.Shape({
//   shape: "curve",
//   points: 11,
//   radius: 25,
//   radiusY: 50,
//   left: "rand(40%, 60%)",
//   fill: "none",
//   stroke: "deeppink",
//   isShowStart: false,
//   scale: { 0: 1 },
//   easing: "cubic.out",
//   duration: 300,
//   isShowEnd: false,
//   delay: 400,
// });

// const cross = new mojs.Shape({
//   shape: "cross",
//   points: 11,
//   radius: 25,
//   radiusX: 50,
//   left: "rand(40%, 60%)",
//   fill: "none",
//   stroke: "deeppink",
//   isShowStart: false,
//   y: -25,
//   scale: { 0: 1 },
//   easing: "cubic.out",
//   duration: 300,
//   isShowEnd: false,
//   delay: 500,
// });

// // const timeline = new mojs.Timeline();
// // timeline.add(rect1, circle1, polygon1, zigzag, curve, cross).play();

// ____________

const circle2 = new mojs.Shape({
    shape: "circle",
    scale: { 0: 1 },
    easing: "cubic.out",
    duration: 300,
    isShowEnd: false,
    radius: 20,
    top: "rand(40%, 60%)",
    left: "rand(40%, 60%)",
    fill: "deeppink",
    isShowStart: false
  });
  
  const circle3 = new mojs.Shape({
    shape: "circle",
    scale: { 0: 1 },
    easing: "cubic.out",
    duration: 300,
    isShowEnd: false,
    radius: 20,
    top: "rand(40%, 60%)",
    left: "rand(40%, 60%)",
    fill: "deeppink",
    isShowStart: false,
    delay: 200
  });
  
  const circle4 = new mojs.Shape({
    shape: "circle",
    scale: { 0: 1 },
    easing: "cubic.out",
    duration: 300,
    isShowEnd: false,
    radius: 20,
    top: "rand(40%, 60%)",
    left: "rand(40%, 60%)",
    fill: "deeppink",
    isShowStart: false,
    delay: 400
  });
  
  const circle5 = new mojs.Shape({
    shape: "circle",
    scale: { 0: 1 },
    easing: "cubic.out",
    duration: 300,
    isShowEnd: false,
    radius: 20,
    top: "rand(40%, 60%)",
    left: "rand(40%, 60%)",
    fill: "deeppink",
    isShowStart: false,
    delay: 600
  });
  
  const circle6 = new mojs.Shape({
    shape: "circle",
    scale: { 0: 1 },
    easing: "cubic.out",
    duration: 300,
    isShowEnd: false,
    radius: 20,
    top: "rand(40%, 60%)",
    left: "rand(40%, 60%)",
    fill: "deeppink",
    isShowStart: false,
    delay: 800
  });
  
  const timeline = new mojs.Timeline();
  timeline.add(circle2, circle3, circle4, circle5, circle6).replay();
  
  // setInterval(() => timeline.play(), 100);
  
  ____________;
  