try {
  // Поинт
  gsap.set("#point1, #point2, #point3, #point4, #point5, #point6, #point7, #point8, #point9, #point10", { opacity: 0 })
  gsap.timeline({ repeat: -1 })
    .to("#point1, #point2, #point3, #point4, #point5, #point6, #point7, #point8, #point9, #point10", { duration: 0.1, opacity: 1 }, '1')
    .to("#point1", { duration: 3, motionPath: { path: "#line1", align: "#line1", alignOrigin: [0.5, 0.5] }, ease: 'sin.inOut' }, '1')
    .to("#point1", { duration: 0.2, scale: 1.2, repeat: 8, yoyo: true }, '1')
    .to("#point1", { opacity: 0 }, '1+=2.5')
    .to("#point2", { duration: 3, motionPath: { path: "#line2", align: "#line2", alignOrigin: [0.5, 0.5] }, ease: 'sin.inOut' }, '1')
    .to("#point2", { duration: 0.2, scale: 1.2, repeat: 8, yoyo: true }, '1')
    .to("#point2", { opacity: 0 }, '1+=2.5')
    .to("#point3", { duration: 3, motionPath: { path: "#line3", align: "#line3", alignOrigin: [0.5, 0.5] }, ease: 'sin.inOut' }, '1')
    .to("#point3", { duration: 0.2, scale: 1.2, repeat: 8, yoyo: true }, '1')
    .to("#point3", { opacity: 0 }, '1+=2.5')
    .to("#point4", { duration: 3, motionPath: { path: "#line4", align: "#line4", alignOrigin: [0.5, 0.5] }, ease: 'sin.inOut' }, '1')
    .to("#point4", { duration: 0.2, scale: 1.2, repeat: 8, yoyo: true }, '1')
    .to("#point4", { opacity: 0 }, '1+=2.5')
    .to("#point5", { duration: 3, motionPath: { path: "#line5", align: "#line5", alignOrigin: [0.5, 0.5] }, ease: 'sin.inOut' }, '1')
    .to("#point5", { duration: 0.2, scale: 1.2, repeat: 8, yoyo: true }, '1')
    .to("#point5", { opacity: 0 }, '1+=2.5')
    .to("#point6", { duration: 3, motionPath: { path: "#line6", align: "#line6", alignOrigin: [0.5, 0.5] }, ease: 'sin.inOut' }, '1')
    .to("#point6", { duration: 0.2, scale: 1.2, repeat: 8, yoyo: true }, '1')
    .to("#point6", { opacity: 0 }, '1+=2.5')
    .to("#point7", { duration: 3, motionPath: { path: "#line7", align: "#line7", alignOrigin: [0.5, 0.5] }, ease: 'sin.inOut' }, '1')
    .to("#point7", { duration: 0.2, scale: 1.2, repeat: 8, yoyo: true }, '1')
    .to("#point7", { opacity: 0 }, '1+=2.5')
    .to("#point8", { duration: 3, motionPath: { path: "#line8", align: "#line8", alignOrigin: [0.5, 0.5] }, ease: 'sin.inOut' }, '1')
    .to("#point8", { duration: 0.2, scale: 1.2, repeat: 8, yoyo: true }, '1')
    .to("#point8", { opacity: 0 }, '1+=2.5')
    .to("#point9", { duration: 3, motionPath: { path: "#line9", align: "#line9", alignOrigin: [0.5, 0.5] }, ease: 'sin.inOut' }, '1')
    .to("#point9", { duration: 0.2, scale: 1.2, repeat: 8, yoyo: true }, '1')
    .to("#point9", { opacity: 0 }, '1+=2.5')
    .to("#point10", { duration: 3, motionPath: { path: "#line10", align: "#line10", alignOrigin: [0.5, 0.5] }, ease: 'sin.inOut' }, '1')
    .to("#point10", { duration: 0.2, scale: 1.2, repeat: 8, yoyo: true }, '1')
    .to("#point10", { opacity: 0 }, '1+=2.5')
  // Поинт

  // Рулетка
  gsap.set("#ruletka2", { skewX: -25, rotate: 38, y: -19, scale: 0.9, transformOrigin: "center" })
  gsap.set("#ballline", { skewX: -25, rotate: 38, y: -19, scale: 0.9, transformOrigin: "center" })
  gsap.set("#ruletka3", { skewX: -30, rotate: 36, scale: 0.7, transformOrigin: "center" })
  gsap.timeline({ repeat: -1 })
    .to("#ruletka2 > *", { duration: 2, rotation: 360, transformOrigin: '50% 50%', ease: 'sine.inOut' })
    .to("#ruletka3 > *", { duration: 2, rotation: 360, transformOrigin: '50% 50%', ease: 'sine.inOut' }, '<')
    .to("#ruletball", { duration: 2, motionPath: { path: "#ballline", align: "#ballline", alignOrigin: [0.5, 0.5] }, ease: 'sin.inOut' }, '<+0.2')
  // Рулетка

  // Кубик
  gsap.set("#four, #threeup, #second1", { opacity: 0 })
  gsap.timeline({ repeat: -1 })
    .to("#cube", { duration: 1, y: -5, repeat: 1, yoyo: true, ease: 'none' })
    .to("#cube", { duration: 0.5, scale: 0.5, transformOrigin: 'center' })
    .to("#cube", { duration: 0.5, rotate: 1080, transformOrigin: 'center' })
    .set("#threeleft, #one, #second2", { opacity: 0 }, '<')
    .set("#four, #threeup, #second1", { opacity: 1 }, '<0.1')
    .to("#cube", { duration: 0.5, scale: 1, transformOrigin: 'center' })
    .to("#cube", { duration: 1, y: -5, repeat: 1, yoyo: true, ease: 'none' })
    .to("#cube", { duration: 0.5, scale: 0.5, transformOrigin: 'center' })
    .to("#cube", { duration: 0.5, rotate: -1080, transformOrigin: 'center' })
    .set("#four, #threeup, #second1", { opacity: 0 }, '<')
    .set("#threeleft, #one, #second2", { opacity: 1 }, '<0.1')
    .to("#cube", { duration: 0.5, scale: 1, transformOrigin: 'center' })

  // Кубик

  // Шарики
  gsap.to("#bubbles", { duration: 5, y: -335, ease: 'none', repeat: -1 })
  gsap.to("#bubblesright", { duration: 5, y: -126, x: -3, ease: 'none', repeat: -1 })
  gsap.to("#bubblesleft", { duration: 5, y: -176, ease: 'none', repeat: -1 })
  //Шарики

  //7
  gsap.timeline({ repeat: -1 })
    .to("#handle7", { duration: 1, skewX: 10, rotate: -10, transformOrigin: '100% 100%' })
    .from("#seven1", { duration: 0.25, y: -30 }, '1')
    .from("#seven2", { duration: 0.3, y: -30 }, '1')
    .from("#seven3", { duration: 0.4, y: -30 }, '1')
    .to("#seven1", { duration: 0.25, y: 30 }, '<+2')
    .to("#seven2", { duration: 0.3, y: 30 }, '<')
    .to("#seven3", { duration: 0.4, y: 30 }, '<')
    .to("#handle7", { duration: 1, skewX: 0, rotate: 0, transformOrigin: '100% 100%' })
  //7

  //Домино и свет
  gsap.timeline({ repeat: -1 })
    .from("#light", { duration: 2, opacity: 0 })
    .to("#dominoup", { duration: 2, y: -7, ease: 'none', repeat: 1, yoyo: true }, '<')
    .to("#dominodown, #brilliant", { duration: 2, y: -5, ease: 'none', repeat: 1, yoyo: true }, '<')
    .to("#light", { duration: 2, opacity: 0 }, '<+1.5')
  //Домино и свет

  //Фишки
  gsap.to("#red", { duration: 1.5, transformOrigin: 'center', rotate: 45, ease: 'none', repeat: -1, yoyo: true })
  gsap.to("#blue", { duration: 1.3, transformOrigin: 'center', rotate: -45, ease: 'none', repeat: -1, yoyo: true })
  gsap.to("#yellow", { duration: 1.6, transformOrigin: 'center', rotate: 45, ease: 'none', repeat: -1, yoyo: true })
  //Фишки

  //Карты
  gsap.timeline({ repeat: -1 })
    .to("#card1", { duration: 1, y: -5, ease: 'none' })
    .to("#card2", { duration: 1, y: 5, ease: 'none' }, '<')
    .to("#card3", { duration: 1, y: -5, ease: 'none' }, '<')
    .to("#card4", { duration: 1, y: 5, ease: 'none' }, '<')
    .to("#card1, #card2, #card3, #card4", { duration: 1, y: 0, ease: 'none' })
    .to("#card1", { duration: 1, y: 5, ease: 'none' },)
    .to("#card2", { duration: 1, y: -5, ease: 'none' }, '<')
    .to("#card3", { duration: 1, y: 5, ease: 'none' }, '<')
    .to("#card4", { duration: 1, y: -5, ease: 'none' }, '<')
    .to("#card1, #card2, #card3, #card4", { duration: 1, y: 0, ease: 'none' })
  //Карты

  //Вода
  // gsap.timeline({ repeat: -1 }, '<')
  //     .to("#water", { duration: 2, y: -5, ease: 'none' })
  //     .to("#water", { duration: 2, y: 0, ease: 'none' })
  //Вода


  function moveCusino(target, time, path) {
    var tempTl = gsap.timeline({ repeat: 3 })
      .set(target, { skewX: -60, scaleX: 0.8, scaleY: 0.5, transformOrigin: '50% 50%' })
      .to(target, { duration: time, motionPath: { path: path, align: path, alignOrigin: [0.5, 0.5] }, ease: 'none' }, '>')
      .to(target, { duration: time * 0.5, skewX: -20, scaleX: 1, scaleY: 0.9, ease: 'none' }, '<')
      .to(target, { duration: time * 0.5, skewX: 20, scaleX: 0.4, scaleY: 0.4, ease: 'none' }, '>')
    return tempTl;
  }
  tlrul3 = gsap.timeline({ paused: true })
  document.querySelectorAll('#rul3 > *').forEach((elem, index) => {
    tlrul3.add(moveCusino(elem, 6, '#casline3'), index * 1.2)
  })
  tlrul2 = gsap.timeline({ paused: true })
  document.querySelectorAll('#rul2 > *').forEach((elem, index) => {
    tlrul2.add(moveCusino(elem, 6, '#casline2'), index * 1.2)
  })
  tlrul1 = gsap.timeline({ paused: true })
  document.querySelectorAll('#rul1 > *').forEach((elem, index) => {
    tlrul1.add(moveCusino(elem, 6, '#casline1'), index * 1.2)
  })

  gsap.timeline({ repeat: -1, repeatDelay: 2 })
    .set([tlrul1, tlrul2, tlrul3], { progress: 0.35 })
    .to("#handlecasino", { duration: 0.4, skewX: 20, rotate: -20, repeat: 1, yoyo: true, transformOrigin: '100% 100%', ease: 'sine.inOut' })


    .to(tlrul1, { duration: 2, progress: 0.77, repeat: 0, ease: 'none' }, '<')
    .to(tlrul2, { duration: 2.5, progress: 0.77, repeat: 0, ease: 'none' }, '<')
    .to(tlrul3, { duration: 2.25, progress: 0.77, repeat: 0, ease: 'none' }, '<')

  // .to("#handlecasino", { duration: 1, skewX: 0, rotate: 0, transformOrigin: '100% 100%' })

  gsap.to("#money1", { duration: 1, scale: 1.1, transformOrigin: 'center', repeat: -1, yoyo: true, ease: 'sin.inOut' })
  gsap.to("#money2", { duration: 0.7, scale: 1.1, transformOrigin: 'center', repeat: -1, yoyo: true, ease: 'sin.inOut' })
  gsap.to("#money3", { duration: 0.5, scale: 1.1, transformOrigin: 'center', repeat: -1, yoyo: true, ease: 'sin.inOut' })
  gsap.to("#money4", { duration: 1, scale: 1.1, transformOrigin: 'center', repeat: -1, yoyo: true, ease: 'sin.inOut' })
  gsap.to("#money5", { duration: 1.1, scale: 1.1, transformOrigin: 'center', repeat: -1, yoyo: true, ease: 'sin.inOut' })
  gsap.to("#money6", { duration: 0.6, scale: 1.1, transformOrigin: 'center', repeat: -1, yoyo: true, ease: 'sin.inOut' })
  gsap.to("#money7", { duration: 1.2, scale: 1.1, transformOrigin: 'center', repeat: -1, yoyo: true, ease: 'sin.inOut' })
  gsap.to("#money8", { duration: 1.3, scale: 1.1, transformOrigin: 'center', repeat: -1, yoyo: true, ease: 'sin.inOut' })
  gsap.to("#colb", { duration: 2, y: -8, transformOrigin: 'center', repeat: -1, yoyo: true, ease: 'sin.inOut' })
}
catch (error) {
  console.error("Home animation", error)
}