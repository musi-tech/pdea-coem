import { Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { CountUp } from "use-count-up";

const Records = ({ number }) => {
  const [start, setStart] = useState(false);
  const componentRef = useRef(null);

  console.log(start);

  const changeColor = (entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setStart(true);
      observer.disconnect();
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const observer = new IntersectionObserver(changeColor, options);

  React.useEffect(() => {
    observer.observe(componentRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={componentRef}>
      <Typography variant="h4">
        <CountUp isCounting={start} end={number} duration={2} /> +
      </Typography>
    </div>
  );
};

export default Records;
