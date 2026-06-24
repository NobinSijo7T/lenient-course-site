'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ScrollStory.module.css';

// TypeScript Types
interface MediaItem {
  type: 'image' | 'video';
  src: string;
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

// Sample Data
const sampleChapters: Chapter[] = [
  {
    name: 'Airbnb',
    leftMedia: {
      type: 'image',
      src: '/hero-img.png',
      caption: 'Transforming travel since 2008'
    },
    rightMedia: {
      type: 'image',
      src: '/Frame@3x.png',
      caption: 'Over 7M listings worldwide'
    }
  },
  {
    name: 'Stripe',
    leftMedia: {
      type: 'image',
      src: '/Frame-2087325062@2x.png',
      caption: 'Payment infrastructure for the internet'
    },
    rightMedia: {
      type: 'image',
      src: '/ChatGPT-Image-Jun-19-2026-09-27-58-PM-2@2x.png',
      caption: 'Processing billions in transactions'
    }
  },
  {
    name: 'DoorDash',
    leftMedia: {
      type: 'image',
      src: '/hero-img.png',
      caption: 'Local delivery made simple'
    },
    rightMedia: {
      type: 'image',
      src: '/Frame@3x.png',
      caption: 'Connecting communities with food'
    }
  },
  {
    name: 'Coinbase',
    leftMedia: {
      type: 'image',
      src: '/Frame-2087325062@2x.png',
      caption: 'The crypto economy platform'
    },
    rightMedia: {
      type: 'image',
      src: '/ChatGPT-Image-Jun-19-2026-09-27-58-PM-2@2x.png',
      caption: 'Trusted by millions of users'
    }
  },
  {
    name: 'Instacart',
    leftMedia: {
      type: 'image',
      src: '/hero-img.png',
      caption: 'Groceries delivered in minutes'
    },
    rightMedia: {
      type: 'image',
      src: '/Frame@3x.png',
      caption: 'Partnered with local stores'
    }
  }
];

const ScrollStory: React.FC<ScrollStoryProps> = ({ chapters = sampleChapters }) => {
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
      
      // Calculate scroll progress within the wrapper (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, -wrapperTop / (wrapperHeight - window.innerHeight)));
      
      // Calculate which chapter should be active
      const newIndex = Math.min(
        chapters.length - 1,
        Math.floor(scrollProgress * chapters.length)
      );

      if (newIndex !== activeIndex) {
        setIsAnimating(true);
        setActiveIndex(newIndex);
        
        // Reset animation state after transition
        setTimeout(() => setIsAnimating(false), 450);
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [activeIndex, chapters.length]);

  // Handle video playback on chapter change
  useEffect(() => {
    const currentChapter = chapters[activeIndex];
    
    if (currentChapter.leftMedia.type === 'video' && leftVideoRef.current) {
      leftVideoRef.current.play();
    }
    
    if (currentChapter.rightMedia.type === 'video' && rightVideoRef.current) {
      rightVideoRef.current.play();
    }
  }, [activeIndex, chapters]);

  const renderMedia = (media: MediaItem, isLeft: boolean, index: number) => {
    const isActive = index === activeIndex;
    const videoRef = isLeft ? leftVideoRef : rightVideoRef;
    
    return (
      <div 
        className={`${styles.mediaCard} ${isActive ? styles.active : styles.inactive} ${!isLeft ? styles.rightDelay : ''}`}
      >
        {media.type === 'image' ? (
          <Image
            src={media.src}
            alt={media.caption}
            fill
            style={{ objectFit: 'cover' }}
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
          <p>{media.caption}</p>
        </div>
      </div>
    );
  };

  const getPrevChapter = () => activeIndex > 0 ? chapters[activeIndex - 1].name : null;
  const getNextChapter = () => activeIndex < chapters.length - 1 ? chapters[activeIndex + 1].name : null;

  return (
    <div 
      ref={wrapperRef}
      className={styles.wrapper}
      style={{ height: `100vh` }}
    >
      {/* Sticky Container */}
      <div className={styles.stickyContainer}>
        {/* Mobile: Vertical Stack */}
        <div className={styles.mobileLayout}>
          {/* Top Media */}
          <div className={styles.mobileTopMedia}>
            {renderMedia(chapters[activeIndex].leftMedia, true, activeIndex)}
          </div>
          
          {/* Center Text */}
          <div className={styles.mobileCenterText}>
            {getPrevChapter() && (
              <div className={styles.surroundingChapter}>
                {getPrevChapter()}
              </div>
            )}
            <div 
              className={`${styles.activeChapter} ${styles.mobileActiveChapter} ${isAnimating ? styles.animating : ''}`}
            >
              {chapters[activeIndex].name}
            </div>
            {getNextChapter() && (
              <div className={styles.surroundingChapter}>
                {getNextChapter()}
              </div>
            )}
          </div>
          
          {/* Bottom Media */}
          <div className={styles.mobileBottomMedia}>
            {renderMedia(chapters[activeIndex].rightMedia, false, activeIndex)}
          </div>
        </div>

        {/* Desktop: Three-Column Layout */}
        <div className={styles.desktopLayout}>
          {/* Left Media Panel - 38% */}
          <div className={styles.leftPanel}>
            {renderMedia(chapters[activeIndex].leftMedia, true, activeIndex)}
          </div>

          {/* Center Text Panel - 24% */}
          <div className={styles.centerPanel}>
            {getPrevChapter() && (
              <div className={styles.surroundingChapter}>
                {getPrevChapter()}
              </div>
            )}
            <div 
              className={`${styles.activeChapter} ${styles.desktopActiveChapter} ${isAnimating ? styles.animating : ''}`}
            >
              {chapters[activeIndex].name}
            </div>
            {getNextChapter() && (
              <div className={styles.surroundingChapter}>
                {getNextChapter()}
              </div>
            )}
          </div>

          {/* Right Media Panel - 38% */}
          <div className={styles.rightPanel}>
            {renderMedia(chapters[activeIndex].rightMedia, false, activeIndex)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollStory;
