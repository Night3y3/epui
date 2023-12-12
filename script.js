const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

gsap.from("a", {
  stagger: 0.2,
  duration: 1,
  ease: Power2,
  y: 10,
  opacity: 0,
});

Shery.textAnimate("#heading h1", {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".anim2", {
  y: 50,
  stagger: 0.2,
  opacity: 0,
  duration: 1,
  ease: Expo,
});

Shery.imageEffect("#equi img", {
  style: 3, //Select Style
  config: {
    uFrequencyX: { value: 12.98, range: [0, 100] },
    uFrequencyY: { value: 8.4, range: [0, 100] },
    uFrequencyZ: { value: 23.66, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 25.53 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.7500058689579079 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.73, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  preset: "./presets/wigglewobble.json",
});

Shery.imageEffect(".imgeff img", {
  style: 5,
  config: {
    a: { value: 1.83, range: [0, 30] },
    b: { value: -0.71, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6666666666666666 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.31, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

gsap.from("#equi img", {
  z: -4,
  stagger: 0.2,
  opacity: 0,
  duration: 2,
  ease: Expo,
});

Shery.imageEffect("#bimg", {
  style: 5,
  config: {
    a: { value: 0.46, range: [0, 30] },
    b: { value: -0.91, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.6810232791445314 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 2.71, range: [1, 15] },
    durationOut: { value: 0.74, range: [0.1, 5] },
    durationIn: { value: 1.26, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 35 } },
    discard_threshold: { value: 0.8, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.38, range: [0, 2] },
    noise_scale: { value: 14.5, range: [0, 100] },
  },
  gooey: true,
});

document.querySelector("#ftext").addEventListener("mouseover", () => {
  gsap.to("#future video", {
    opacity: 1,
    duration: 1,
    ease: Expo,
  });
});

document.querySelector("#ftext").addEventListener("mouseleave", () => {
  gsap.to("#future video", {
    opacity: 0,
    duration: 1,
    ease: Expo,
  });
});
