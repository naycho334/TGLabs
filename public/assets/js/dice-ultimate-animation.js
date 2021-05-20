
var icon6Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6900',-.5);
    StarScaleAnim('#Path_6899',0);

    let drawPathAnim=()=>{
    let setDashArrayOfThePath=(PathId,NP)=>{
        var DrawPath = document.querySelector(PathId);
        var PathLenth = DrawPath.getTotalLength();
        gsap.set(DrawPath,{strokeDasharray:PathLenth,strokeDashoffset: (NP)*PathLenth});
        }
        setDashArrayOfThePath('#Line_172',1);
        setDashArrayOfThePath('#Line_171',1);
        setDashArrayOfThePath('#Line_170',-1);
        setDashArrayOfThePath('#Line_169',1);
        setDashArrayOfThePath('#Line_168',1);
        setDashArrayOfThePath('#Line_167',-1);

    
        var tl= new TimelineLite({repeat:-1, repeatDelay:0});

        tl.to('#Line_172',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_171',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_170',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_169',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_168',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_167',.5,{ strokeDashoffset: 0},0)

    }
    drawPathAnim();

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    // gsap.set('#Group_2116>*',{stroke:"#fab893"})
        tl.to('#Group_2101',.5,{ x:5,y:5,})
        tl.to('#Group_2100',.5,{ x:-5,y:-5,},0)
        tl.to('#Group_2101',.5,{ x:0,y:0,},.5)
        tl.to('#Group_2100',.5,{ x:0,y:0,},.5)

}
icon6Anim();
