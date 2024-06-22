import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(ref) {
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(
    new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      threshold: 0.5
    })
  );

  useEffect(() => {
    const currentObserver = observer.current;
    if (ref.current) {
      currentObserver.observe(ref.current);
    }
    return () => currentObserver.disconnect();
  }, [ref]);

  return isVisible;
}
