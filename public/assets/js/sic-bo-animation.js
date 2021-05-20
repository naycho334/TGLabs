
var icon18Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6961',-.5);
    StarScaleAnim('#Path_6960',0);

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2166',{transformOrigin:'bottom left',rotate:10})
    gsap.set('#Group_2165',{transformOrigin:'bottom right',rotate:-10})
    gsap.set('#Group_2164',{transformOrigin:'bottom right',rotate:-10})
        tl.to('#Group_2166',1,{ rotate:0,})
        tl.to('#Group_2165',1,{ rotate:0,},0)
        tl.to('#Group_2164',1,{ rotate:0,},0)
        tl.to('#Group_2166',1,{ rotate:10,},1)
        tl.to('#Group_2165',1,{ rotate:-10,},1)
        tl.to('#Group_2164',1,{ rotate:-10,},1)

}
icon18Anim();
