import type { NextPage } from "next";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  const socialLinks = [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/lenient_tree?igsh=ZmV4ajVlNGhhNW52",
      ariaLabel: "Instagram",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0005 6.46973C9.06281 6.46973 8.16349 6.84162 7.50042 7.50358C6.83735 8.16555 6.46484 9.06336 6.46484 9.99952C6.46484 10.9357 6.83735 11.8335 7.50042 12.4955C8.16349 13.1574 9.06281 13.5293 10.0005 13.5293C10.9383 13.5293 11.8376 13.1574 12.5006 12.4955C13.1637 11.8335 13.5362 10.9357 13.5362 9.99952C13.5362 9.06336 13.1637 8.16555 12.5006 7.50358C11.8376 6.84162 10.9383 6.46973 10.0005 6.46973Z" fill="#102025"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M4.31029 0.313667C8.09189 -0.104556 11.9082 -0.104556 15.6898 0.313667C17.7557 0.543918 19.4213 2.16762 19.6639 4.23771C20.112 8.06583 20.112 11.933 19.6639 15.7611C19.4213 17.8312 17.7557 19.4549 15.6909 19.6863C11.9089 20.1046 8.09224 20.1046 4.31029 19.6863C2.24436 19.4549 0.57878 17.8312 0.336177 15.7622C-0.112059 11.9338 -0.112059 8.06619 0.336177 4.23771C0.57878 2.16762 2.24436 0.543918 4.31029 0.313667ZM15.4396 3.48288C15.151 3.48288 14.8743 3.59731 14.6703 3.80099C14.4663 4.00467 14.3516 4.28092 14.3516 4.56897C14.3516 4.85702 14.4663 5.13327 14.6703 5.33695C14.8743 5.54064 15.151 5.65506 15.4396 5.65506C15.7281 5.65506 16.0048 5.54064 16.2088 5.33695C16.4128 5.13327 16.5275 4.85702 16.5275 4.56897C16.5275 4.28092 16.4128 4.00467 16.2088 3.80099C16.0048 3.59731 15.7281 3.48288 15.4396 3.48288ZM4.83249 9.99943C4.83249 8.63119 5.37692 7.319 6.34603 6.35151C7.31513 5.38402 8.62951 4.84049 10 4.84049C11.3706 4.84049 12.6849 5.38402 13.654 6.35151C14.6231 7.319 15.1676 8.63119 15.1676 9.99943C15.1676 11.3677 14.6231 12.6799 13.654 13.6473C12.6849 14.6148 11.3706 15.1584 10 15.1584C8.62951 15.1584 7.31513 14.6148 6.34603 13.6473C5.37692 12.6799 4.83249 11.3677 4.83249 9.99943Z" fill="#102025"/>
        </svg>
      ),
    },
    {
      platform: "X",
      url: "https://x.com/lenienttree",
      ariaLabel: "X (Twitter)",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="5" fill="#102025"/>
          <path d="M11.27 9.18L15.54 4H14.5L10.81 8.49L7.84 4H4.5L9 10.7L4.5 16H5.54L9.45 11.25L12.6 16H15.94L11.27 9.18ZM10 10.62L9.55 9.98L5.91 4.76H7.36L10.41 9.13L10.86 9.77L14.5 15.27H13.06L10 10.62Z" fill="white"/>
        </svg>
      ),
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/company/lenient-tree/",
      ariaLabel: "LinkedIn",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="5" fill="#102025"/>
          <path d="M5.5 7.5H7.5V15H5.5V7.5ZM6.5 4C5.95 4 5.5 4.45 5.5 5C5.5 5.55 5.95 6 6.5 6C7.05 6 7.5 5.55 7.5 5C7.5 4.45 7.05 4 6.5 4ZM9 7.5H11V8.5C11.36 7.86 12.13 7.25 13.25 7.25C15.14 7.25 15.5 8.5 15.5 10.13V15H13.5V10.5C13.5 9.67 13.48 8.5 12.25 8.5C11 8.5 10.82 9.5 10.82 10.43V15H9V7.5H9Z" fill="white"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.row}>
        {/* Left Column */}
        <div className={styles.column}>
          <div className={styles.column2}>
            <div className={styles.lenientTreeAccessToContainer}>
              <b className={styles.lenientTree}>Lenient Tree</b>
              <span className={styles.accessToEvents}>
                <br />
                Access to events are now easy
              </span>
            </div>
            <div className={styles.theLenientTree}>
              © 2026 The Lenient Tree
              <br />
              All rights reserved
            </div>
          </div>
          {/* Social Icons Row */}
          <div className={styles.socialRow}>
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                className={styles.socialIcon}
                aria-label={link.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Center Column — Quick Links */}
        <div className={styles.column3}>
          <h3 className={styles.quickLinks}>Quick Links</h3>
          <div className={styles.column4}>
            <h3 className={styles.home}>Home</h3>
            <h3 className={styles.home}>Courses</h3>
            <h3 className={styles.home}>Speakers</h3>
          </div>
        </div>

        {/* Right Column — Essentials */}
        <div className={styles.column5}>
          <h3 className={styles.essentials}>Essentials</h3>
          <div className={styles.column6}>
            <h3 className={styles.termsConditions}>{`Terms & Conditions`}</h3>
            <h3 className={styles.termsConditions}>Privacy Policy</h3>
            <h3 className={styles.termsConditions}>Blogs</h3>
          </div>
        </div>
      </div>

      {/* Decorative watermark — partially clipped at bottom */}
      <div className={styles.lenientWrap} aria-hidden="true">
        <span className={styles.lenient}>LENIENT</span>
      </div>
    </footer>
  );
};

export default Footer;
