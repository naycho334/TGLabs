
var icon5Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6913',-.5);
    StarScaleAnim('#Path_6912',0);

    let drawPathAnim=()=>{
    let setDashArrayOfThePath=(PathId,NP)=>{
        var DrawPath = document.querySelector(PathId);
        var PathLenth = DrawPath.getTotalLength();
        gsap.set(DrawPath,{strokeDasharray:PathLenth,strokeDashoffset: (NP)*PathLenth});
        }
        setDashArrayOfThePath('#Line_184',1);
        setDashArrayOfThePath('#Line_183',1);
        setDashArrayOfThePath('#Line_182',-1);

    
        var tl= new TimelineLite({repeat:-1, repeatDelay:0});

        tl.to('#Line_184',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_183',.5,{ strokeDashoffset: 0},0)
        tl.to('#Line_182',.5,{ strokeDashoffset: 0},0)

    }
    drawPathAnim();

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2116>*',{stroke:"#fab893"})
        tl.to('#Group_2116>*',.1,{ stroke:"#fff",stagger:{each:.1,},})
        tl.to('#Group_2116>*',.1,{ stroke:"#fab893",stagger:{each:.1,},},.1)

}
icon5Anim();
