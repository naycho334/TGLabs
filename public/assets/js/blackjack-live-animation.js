
var icon23Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6984',-.5);


    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2208',{transformOrigin:'bottom left'})
    gsap.set('#Group_2216',{transformOrigin:'center'})
        tl.to('#Group_2208',1,{ rotate:-10,})
        tl.to('#Group_2208',.5,{ rotate:0,},1)
        tl.to('#Group_2216',1.5,{ rotate:-360,ease:'none'},0)

    var tl1= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#icon_my-account,#icon_my-account-2',{transformOrigin:'center'})
        tl1.to('#icon_my-account',1,{ scale:.8})
        .to('#icon_my-account',1,{ scale:1})
        .to('#icon_my-account-2',1,{ scale:.8},.5)
        .to('#icon_my-account-2',1,{ scale:1},1.5)

}
icon23Anim();
