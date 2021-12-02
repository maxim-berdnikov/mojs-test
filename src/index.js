// // const bouncyCircle = new mojs.Shape({
// //   parent: ".shape",
// //   left: "10%",
// //   shape: "circle", // shape 'circle' is default
// //   radius: 25, // shape radius
// //   fill: "transparent", // same as 'transparent'
// //   stroke: "#F64040", // or 'cyan'
// //   strokeWidth: 5, // width of the stroke
// //   isShowStart: true, // show before any animation starts
// //   scale: { 0: 1 },
// //   duration: 500,
// //   delay: 200,
// //   easing: "cubic.out",
// //   repeat: 100,
// // }).play();

// // // bouncyCircle.play();

// // const rect = new mojs.Shape({
// //   shape: "rect",
// //   left: "50%",
// //   fill: "none",
// //   radius: 20,
// //   stroke: { "rgba(0,255,255, 1)": "magenta" },
// //   strokeWidth: { 10: 0 },
// //   strokeDasharray: "100%",
// //   strokeDashoffset: { "-100%": "100%" },
// //   rotate: { 0: 180 },

// //   duration: 2000,
// //   repeat: 999,
// // }).play();

// // const circle = new mojs.Shape({
// //   shape: "circle",
// //   scale: { 0: 1 },
// //   left: "25%",
// //   fill: { cyan: "yellow" },
// //   radius: 25,

// //   duration: 2000,
// //   repeat: 999,
// // }).play();

// // const polygon = new mojs.Shape({
// //   shape: "polygon",
// //   top: "20%",
// //   points: 5,
// //   left: "75%",
// //   fill: { "#ff1493": "#00F87F" },
// //   x: { "rand(-100%, -200%)": 0 },
// //   rotate: { 0: "rand(0, 360)" },
// //   radius: 25,

// //   duration: 2000,
// //   repeat: 999,
// // }).play();

// // const newRect = new mojs.Shape({
// //   // parent:     '#triangle',
// //   shape: "polygon",
// //   fill: "orange",
// //   radius: 65,
// //   rotate: { [-120]: -40 },
// //   x: { [-200]: 20 },
// //   y: { [50]: -20 },
// //   scaleX: { 0: 1.3 },

// //   repeat: 10,
// //   duration: 800,
// //   isYoyo: true,
// //   backwardEasing: "sin.in",

// //   isShowEnd: false,
// // }).play();

// // const deltaEasing = new mojs.Shape({
// //   shape: "circle",
// //   top: "30%",
// //   scale: { 0: 1, easing: "cubic.out" },
// //   fill: { cyan: "yellow", easing: "cubic.in" },

// //   duration: 2000,
// //   repeat: 2,
// // }).play();

// // const shiftCurve = mojs.easing.path(
// //   "M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0"
// // );
// // const scaleCurveBase = mojs.easing.path(
// //   "M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100"
// // );
// // const scaleCurve = (p) => {
// //   return 1 + scaleCurveBase(p);
// // };
// // const nScaleCurve = (p) => {
// //   return 1 - scaleCurveBase(p) / 10;
// // };

// // const secondCircle = new mojs.Shape({
// //   shape: "rect",
// //   top: "40%",
// //   fill: { "#F64040": "#F64040", curve: scaleCurve },
// //   radius: 10,
// //   rx: 3,
// //   x: { [-125]: 125, easing: shiftCurve },
// //   scaleX: { 1: 1, curve: scaleCurve },
// //   scaleY: { 1: 1, curve: nScaleCurve },
// //   origin: { "0 50%": "100% 50%", easing: shiftCurve },

// //   isYoyo: true,
// //   delay: 500,
// //   duration: 800,
// //   repeat: 999,
// // }).play();

// // const thenRect = new mojs.Shape({
// //   top: "10%",
// //   shape: "rect",
// //   fill: "none",
// //   stroke: "#FC46AD",
// //   radius: 10,
// //   strokeWidth: 20,
// //   rotate: { [-180]: 720 },
// //   // repeat: 10,
// //   duration: 5000,
// // })
// //   .then({
// //     strokeWidth: 0,
// //     scale: { to: 2, easing: "sin.in" },
// //     duration: 600,
// //   })
// //   .play();

// // const newThenRect = new mojs.Shape({
// //   top: "10%",
// //   left: "10%",
// //   shape: "rect",
// //   fill: "none",
// //   stroke: "cyan",
// //   radius: 10,
// //   strokeWidth: 20,
// //   rotate: { [-180]: 0 },
// //   repeat: 4,
// //   duration: 600,
// // })
// //   .then({
// //     strokeWidth: { 50: 0 },
// //     stroke: { magenta: "yellow" },
// //   })
// //   .play();

// // const newOneThenRect = new mojs.Shape({
// //   top: "10%",
// //   left: "30%",
// //   shape: "rect",
// //   fill: "none",
// //   stroke: "cyan",
// //   radius: 10,
// //   strokeWidth: 20,
// //   rotate: { [-180]: 0 },
// //   // y: -200,
// //   // x: -50,

// //   duration: 600,
// //   delay: 200,
// // }).then({
// //   // duration here will be 600 too because inherited from the previous block
// //   // delay here will have default 0 value

// //   rotate: -360,
// //   scale: 2,
// //   strokeWidth: 0,
// //   stroke: { magenta: "yellow" },
// // }).play();
