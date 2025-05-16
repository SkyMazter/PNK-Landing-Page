import { useEffect, useState, useRef } from "react";

const About = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  const [phrase, setPhrase] = useState<string>("Welcome!");
  const [index, setIndex] = useState<number>(0);

  const phrases = [
    "Welcome!",
    "Buenos Dias!",
    "PNK Who?",
    "I See You...",
    "REad ME!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 6000); // change phrase every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  useEffect(() => {
    setPhrase(phrases[index]);
    const header = headerRef.current;
    if (!header) return;
    //removes deleting animation so that It doesnt appear first
    header.classList.remove("deleting-animation");

    //lets typing animation play first before adding the deleting one
    header.addEventListener("animationend", () => {
      header.classList.add("deleting-animation");
    });
    // Reset typing animation
    header.classList.remove("typing-animation");
    // Trigger reflow to restart animation
    void header.offsetWidth;
    header.classList.add("typing-animation");
  }, [index]);

  return (
    <div className="container d-flex align-items-center">
      <div className="about">
        <h1 className=" typing-animation header " ref={headerRef}>
          {phrase}
        </h1>
        <h4>What am I looking at?</h4>
        <p>
          You are currently connected to our very first community network node!
          <br></br>
          We are conducting this test run to see how well we are able to real
          world traffic. As well as that we want to see how the community reacts
          to the idea of a community network that is capable or providing them
          with free internet.
        </p>
        <h4>What can I do here?</h4>
        <p>
          With this being our now little private network, Imagine yourself being in a space
          completely separated from the Internet,That doesn’t meant there’s nothing
          to do here. In the top right corner you will see a nice selection of
          applications and pages you can visit and mess around with. As well as
          that feel free to explore all the posts we have in the bottom section
          of this page 😆
        </p>
      </div>
    </div>
  );
};

export default About;
