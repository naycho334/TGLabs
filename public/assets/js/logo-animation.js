try {
  gsap.set("#Dot1", { y: 5, opacity: 0, scale: 0, transformOrigin: "center" })
  gsap.set("#Dot2", { y: 10, x: 5, opasity: 0, scale: 0, transformOrigin: "center" })
  gsap.set("#Dot3", { y: 15, opasity: 0, scale: 0, transformOrigin: "center" })
  gsap.to("#gWater", { xPercent: -51, ease: 'none', duration: 2, repeat: -1, })
  gsap.timeline({ repeat: -1, repeatDelay: .3 })
    .to("#Dot1", { scale: 1, opacity: 1 })
    .to("#Dot1", { y: -10, duration: 1, ease: 'power1.in' }, "<")
    .to("#Dot1", { scale: 1.2, opacity: 0, duration: .3, ease: 'power1.in' }, ">-.3")
    .to("#Dot2", { scale: 1, opacity: 1 }, "<")
    .to("#Dot2", { y: -5, duration: 1, ease: 'power1.in' }, "<")
    .to("#Dot2", { scale: 1.2, opacity: 0, duration: .3, ease: 'power1.in' }, ">-.3")
    .to("#Dot3", { scale: 1, opacity: 1 }, "<")
    .to("#Dot3", { y: -5, duration: 1, ease: 'power1.in' }, "<")
    .to("#Dot3", { scale: 1.2, opacity: 0, duration: .3, ease: 'power1.in' }, ">-.3")

}
catch (error) {
  console.error("Logo animation", error)
}