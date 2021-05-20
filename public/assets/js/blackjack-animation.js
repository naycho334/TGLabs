
var icon17Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6978',-.5);
    StarScaleAnim('#Path_6977',0);

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2196',{transformOrigin:'bottom left'})
    gsap.set('#Group_2204',{transformOrigin:'center'})
        tl.to('#Group_2196',1,{ rotate:-10,})
        tl.to('#Group_2196',.5,{ rotate:0,},1)
        tl.to('#Group_2204',1.5,{ rotate:-360,ease:'none'},0)

}
icon17Anim();
