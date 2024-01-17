import {
  useEffect,
  useState,
  useRef,
} from "react";
import "./GridContainer.css";

export default function GridContainer({
  title,
  description,
}) {
  const [isVisible, setIsVisible] =
    useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;

      if (element) {
        const { top } =
          element.getBoundingClientRect();

        if (top < window.innerHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener(
      "scroll",
      onWindScroll
    );
    return () =>
      window.removeEventListener(
        "scroll",
        onWindScroll
      );
  }, []);

  const classes = isVisible
    ? `about__container-grid`
    : ``;

  return (
    <div
      ref={ref}
      className={classes}
    >
      <h3 className="about__container-grid-ul">
        {title}
      </h3>
      <p className="about__container-grid-ul-li">
        {description}
      </p>
    </div>
  );
}
