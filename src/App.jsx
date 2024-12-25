import React, { useRef } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Flower from "./assets/Flower.png";
import Paragraph from "./components/Paragraph";
import Bottom from "./components/Bottom";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const imageRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#maintext",
      markers: false,
      start: "top 0",
      end: "top -180%",
      scrub: 1,
    },
  });

  useGSAP(function () {
    tl.to(imageRef.current, {
      transform: "translateY(-20%)",
      duration: 1,
    });
    tl.to(imageRef.current, {
      transform: "translateY(-20%) scale(0.65)",
      duration: 1,
    });
  });

  return (
    <div className=" bg-[salmon] min-h-screen w-full text-white">
      <Header />
      <Main />
      <Paragraph />
      <Bottom />
      <img
        ref={imageRef}
        src={Flower}
        className="fixed top-0 h-[95vw] px-[1vw] left-[-115px]"
        alt=""
      />
    </div>
  );
};

export default App;
