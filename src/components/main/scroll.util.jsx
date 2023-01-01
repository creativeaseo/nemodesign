export const scrollerFactory = {
  vertical(ref) {
    let isScrolling = false;

    return (top) => {
      if (isScrolling || !ref.current) return;

      isScrolling = true;

      ref.current.scrollTo({
        top,
        left: 0,
        behavior: 'smooth',
      });

      const check = () => {
        if (ref.current.scrollTop === top) {
          isScrolling = false;
          return;
        }

        requestAnimationFrame(check);
      };

      requestAnimationFrame(check);
    };
  },
  // horizental(ref) {
  //   // do something
  // },
};
