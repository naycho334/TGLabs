
var icon4Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6897',-.5);
    StarScaleAnim('#Path_6896',0);

    let drawPathAnim=()=>{
    let setDashArrayOfThePath=(PathId,NP)=>{
        var DrawPath = document.querySelector(PathId);
        var PathLenth = DrawPath.getTotalLength();
        gsap.set(DrawPath,{strokeDasharray:PathLenth,strokeDashoffset: (NP)*PathLenth});
        }
        setDashArrayOfThePath('#Line_164',-1);
        setDashArrayOfThePath('#Line_165',1);
        setDashArrayOfThePath('#Line_166',1);

    
        var tl= new TimelineLite({repeat:-1, repeatDelay:0});

        tl.to('#Line_164',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_165',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_166',.5,{ strokeDashoffset: 0},0)

    }
    drawPathAnim();

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2098',{transformOrigin:'bottom',rotate:-27,x:-10})
    gsap.set('#Group_2097',{rotate:27,x:10})
    // gsap.set('#Path_6911',{transformOrigin:'top',scaleY:.7})
        tl.to('#Group_2098',1,{ x:0,rotate:0,})
        .to('#Group_2097',1,{ x:0,rotate:0},0)
        .to('#Group_2098',1,{ x:-10,rotate:-27},1)
        .to('#Group_2097',1,{ x:10,rotate:27},1)

}
icon4Anim();
