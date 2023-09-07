import { styled } from "@mui/material";

interface HeartContainerProps {
  isLiked: boolean;
}

export const Wrapper = styled("div")(() => ({
  position: "absolute",
  top: "0px",
  right: "0px",
}));

export const HeartContainer = styled("div")<HeartContainerProps>((props) => {
  if (props.isLiked) {
    return {
      "& svg": {
        "#heart": {
          transform: "scale(1)",
          fill: "#e2264d",
        },
        "#grp1": {
          opacity: 1,
          transition: "0.1s all 0.3s",
          "#oval1": {
            transform: "scale(0) translate(0, -30px)",
            transformOrigin: "0 0 0",
            transition: "0.5s transform 0.3s",
          },
          "#oval2": {
            transform: "scale(0) translate(10px, -50px)",
            transformOrigin: "0 0 0",
            transition: "1.5s transform 0.3s",
          },
        },
        "#grp2": {
          opacity: 1,
          transition: "0.1s opacity 0.3s",
          "#oval1": {
            transform: "scale(0) translate(30px, -15px)",
            transformOrigin: "0 0 0",
            transition: "0.5s transform 0.3s",
          },
          "#oval2": {
            transform: "scale(0) translate(60px, -15px)",
            transformOrigin: "0 0 0",
            transition: "1.5s transform 0.3s",
          },
        },
        "#grp3": {
          opacity: 1,
          transition: "0.1s opacity 0.3s",
          "#oval1": {
            transform: "scale(0) translate(30px, 0px)",
            transformOrigin: "0 0 0",
            transition: "0.5s transform 0.3s",
          },
          "#oval2": {
            transform: "scale(0) translate(60px, 10px)",
            transformOrigin: "0 0 0",
            transition: "1.5s transform 0.3s",
          },
        },
        "#grp4": {
          opacity: 1,
          transition: "0.1s opacity 0.3s",
          "#oval1": {
            transform: "scale(0) translate(30px, 15px)",
            transformOrigin: "0 0 0",
            transition: "0.5s transform 0.3s",
          },
          "#oval2": {
            transform: "scale(0) translate(40px, 50px)",
            transformOrigin: "0 0 0",
            transition: "1.5s transform 0.3s",
          },
        },
        "#grp5": {
          opacity: 1,
          transition: "0.1s opacity 0.3s",
          "#oval1": {
            transform: "scale(0) translate(-10px, 20px)",
            transformOrigin: "0 0 0",
            transition: "0.5s transform 0.3s",
          },
          "#oval2": {
            transform: "scale(0) translate(-60px, 30px)",
            transformOrigin: "0 0 0",
            transition: "1.5s transform 0.3s",
          },
        },
        "#grp6": {
          opacity: 1,
          transition: "0.1s opacity 0.3s",
          "#oval1": {
            transform: "scale(0) translate(-30px, 0px)",
            transformOrigin: "0 0 0",
            transition: "0.5s transform 0.3s",
          },
          "#oval2": {
            transform: "scale(0) translate(-60px, -5px)",
            transformOrigin: "0 0 0",
            transition: "1.5s transform 0.3s",
          },
        },
        "#grp7": {
          opacity: 1,
          transition: "0.1s opacity 0.3s",
          "#oval1": {
            transform: "scale(0) translate(-30px, -15px)",
            transformOrigin: "0 0 0",
            transition: "0.5s transform 0.3s",
          },
          "#oval2": {
            transform: "scale(0) translate(-55px, -30px)",
            transformOrigin: "0 0 0",
            transition: "1.5s transform 0.3s",
          },
        },
      },
    };
  }
});

export const SVGWrapper = styled("svg")(() => ({
  cursor: "pointer",
  overflow: "visible",
  width: "60px",
}));
