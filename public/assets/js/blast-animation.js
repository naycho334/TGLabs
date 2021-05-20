
var icon3Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6907',-.5);
    StarScaleAnim('#Path_6906',0);

    let drawPathAnim=()=>{
    let setDashArrayOfThePath=(PathId,NP)=>{
        var DrawPath = document.querySelector(PathId);
        var PathLenth = DrawPath.getTotalLength();
        gsap.set(DrawPath,{strokeDasharray:PathLenth,strokeDashoffset: (NP)*PathLenth});
        }
        setDashArrayOfThePath('#Line_181',1);
        setDashArrayOfThePath('#Line_180',1);
        setDashArrayOfThePath('#Line_179',-1);

    
        var tl= new TimelineLite({repeat:-1, repeatDelay:0});

        tl.to('#Line_181',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_180',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_179',.5,{ strokeDashoffset: 0},0)

    }
    drawPathAnim();
    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2110',{transformOrigin:'bottom',y:15})
        tl.to('#Group_2110',1,{ y:0,})
        .to('#Group_2110',1,{ y:15,})
}
icon3Anim();
