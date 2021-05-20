var icon1Anim = () => {

    let StarScaleAnim = (el, offset) => {
        gsap.set(el, { transformOrigin: "center" });
        var tl = new TimelineLite({ repeat: -1, repeatDelay: 0 }, offset);
        tl.to(el, .5, { scale: .5 })
            .to(el, .5, { scale: 1 })

    }
    StarScaleAnim('#Path_6902', -.5);
    StarScaleAnim('#Path_6901', 0);

    let drawPathAnim = () => {
        let setDashArrayOfThePath = (PathId, NP) => {
            var DrawPath = document.querySelector(PathId);
            var PathLenth = DrawPath.getTotalLength();
            gsap.set(DrawPath, { strokeDasharray: PathLenth, strokeDashoffset: (NP) * PathLenth });
        }
        setDashArrayOfThePath('#Line_176', 1);
        setDashArrayOfThePath('#Line_177', 1);
        setDashArrayOfThePath('#Line_178', 1);
        setDashArrayOfThePath('#Line_173', -1);
        setDashArrayOfThePath('#Line_174', 1);
        setDashArrayOfThePath('#Line_175', 1);


        var tl = new TimelineLite({ repeat: -1, repeatDelay: 0 });

        tl.to('#Line_176', .5, { strokeDashoffset: 0 }, 0)
        tl.to('#Line_177', .5, { strokeDashoffset: 0 }, 0)
        tl.to('#Line_178', .5, { strokeDashoffset: 0 }, 0)
        tl.to('#Line_173', .5, { strokeDashoffset: 0 }, 0)
        tl.to('#Line_174', .5, { strokeDashoffset: 0 }, 0)
        tl.to('#Line_175', .5, { strokeDashoffset: 0 }, 0)
    }
    drawPathAnim();
    var tl = new TimelineLite({ repeat: -1, repeatDelay: 0 });
    tl.to('#Rocket001', .5, { x: 7, y: -7, }, 0)
    tl.to('#Rocket001', .5, { x: 0, y: 0, }, .5)
}
icon1Anim();
