var UR_Aanimation=()=>{
        
    gsap.set('#UR_FanPathMaster',{transformOrigin:"center",scaleY:.55});
    gsap.set('#UR_FanPath',{transformOrigin:"center"});
    gsap.to('#UR_FanPath',.8,{rotate:360,repeat:-1,ease:"none"});

    // UR_LinePathData1 UR_DataPath1

    var LockDataPathAnim = (TheData,TheGlow, ThePath,dur, timeOffset)=>{
        gsap.set(TheData,{webkitFilter:"blur(" + .5 + "px)",filter:"blur(" + .5 + "px)"})
        gsap.set(TheGlow,{opacity:0,webkitFilter:"blur(" + 5 + "px)",filter:"blur(" + 5 + "px)"})
        
        var tl= new TimelineLite({repeat:-1, repeatDelay:2}, timeOffset);
        tl.to(TheData, {
        duration: dur, 
        ease: "none",
        motionPath:{
            path: ThePath,
            align: ThePath,
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },
        stagger:{each:0.05,repeatDelay:0.5},
        })
        .to(TheData,{
        duration:.1,
        ease:"Power1.easeInOut",
        opacity:0,
        })
        .to(TheGlow,{
        duration:.5,
        ease:"Power1.easeInOut",
        opacity:1
        })
        .to(TheGlow,{
        duration:.5,
        ease:"Power1.easeInOut",
        opacity:0
        })
        tl.timeScale(.9)
    }

    LockDataPathAnim("#UR_LinePathData1>*","#UR_ServerBottomGlow03","#UR_DataPath1",2.8,0);
    LockDataPathAnim("#UR_LinePathData2>*","#UR_ServerBottomGlow01","#UR_DataPath2",2.8,-1.5);
    LockDataPathAnim("#UR_LinePathData3>*","#UR_ServerBottomGlow02","#UR_DataPath3",2.8,-2.5);


    var TunnelDataAnim = (TheData,dur, timeOffset)=>{
        gsap.set(TheData,{opacity:0})
        // gsap.set(TheGlow,{opacity:0,webkitFilter:"blur(" + 5 + "px)",filter:"blur(" + 5 + "px)"})
        
        var tl= new TimelineLite({repeat:-1}, timeOffset);
        tl.to(TheData, {
        duration: .2, 
        ease: "none",
        opacity:1
        })
        tl.to(TheData, {
        duration: dur, 
        ease: "none",
        x:154*2,
        y:-86*2
        },0)
        tl.to(TheData, {
        duration: .2, 
        ease: "none",
        opacity:0
        },dur-0.2)
        tl.timeScale(.9)
    }
    TunnelDataAnim('#holeData1',2,0);
    TunnelDataAnim('#holeData2',2.3,-1.1);
    TunnelDataAnim('#holeData3',3,-.8);
    TunnelDataAnim('#holeData4',2,-.5);
    TunnelDataAnim('#holeData5',3,-.3);
    TunnelDataAnim('#holeData6',2.5,-.4);
    TunnelDataAnim('#holeData7',2,.7);

    var upDownAnim=(TheUpDownId,dur, timeOffset)=>{
        var tl1= new TimelineLite({repeat:-1},timeOffset);
        tl1.to(TheUpDownId, dur,{y:-16,ease: "Power1.easeInOut",})
        tl1.to(TheUpDownId, dur,{y:0,ease: "Power1.easeInOut",})
        }
    upDownAnim('#UR_BitCoin', 3,-1);
    upDownAnim('#UR_StarBox', 3,0);
    upDownAnim('#UR_Bell', 3,-.5);
    upDownAnim('#UR_StarIcon', 2,-.5);
    upDownAnim('#UR_MesgIcon', 2,-1.5);

    var tl2= new TimelineLite({repeat:-1});
    tl2.to('#UR_stars>*', 1,{fill:"#3d065f",ease: "Power1.easeInOut",stagger:{each:0.5}},0)
    var tl3= new TimelineLite({repeat:-1, repeatDelay:2});
    tl3.to('#UR_Drawer', 1,{x:15,y:-6,ease: "Power1.easeInOut",},0)
    tl3.to('#UR_Drawer', 1,{x:0,y:0,ease: "Power1.easeInOut",},1)

    var URserverGlowAim=(IDs,Offset)=>{
    var tl4= new TimelineLite({repeat:-1},Offset);
    gsap.set(IDs,{opacity:1})
    tl4.to(IDs,1,{opacity:.5})
    .to(IDs,1,{opacity:1});
    }
    URserverGlowAim('#UR_ServerTopGlow1',0)
    URserverGlowAim('#UR_ServerTopGlow2',-.5)
    URserverGlowAim('#UR_ServerTopGlow3',-1.5)

    // CalculationTxt

    var counter = (element)=>{
        var h=1;
          var counting = setInterval(countnow, 500);
          function countnow() {
            if (h==1) {
              h=2;
              document.querySelector(element).textContent = "2";
            }
            else if(h==2) {
              h=3;
            document.querySelector(element).textContent = "2+";
            }
            else if(h==3) {
              h=4;
            document.querySelector(element).textContent = "2+3";
            }
            else if(h==4) {
              h=5;
            document.querySelector(element).textContent = "2+3=";
            }
            else if(h==5) {
              h=6;
            document.querySelector(element).textContent = "2+3=5" ;
            }
            else if(h==6) {
              h=1 ;
            document.querySelector(element).textContent = "_" ;
            }
          }
    };
    counter('#CalculationTxt');


}

UR_Aanimation();