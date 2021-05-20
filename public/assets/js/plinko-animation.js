
var icon12Anim=()=>{

    let drawPathAnim=()=>{
        let setDashArrayOfThePath=(PathId,NP)=>{
            var DrawPath = document.querySelector(PathId);
            var PathLenth = DrawPath.getTotalLength();
            gsap.set(DrawPath,{strokeDasharray:PathLenth,strokeDashoffset: (NP)*PathLenth});
            }
            setDashArrayOfThePath('#Line_210',1);
            setDashArrayOfThePath('#Line_209',1);
            setDashArrayOfThePath('#Line_208',-1);
    
        
            var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    
            tl.to('#Line_210',.5,{ strokeDashoffset: 0},0)
            tl.to('#Line_209',.5,{ strokeDashoffset: 0},0)
            tl.to('#Line_208',.5,{ strokeDashoffset: 0},0)
    
        }
        drawPathAnim();

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6944',-.5);
    StarScaleAnim('#Path_6943',0);

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Icon12ElipsGrp>*',{stroke:"#fab893"})
        tl.to('#Icon12ElipsGrp>*',.2,{ stroke:"#fff",stagger:{each:.2,},})
        tl.to('#Icon12ElipsGrp>*',.2,{ stroke:"#fab893",stagger:{each:.2,},},.2)

}
icon12Anim();
