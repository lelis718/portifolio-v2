import { useEffect, useRef, useState } from "react";

export function AboutMe() {
  const xpYears = new Date().getFullYear() - 2002;

  const ref: any = useRef(null);
  const [scrollFixedToTop, setScrollFixedToTop] = useState(false);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = (event: any) => {
      const elHeight = ref?.current?.clientHeight;
      const scrollY = window.scrollY - ref?.current?.offsetTop;

      if (elHeight <= 0) return;
      const offset = scrollY / elHeight;

      if (offset < 1) {
        setScrollFixedToTop(false);
        setImageOpacity(offset);
      } else if (offset > 1.6) {
        setScrollFixedToTop(true);
      } else {
        setScrollFixedToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(null);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`aboutme-container ${scrollFixedToTop ? "fix-to-top" : ""}`}>
        <div className="fixed-content">
          <h2>
            André <strong>Lelis</strong> Gonçalves
          </h2>
        </div>
        <div className="scrollabe-content">
          <div className="section">{/*Image Transition Scroll*/}</div>
          <div className="section">{/*Image Transition Scroll*/}</div>
          <div className="section text">
            <h3>Developer for passion</h3>
            <p>
              <strong>{xpYears} years</strong> (and counting) developing all
              kinds of web applications has tought me that, despite of all
              achieved titles such as Backend Developer, Front End Developer,
              Senior System Analyst and so on, all I want to do is build some
              cool stuff.
            </p>
          </div>
          <div className="section text">
            <h3>My Family</h3>
            <p>
              Since this is some section about me, my family must be present,
              they are the most important people in my life. :)
            </p>
          </div>
          <div className="section text">
            <h3>Hobbies</h3>
            <p>
              Games (play and develop), Cycle and Play with my kids is all what
              I like to do at most of time.{" "}
            </p>
            <p>
              Piano - currently having a lot of fun smashing on the piano to follow up on some sheet music (is kind of a new language, so let's learn :) )
            </p>
          </div>
          <div className="section text">
            <h3>My Dreams</h3>
            <p>
              Well... Having two kids, your dreams quite change a little bit,
              but as far as try to keep them safe.
              </p>
              <p> I also intent to publish my
              indie games someday, for now, the kids are the only ones who plays them.
            </p>
          </div>
          <div ref={ref} className="image-mask image-scroller ">
            <div className="image-transition background-1"></div>
            <div
              className="image-transition background-2"
              style={{ opacity: imageOpacity }}
            ></div>
          </div>
        </div>
        <div className="footer-section">{/*Some spacing for better text flowing*/}</div>
      </div>
    </>
  );
}
