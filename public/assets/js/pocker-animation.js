
var icon22Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_7000',-.5);
    StarScaleAnim('#Path_6999',0);

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2251',{transformOrigin:'bottom center'})
        tl.to('#Group_2251',1,{ rotate:10,})
        tl.to('#Group_2251',1,{ rotate:0,})


}
icon22Anim();
