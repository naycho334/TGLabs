
var icon11Anim=()=>{

    let StarScaleAnim=(el,offset)=>{
        gsap.set(el,{transformOrigin:"center"});
        var tl= new TimelineLite({repeat:-1, repeatDelay:0},offset);
        tl.to(el,.5,{ scale:.5})
        .to(el,.5,{ scale:1})

    }
    StarScaleAnim('#Path_6942',-.5);
    StarScaleAnim('#Path_6941',0);

    var tl= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2138>*',{stroke:"#fab893"})
        tl.to('#Group_2138>*',.2,{ stroke:"#fff",stagger:{each:.2,},})
        tl.to('#Group_2138>*',.2,{ stroke:"#fab893",stagger:{each:.2,},},.2)

    var tl1= new TimelineLite({repeat:-1, repeatDelay:0});
    gsap.set('#Group_2139',{y:12})
        tl1.to('#Group_2139',.5,{ y:0,})
        tl1.to('#Group_2139',1,{ y:12,})

}
icon11Anim();
