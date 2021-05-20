
var icon8Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6926',-.5);
    StarScaleAnim('#Path_6925',0);

    let drawPathAnim=()=>{
    let setDashArrayOfThePath=(PathId,NP)=>{
        var DrawPath = document.querySelector(PathId);
        var PathLenth = DrawPath.getTotalLength();
        gsap.set(DrawPath,{strokeDasharray:PathLenth,strokeDashoffset: (NP)*PathLenth});
        }
        setDashArrayOfThePath('#Line_190',1);
        setDashArrayOfThePath('#Line_189',1);
        setDashArrayOfThePath('#Line_188',-1);

    
        var tl= new TimelineLite({repeat:-1, repeatDelay:0});

        tl.to('#Line_190',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_189',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_188',.5,{ strokeDashoffset: 0},0)

    }
    drawPathAnim();

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2124',{transformOrigin:"center",})
        tl.to('#Group_2124',2,{ rotate:360,})

}
icon8Anim();
