
var icon10Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6940',-.5);
    StarScaleAnim('#Path_6939',0);

    let drawPathAnim=()=>{
    let setDashArrayOfThePath=(PathId,NP)=>{
        var DrawPath = document.querySelector(PathId);
        var PathLenth = DrawPath.getTotalLength();
        gsap.set(DrawPath,{strokeDasharray:PathLenth,strokeDashoffset: (NP)*PathLenth});
        }
        setDashArrayOfThePath('#Line_196',1);
        setDashArrayOfThePath('#Line_195',1);
        setDashArrayOfThePath('#Line_194',-1);

    
        var tl= new TimelineLite({repeat:-1, repeatDelay:0});

        tl.to('#Line_196',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_195',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_194',.5,{ strokeDashoffset: 0},0)

    }
    drawPathAnim();

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2133',{y:12})
        tl.to('#Group_2133',1,{ y:0,})
        tl.to('#Group_2133',1,{ y:12,})

}
icon10Anim();
