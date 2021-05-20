
var icon14Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6949',-.5);
    StarScaleAnim('#Path_6948',0);

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2150',{x:-15});
        tl.to('#Group_2150',1,{ x:15,})
        tl.to('#Group_2150',1,{ x:-15,})
        tl.to('#Group_2151',1,{ x:15,},0)
        tl.to('#Group_2152',1,{ x:-15,},1)

}
icon14Anim();
