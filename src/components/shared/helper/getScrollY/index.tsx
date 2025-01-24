const getScrollY = (ref: any, setScrollY: any) => (e: any) => {
  const bottomPoint = e.currentTarget.scrollY + e.currentTarget.innerHeight;
  const blockOffset = ref.current.offsetTop + ref.current.offsetHeight;
  const scrollY = bottomPoint - blockOffset;

  if (scrollY < e.currentTarget.outerHeight) {
    setScrollY(scrollY > 0 ? scrollY : 0);
    ref.current.style.willChange = "transform, opacity";
  } else {
    ref.current.style.willChange = "auto";
  }
};

export default getScrollY;
