
var icon25Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6992',-.5);

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2232',{transformOrigin:'center'})
        tl.to('#Group_2232',3,{ rotate:720,})

    var tl1= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#icon25_my-account,#icon25_my-account-2',{transformOrigin:'center'})
        tl1.to('#icon25_my-account',1,{ scale:.8})
        .to('#icon25_my-account',1,{ scale:1})
        .to('#icon25_my-account-2',1,{ scale:.8},.5)
        .to('#icon25_my-account-2',1,{ scale:1},1.5)


}
icon25Anim();
