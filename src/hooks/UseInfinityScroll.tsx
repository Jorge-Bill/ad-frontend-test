import { useEffect } from 'react';

const useInfiniteScroll = (
  callback: () => void,
  isScrollLocked: boolean = false
) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        !isScrollLocked &&
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 10
      ) {
        callback();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback]);

  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isScrollLocked]);
};

export default useInfiniteScroll;
