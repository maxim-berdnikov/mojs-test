// const bouncyCircle = new mojs.Shape({
//   shape: "circle", // shape 'circle' is default
//   left: 0,
//   top: 0,
//   radius: 30, // shape radius
//   fill: "transparent", // same as 'transparent'
//   stroke: "#F64040", // or 'cyan'
//   strokeWidth: { 50: 0 },
//   scale: { 0: 1 },
//   duration: 500,
//   // delay: 200,
//   easing: "cubic.out",
// });

// const OPTS = {
//   fill: "none",
//   radius: 25,
//   strokeWidth: { 50: 0 },
//   scale: { 0: 1 },
//   angle: { "rand(-35, -70)": 0 },
//   duration: 500,
//   left: 0,
//   top: 0,
//   easing: "cubic.out",
// };

// const circle1 = new mojs.Shape({
//   ...OPTS,
//   stroke: "cyan",
// });

// const circle2 = new mojs.Shape({
//   ...OPTS,
//   radius: { 0: 15 },
//   strokeWidth: { 30: 0 },
//   stroke: "magenta",
//   delay: "rand(75, 150)",
// });

// document.addEventListener("click", function (e) {
//   circle1.tune({ x: e.pageX, y: e.pageY }).replay();
//   circle2.tune({ x: e.pageX, y: e.pageY }).replay();
//   bouncyCircle.tune({ x: e.pageX, y: e.pageY }).replay();
// });

// https://codepen.io/sandstedt/pen/PgyYro

// const circle4 = new mojs.Shape({
//   left: '10%',
//   y: { [-50] : 0 },
// }).then({
//   y: 100
// });

// const circle5 = new mojs.Shape({
//   left: '50%',
//   y: { [-50] : 0 },
// }).then({
//   y: 100
// });

// const circle6 = new mojs.Shape({
//   left: '90%',
//   y: { [-50] : 0 },
// }).then({
//   y: 100
// });

// document.addEventListener( 'click', function (e) {

//   // no tune
//   circle4
//     .replay();

//   // static value tune, results in -100 for the first block,
//   // transforms the second block to the '-100 -> 100' delta
//   circle5
//     .tune({ y: -100 })
//     .replay();

//   // delta tune, results in -100 : 25 for the first block,
//   // transforms the second block to the '25 -> 100' delta
//   circle6
//     .tune({ y: { [-100] : 0 } })
//     .replay();
// });

// ___________________

const circle1 = new mojs.Shape({
    duration: 1500,
    x: -300,
    y: { [-50]: 0 }
  }).then({
    y: 100
  });
  
  const circle2 = new mojs.Shape({
    duration: 1500,
    x: -150,
    y: { [-50]: 0 }
  }).then({
    y: 100
  });
  
  const circle3 = new mojs.Shape({
    duration: 1500,
    y: { [-50]: 0 }
  }).then({
    y: 100
  });
  
  document.addEventListener("click", function (e) {
    // no tune
    circle1.replay();
  
    // static value tune, results in -100 for the first block,
    // transforms the second block to the '-100 -> 100' delta
    circle2.tune({ y: -100 }).replay();
  
    // // delta tune, results in -100 : 25 for the first block,
    // // transforms the second block to the '25 -> 100' delta
    circle3.tune({ y: { [-100]: 0 } }).replay();
  });
  