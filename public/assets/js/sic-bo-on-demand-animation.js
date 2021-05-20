
var icon19Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6963',-.5);
    StarScaleAnim('#Path_6962',0);

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2171',{transformOrigin:'bottom left',rotate:10})
    gsap.set('#Group_2170',{transformOrigin:'bottom right',rotate:-10})
    gsap.set('#Group_2169',{transformOrigin:'bottom right',rotate:-10})
        tl.to('#Group_2171',1,{ rotate:0,})
        tl.to('#Group_2170',1,{ rotate:0,},0)
        tl.to('#Group_2169',1,{ rotate:0,},0)
        tl.to('#Group_2171',1,{ rotate:10,},1)
        tl.to('#Group_2170',1,{ rotate:-10,},1)
        tl.to('#Group_2169',1,{ rotate:-10,},1)

}
icon19Anim();
