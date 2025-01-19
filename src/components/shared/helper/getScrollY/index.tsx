const getScrollY = (ref: any, setScrollY: any) => (e: any) => {
  const bottomPoint = e.currentTarget.scrollY + e.currentTarget.innerHeight;
  const blockOffset = ref.current.offsetTop + ref.current.offsetHeight;
  const scrollY = bottomPoint - blockOffset;

  console.log(scrollY);

  if (scrollY < e.currentTarget.innerHeight)
    setScrollY(scrollY > 0 ? scrollY : 0);
};

export default getScrollY;
