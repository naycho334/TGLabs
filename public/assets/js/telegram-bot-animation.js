

var TelegramIconAnimation = () => {
  gsap.set('#telegramIconInner', { rotate: 25, x: -15, y: -5, transformOrigin: "center", })
  gsap.set('#Oval', { x: -1, y: 4, transformOrigin: "center", })
  gsap.set('#telegramIcon', { scale: 0, transformOrigin: "center", })
  gsap.set('#Robot', { transformOrigin: "center", })
  gsap.set('#RobotFlameFire', { transformOrigin: "top", })
  gsap.set('#mesgBox1,#mesgBox2,#mesgBox3', { transformOrigin: "100% 100%", scale: 0 })
  gsap.set('#mesgTxt1,#mesgBox2Txt,#mesgBox3Txt', { opacity: 0 })
  // gsap.set(TheGlow,{opacity:0,webkitFilter:"blur(" + 5 + "px)",filter:"blur(" + 5 + "px)"})

  var tl = new TimelineLite({ repeat: -1, repeatDelay: 2 });
  tl.from('#Robot', .5, { scale: .1, x: 35, y: 65, ease: "Power1.easeInOut,", })
    .to("#telegramIcon", 2, {
      ease: "Power.Out", scale: 1,
      motionPath: {
        path: "#telegramPath",
        align: "#telegramPath",
        autoRotate: true,
        alignOrigin: [0.7, 0.5]
      },
    })

    .to('#mesgBox2', .5, { ease: "Power1.easeInOut,", scale: 1 })
    .to('#mesgBox2Txt', .5, { ease: "Power1.easeInOut,", opacity: 1 })
    .to('#mesgBox1', .5, { ease: "Power1.easeInOut,", scale: 1 })
    .to('#mesgTxt1', .5, { ease: "Power1.easeInOut,", opacity: 1 })
    .to('#mesgBox3', .5, { ease: "Power1.easeInOut,", scale: 1 })
    .to('#mesgBox3Txt', .5, { ease: "Power1.easeInOut,", opacity: 1 })

    .to('#EyeHolder, #robotEye1, #robotEye2', 1.5, { ease: "Power1.easeInOut", x: 2, y: 2, }, .7)
    .to('#EyeHolder, #robotEye1, #robotEye2', 1, { ease: "Power1.easeInOut", x: 0, y: 0, }, 2.5)
    .to('#RobotOuter', 2, { ease: "Power1.easeInOut", y: -15, repeat: 5, repeatDelay: 2 }, 0)
    .to('#RobotOuter', 2, { ease: "Power1.easeInOut", y: 0, repeat: 5, repeatDelay: 2 }, 2)
    .to('#mesgBox1, #mesgBox2, #mesgBox3, #Telegram', 2, { ease: "Power1.easeInOut", y: -15, repeat: 5, repeatDelay: 2 }, 0)
    .to('#mesgBox1, #mesgBox2, #mesgBox3, #Telegram', 2, { ease: "Power1.easeInOut", y: 0, repeat: 5, repeatDelay: 2 }, 2)
    .to('#RobotFlameFire', .5, { yoyo: true, ease: "Power1.easeInOut,", scale: .9, repeat: 40 }, 0)

  tl.timeScale(.9)

  var counter = (element, d1, d2, d3, d4, diffrence) => {
    var h = 10001001001;
    var counting = setInterval(countnow, diffrence);
    function countnow() {
      if (h == 10001001001) {
        h = d1;
        document.querySelector(element).textContent = d1;

      }
      else if (h == d1) {
        h = d2;
        document.querySelector(element).textContent = d2;

      }
      else if (h == d2) {
        h = d3;
        document.querySelector(element).textContent = d3;

      }
      else if (h == d3) {
        h = d4;
        document.querySelector(element).textContent = 10010111100;

      }
      else if (h == d4) {
        h = 10001001001;
        document.querySelector(element).textContent = 10001001001;

      }
    }
  };
  counter('#BinaryText1', 1101001101101, 0010110010010, 0110101111010, 1011011011011, 100);
  counter('#BinaryText2', 0110101111010, 1101001101101, 1101010101011, 1011011011011, 100);
  counter('#BinaryText3', 1101010101011, 1101001101101, 0110101111010, 1011011011011, 100);
  counter('#BinaryText4', 1011011011011, 1101001101101, 1101010101011, 0110101111010, 100);
  counter('#BinaryText5', 1101001101101, 1101001101111, 1111111101011, 0110110011010, 100);
}

TelegramIconAnimation();
