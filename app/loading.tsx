import styles from "./loading.module.css";

const particleLayout = [
  { left: "6%", top: "14%", size: 3, delay: 0 },
  { left: "12%", top: "26%", size: 2, delay: 0.2 },
  { left: "18%", top: "38%", size: 4, delay: 0.4 },
  { left: "24%", top: "18%", size: 2, delay: 0.1 },
  { left: "30%", top: "30%", size: 3, delay: 0.35 },
  { left: "36%", top: "12%", size: 2, delay: 0.15 },
  { left: "42%", top: "24%", size: 4, delay: 0.55 },
  { left: "48%", top: "16%", size: 2, delay: 0.25 },
  { left: "54%", top: "34%", size: 3, delay: 0.5 },
  { left: "60%", top: "20%", size: 2, delay: 0.05 },
  { left: "66%", top: "40%", size: 4, delay: 0.4 },
  { left: "72%", top: "14%", size: 2, delay: 0.3 },
  { left: "78%", top: "28%", size: 3, delay: 0.6 },
  { left: "84%", top: "18%", size: 2, delay: 0.12 },
  { left: "90%", top: "32%", size: 3, delay: 0.45 },
  { left: "8%", top: "64%", size: 2, delay: 0.3 },
  { left: "16%", top: "76%", size: 3, delay: 0.55 },
  { left: "22%", top: "88%", size: 2, delay: 0.1 },
  { left: "28%", top: "70%", size: 4, delay: 0.25 },
  { left: "34%", top: "82%", size: 2, delay: 0.5 },
  { left: "40%", top: "66%", size: 3, delay: 0.18 },
  { left: "46%", top: "90%", size: 2, delay: 0.42 },
  { left: "52%", top: "72%", size: 4, delay: 0.12 },
  { left: "58%", top: "84%", size: 2, delay: 0.34 },
  { left: "64%", top: "68%", size: 3, delay: 0.48 },
  { left: "70%", top: "88%", size: 2, delay: 0.08 },
  { left: "76%", top: "74%", size: 4, delay: 0.36 },
  { left: "82%", top: "86%", size: 2, delay: 0.56 },
  { left: "88%", top: "70%", size: 3, delay: 0.2 },
  { left: "94%", top: "82%", size: 2, delay: 0.44 },
];

export default function Loading() {
  return (
    <main className={styles.loading} aria-label="Loading">
      <div className={styles.particleField} aria-hidden="true">
        {particleLayout.map((particle, index) => (
          <span
            key={index}
            className={styles.particle}
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
      <div className={styles.coreGlow} aria-hidden="true" />
      <div className={styles.enterLabel}>ENTER</div>
    </main>
  );
}
