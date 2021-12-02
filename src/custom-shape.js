// var MojsPlayer = require('mojs-player');

// class Bubble extends mojs.CustomShape {
//   getShape() {
//     return '<path d="M83.0657721,87.5048737 C74.252469,95.2810178 62.6770192,99.9991713 49.9995857,99.9991713 C22.385577,99.9991713 0,77.6135943 0,49.9995857 C0,22.385577 22.385577,0 49.9995857,0 C77.6135943,0 99.9991713,22.385577 99.9991713,49.9995857 C99.9991713,50.0248803 99.9991526,50.0501705 99.999115,50.0754564 L100,94.5453117 C100,99.9979302 96.8685022,101.290527 93.0045119,97.4313174 L83.0657721,87.5048737 Z"></path>';
//   }
//   getLength() {
//     return 200;
//   } // optional
// }

// mojs.addShape("bubble", Bubble); // passing name and Bubble class
// // now it is avaliable on mojs.Shape constructor as usual
// // new mojs.Shape({ shape: 'bubble' });

// const bubble = new mojs.Shape({
//   shape: "bubble",
//   radius: 25,
//   fill: "none",
//   stroke: "red",
//   scale: { 0: 1 },
//   strokeWidth: { 25: 0 },
//   duration: 700,
//   top: 0,
//   left: 0,
// });

// document.addEventListener("click", (e) =>
//   bubble.tune({ x: e.pageX, y: e.pageY }).replay()
// );

/* ADD CUSTOM SHAPE SOMEWHERE IN YOUR CODE */
// class Heart extends mojs.CustomShape {
//   getShape () { return '<path d="M92.6 7.4c-10-9.9-26-9.9-35.9 0l-4.4 4.3a3.4 3.4 0 0 1-4.7 0l-4.3-4.3c-10-9.9-26-9.9-35.9 0a25 25 0 0 0 0 35.5l22.4 22.2 13.5 13.4a9.5 9.5 0 0 0 13.4 0L70.2 65 92.6 43a25 25 0 0 0 0-35.5z"/>'; }
//   getLength () { return 300; } // optional
// }
// mojs.addShape( 'heart', Heart ); // passing name and Bubble class

/* USE CUSTOM SHAPE */
// now it is available on mojs.Shape constructor as usual

// const heart = new mojs.Shape({
//   shape:    'heart', // <--- shape of heart is now available!
//   fill:     'none',
//   stroke:   'red',
//   scale:    { 0 : 1 },
//   strokeWidth: { 50 : 0 },
//   // top: 0,
//   // left: 0,
//   duration:  1000,
// });

// document.addEventListener("click", (e) =>
// heart.tune({ x: e.pageX, y: e.pageY }).replay()
// );

// new MojsPlayer({ add: heart });

// _________________

class Heart extends mojs.CustomShape {
    getShape() {
      return '<path d="M92.5939814,7.35914503 C82.6692916,-2.45304834 66.6322927,-2.45304834 56.7076029,7.35914503 L52.3452392,11.6965095 C51.0327802,12.9714696 48.9328458,12.9839693 47.6203869,11.6715103 L47.6203869,11.6715103 L43.2705228,7.35914503 C33.3833318,-2.45304834 17.3213337,-2.45304834 7.43414268,7.35914503 C-2.47804756,17.1963376 -2.47804756,33.12084 7.43414268,42.9205337 L29.7959439,65.11984 C29.7959439,65.1323396 29.8084435,65.1323396 29.8084435,65.1448392 L43.2580232,78.4819224 C46.9704072,82.1818068 52.9952189,82.1818068 56.7076029,78.4819224 L70.1696822,65.1448392 C70.1696822,65.1448392 70.1696822,65.1323396 70.1821818,65.1323396 L92.5939814,42.9205337 C102.468673,33.12084 102.468673,17.1963376 92.5939814,7.35914503 L92.5939814,7.35914503 Z"></path>';
    }
    getLength() {
      return 300;
    } // optional
  }
  mojs.addShape("heart", Heart); // passing name and Bubble class
  
  const newHeart = new mojs.Shape({
    shape: "heart", // <--- shape of heart is now available!
    fill: "none",
    stroke: "red",
    // scale:    { 0 : 1 },
    strokeWidth: 10,
    strokeDasharray: "100%",
    strokeDashoffset: { "-100%": "100%" },
    duration: 1000
  });
  
  new MojsPlayer({ add: newHeart });
  