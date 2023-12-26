import React, { useState, useEffect, useRef } from "react";
import './RevealOnScroll.css'

export default function RevealOnScroll ( {children} ) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;

      if (element) {
        const { top } = element.getBoundingClientRect();

        if (top < window.innerHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', onWindScroll);
    return () => window.removeEventListener('scroll', onWindScroll);
    }, []);

    const classes = isVisible
      ? `show`
      : `hide`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}