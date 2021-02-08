


import { useState, useEffect, useRef, RefObject } from 'react';

export function useMouseMove(el: RefObject<any>, delay = 3000) {
  let timeoutRef: any = useRef(null);
  const [isMouseMoving, setIsMouseActive] = useState<boolean>(false);

  useEffect(() => {
    if (!el.current) {
      return;
    }

    const onMouseMove = () => {
      clearTimeout(timeoutRef.current);
      setIsMouseActive(true);
      timeoutRef.current = setTimeout(() => {
        setIsMouseActive(false);
      }, delay);
    };

    el.current.addEventListener('mousemove', onMouseMove);

    return (): void => {
      el.current.removeEventListener('mousemove', onMouseMove);
    };
  }, [el]);

  return { isMouseMoving };
}

export default useMouseMove;