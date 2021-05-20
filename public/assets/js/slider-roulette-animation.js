
var icon26Anim=()=>{

    let drawPathAnim=()=>{
        let setDashArrayOfThePath=(PathId,NP)=>{
            var DrawPath = document.querySelector(PathId);
            var PathLenth = DrawPath.getTotalLength();
            gsap.set(DrawPath,{strokeDasharray:PathLenth,strokeDashoffset: (NP)*PathLenth});
            }
            setDashArrayOfThePath('#Line_289',1);
            setDashArrayOfThePath('#Line_288',1);
            setDashArrayOfThePath('#Line_287',-1);
    
        
            var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    
            tl.to('#Line_289',.5,{ strokeDashoffset: 0},0)
            tl.to('#Line_288',.5,{ strokeDashoffset: 0},0)
            tl.to('#Line_287',.5,{ strokeDashoffset: 0},0)
    
        }
        drawPathAnim();

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6994',-.5);
    StarScaleAnim('#Path_6993',0);

    var tl= new TimelineLite({repeat:-1, repeatDelay:2});
        tl.to('#Group_2241',.2,{ x:-5})
        tl.to('#Group_2241',.2,{ x:0},.2)
        tl.to('#Group_2241',.2,{ x:-5},.4)
        tl.to('#Group_2241',.2,{ x:0},.6)

}
icon26Anim();