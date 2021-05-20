
var icon21Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6972',-.5);
    StarScaleAnim('#Path_6971',0);

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2187,#Icon21NG>*',{transformOrigin:'center'})
        tl.to('#Group_2187',3,{ rotate:720,})
        tl.to('#Icon21NG>*',.5,{ scale:.8,stagger:{each:.5}},0)
        tl.to('#Icon21NG>*',.5,{ scale:1,stagger:{each:.5}},.5)


}
icon21Anim();
