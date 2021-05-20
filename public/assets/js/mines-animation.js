
var icon9Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.1})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6934',-.5);
    StarScaleAnim('#Path_6933',0);

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Path_6936,#Line_191',{transformOrigin:"bottom left",})
    // gsap.set('#Path_6936,#Group_2130',{opacity:0})
        tl.to('#Path_6936',.2,{ scale:1.2})
        tl.to('#Path_6936',.2,{ scale:.9})
        tl.to('#Path_6936',.2,{ scale:1.3})
        tl.to('#Path_6936',.2,{ scale:1})
        tl.to('#Line_191',.4,{ scale:0},0)
        tl.to('#Line_191',.4,{ scale:1},.4)

}
icon9Anim();
