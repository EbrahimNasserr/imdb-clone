import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import intro from "../../public/intro.jpg";

export default function Intro() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <section
      ref={container}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      className="h-screen overflow-hidden"
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative h-full">
          <Image
            src={intro}
            alt="intro.jpg"
            fill
            placeholder="blur"
            className=" object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
  // const container = useRef();
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start start", "end start"],
  // });

  // const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  // return (
  //   <section className="h-screen overflow-hidden">
  //     <motion.div style={{ y }} className="relative h-full">
  //       <Image src={intro} alt="intro.jpg" fill placeholder="blur" />
  //     </motion.div>
  //   </section>
  // );
}
