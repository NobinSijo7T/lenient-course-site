'use client';

import Image from 'next/image';
import chaptersData from '@/data/scrollstory.json';
import { useEffect, useRef, useState } from 'react';
import styles from './ScrollStory.module.css';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  title: string;
  caption: string;
}

interface Chapter {
  name: string;
  leftMedia: MediaItem;
  rightMedia: MediaItem;
}

interface ScrollStoryProps {
  chapters?: Chapter[];
}

const ScrollStory = ({ chapters: customChapters }: ScrollStoryProps) => {
  const chapters = (customChapters ?? chaptersData.chapters) as Chapter[];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const leftVideoRef = useRef<HTMLVideoElement>(null);
  const rightVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const wrapperTop = rect.top;
      const wrapperHeight = rect.height;
      const scrollProgress = Math.max(
        0,
        Math.min(1, -wrapperTop / (wrapperHeight - window.innerHeight)),
      );
      const newIndex = Math.min(
        chapters.length - 1,
        Math.floor(scrollProgress * chapters.length),
      );

      if (newIndex !== activeIndex) {
        setIsAnimating(true);
        setActiveIndex(newIndex);
        window.setTimeout(() => setIsAnimating(false), 450);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [activeIndex, chapters.length]);

  useEffect(() => {
    const currentChapter = chapters[activeIndex];

    if (currentChapter.leftMedia.type === 'video' && leftVideoRef.current) {
      void leftVideoRef.current.play();
    }

    if (currentChapter.rightMedia.type === 'video' && rightVideoRef.current) {
      void rightVideoRef.current.play();
    }
  }, [activeIndex, chapters]);

  const renderMedia = (media: MediaItem, isLeft: boolean, index: number) => {
    const isActive = index === activeIndex;
    const videoRef = isLeft ? leftVideoRef : rightVideoRef;

    return (
      <div
        className={`${styles.mediaFrame} ${styles.mediaCard} ${isActive ? styles.active : styles.inactive} ${
          !isLeft ? styles.rightDelay : ''
        }`}
      >
        {media.type === 'image' ? (
          <Image
            src={media.src}
            alt={media.title}
            fill
            className={styles.mediaImage}
            priority={index === 0}
          />
        ) : (
          <video
            ref={videoRef}
            src={media.src}
            autoPlay
            muted
            loop
            playsInline
            className={styles.video}
          />
        )}
        <div className={styles.caption}>
          <p className={styles.captionTitle}>{media.title}</p>
          <p className={styles.captionText}>{media.caption}</p>
        </div>
      </div>
    );
  };

  const getPrevChapter = () => (activeIndex > 0 ? chapters[activeIndex - 1].name : null);
  const getNextChapter = () =>
    activeIndex < chapters.length - 1 ? chapters[activeIndex + 1].name : null;

  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
    >
      <div className={styles.stickyContainer}>
        <div className={styles.mobileLayout}>
          <div className={styles.mobileTopMedia}>
            {renderMedia(chapters[activeIndex].leftMedia, true, activeIndex)}
          </div>

          <div className={styles.mobileCenterText}>
            {getPrevChapter() && <div className={styles.surroundingChapter}>{getPrevChapter()}</div>}
            <div
              className={`${styles.activeChapter} ${styles.mobileActiveChapter} ${isAnimating ? styles.animating : ''}`}
            >
              {chapters[activeIndex].name}
            </div>
            {getNextChapter() && <div className={styles.surroundingChapter}>{getNextChapter()}</div>}
          </div>

          <div className={styles.mobileBottomMedia}>
            {renderMedia(chapters[activeIndex].rightMedia, false, activeIndex)}
          </div>
        </div>

        <div className={styles.desktopLayout}>
          <div className={styles.leftPanel}>
            {renderMedia(chapters[activeIndex].leftMedia, true, activeIndex)}
          </div>

          <div className={styles.centerPanel}>
            {getPrevChapter() && <div className={styles.surroundingChapter}>{getPrevChapter()}</div>}
            <div
              className={`${styles.activeChapter} ${styles.desktopActiveChapter} ${isAnimating ? styles.animating : ''}`}
            >
              {chapters[activeIndex].name}
            </div>
            {getNextChapter() && <div className={styles.surroundingChapter}>{getNextChapter()}</div>}
          </div>

          <div className={styles.rightPanel}>
            {renderMedia(chapters[activeIndex].rightMedia, false, activeIndex)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollStory;
