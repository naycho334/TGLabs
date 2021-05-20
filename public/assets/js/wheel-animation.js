
var icon7Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6915',-.5);
    StarScaleAnim('#Path_6914',0);

    let drawPathAnim=()=>{
    let setDashArrayOfThePath=(PathId,NP)=>{
        var DrawPath = document.querySelector(PathId);
        var PathLenth = DrawPath.getTotalLength();
        gsap.set(DrawPath,{strokeDasharray:PathLenth,strokeDashoffset: (NP)*PathLenth});
        }
        setDashArrayOfThePath('#Line_187',1);
        setDashArrayOfThePath('#Line_186',1);
        setDashArrayOfThePath('#Line_185',-1);

    
        var tl= new TimelineLite({repeat:-1, repeatDelay:0});

        tl.to('#Line_187',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_186',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_185',.5,{ strokeDashoffset: 0},0)

    }
    drawPathAnim();

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2120>*',{fill:"#fab893"})
        tl.to('#Group_2120>*',.1,{ fill:"#fff",stagger:{each:.1,},})
        tl.to('#Group_2120>*',.1,{ fill:"#fab893",stagger:{each:.1,},},.1)

}
icon7Anim();
