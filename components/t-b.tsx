"use client";
import type { NextPage } from "next";
import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./t-b.module.css";

export type TBType = {
  className?: string;
};

const TB: NextPage<TBType> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "courses", "speakers"];
      // Use window.innerHeight / 3 so that when a section reaches the top 1/3 of the screen, it becomes active
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  const onHomeClick = useCallback(() => scrollTo("home"), []);
  const onCoursesClick = useCallback(() => scrollTo("courses"), []);
  const onSpeakersClick = useCallback(() => scrollTo("speakers"), []);

  const onMenuButtonClick = useCallback(() => {
    setIsMenuOpen((current) => !current);
  }, []);

  return (
    <header className={[styles.tb, className].join(" ")}>
      <Image
        className={styles.ltLogoColourWhite1Icon}
        loading="lazy"
        width={60}
        height={60}
        sizes="100vw"
        alt=""
        src="/LT-Logo-Colour-White-1@2x.png"
      />
      <div className={`${styles.row} ${isMenuOpen ? styles.rowOpen : ""}`}>
        <div className={styles.rowChild} />
        <div className={styles.text} onClick={onHomeClick} style={{ cursor: "pointer" }}>
          <div className={`${styles.speakers} ${activeSection === "home" ? styles.activeText : ""}`}>Home</div>
        </div>
        <div className={styles.text3} onClick={onCoursesClick} style={{ cursor: "pointer" }}>
          <div className={`${styles.courses} ${activeSection === "courses" ? styles.activeText : ""}`}>Courses</div>
        </div>
        <div className={styles.text4} onClick={onSpeakersClick} style={{ cursor: "pointer" }}>
          <div className={`${styles.speakers} ${activeSection === "speakers" ? styles.activeText : ""}`}>Speakers</div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <button className={styles.logInWrapper}>
          <div className={styles.logIn}>Log in</div>
        </button>
        <button className={styles.signUpWrapper}>
          <div className={styles.logIn}>SIGN UP</div>
        </button>
        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ""}`}
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={onMenuButtonClick}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default TB;
