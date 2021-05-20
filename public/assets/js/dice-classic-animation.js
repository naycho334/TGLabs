
var icon2Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6895',-.5);
    StarScaleAnim('#Path_6894',0);

    let drawPathAnim=()=>{
    let setDashArrayOfThePath=(PathId,NP)=>{
        var DrawPath = document.querySelector(PathId);
        var PathLenth = DrawPath.getTotalLength();
        gsap.set(DrawPath,{strokeDasharray:PathLenth,strokeDashoffset: (NP)*PathLenth});
        }
        setDashArrayOfThePath('#Line_160',-1);
        setDashArrayOfThePath('#Line_161',1);
        setDashArrayOfThePath('#Line_162',1);

    
        var tl= new TimelineLite({repeat:-1, repeatDelay:0});

        tl.to('#Line_160',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_161',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_162',.5,{ strokeDashoffset: 0},0)

    }
    drawPathAnim();
    var tl= new TimelineLite({repeat:-1, repeatDelay:3});
    gsap.set('#Group_2091',{transformOrigin:'bottom',y:7})
        tl.to('#Group_2091',.2,{ y:0,})
        tl.to('#Group_2091',.1,{ rotate:15,})
        tl.to('#Group_2091',.2,{ rotate:-15,})
        tl.to('#Group_2091',.1,{ rotate:15,})
        tl.to('#Group_2091',.2,{ rotate:-15,})
        tl.to('#Group_2091',.1,{ rotate:0,})
        tl.to('#Group_2091',.2,{ y:7,})

}
icon2Anim();
