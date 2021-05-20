
var icon13Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6946',-.5);
    StarScaleAnim('#Path_6945',0);

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2146',{y:-15});
        tl.to('#Group_2146',1,{ y:15,})
        tl.to('#Group_2146',1,{ y:-15,})
        tl.to('#Group_2147',1,{ y:15,},0)
        tl.to('#Group_2145',1,{ y:-15,},1)

}
icon13Anim();
