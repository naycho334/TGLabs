
var icon15Anim=()=>{

    let drawPathAnim=()=>{
        let setDashArrayOfThePath=(PathId,NP)=>{
            var DrawPath = document.querySelector(PathId);
            var PathLenth = DrawPath.getTotalLength();
            gsap.set(DrawPath,{strokeDasharray:PathLenth,strokeDashoffset: (NP)*PathLenth});
            }
            setDashArrayOfThePath('#Line_228',1);
            setDashArrayOfThePath('#Line_227',1);
            setDashArrayOfThePath('#Line_226',-1);
    
        
            var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    
            tl.to('#Line_228',.5,{ strokeDashoffset: 0},0)
            tl.to('#Line_227',.5,{ strokeDashoffset: 0},0)
            tl.to('#Line_226',.5,{ strokeDashoffset: 0},0)
    
        }
        drawPathAnim();

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6952',-.5);
    StarScaleAnim('#Path_6951',0);

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
        tl.to('#Icon15Grp1>*',.2,{ y:5,stagger:{each:.2,},})
        tl.to('#Icon15Grp1>*',.2,{ y:0,stagger:{each:.2,},},.2)

}
icon15Anim();
