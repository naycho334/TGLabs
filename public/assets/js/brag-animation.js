
var icon20Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6965',-.5);
    StarScaleAnim('#Path_6964',0);

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2178',{transformOrigin:'bottom center'})
        tl.to('#Group_2178',1,{ rotate:-10,})
        tl.to('#Group_2178',.5,{ rotate:0,},1)


}
icon20Anim();
