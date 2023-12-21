gsap.to("#page1 h1", {
	transform: "translateX(-100%)",
  fontWeight: "100",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    start: "top 0",
    end: "bottom -200%",
    scrub: 1,
    pin: true,
		// markers: true,
		
  },
});
