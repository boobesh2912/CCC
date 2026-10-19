import styles from './HeroVisual.module.css';

export default function HeroVisual() {
  return (
    <div className={styles.frame}>
      {/* Viewfinder metadata overlay */}
      <div className={styles.viewfinder}>
        <div className={styles.recIndicator}>
          <span className={styles.recDot} />
          <span className={styles.recText}>REC</span>
        </div>
        <div className={styles.timecode}>00:24:18:12</div>
        <div className={styles.fps}>4K · 24FPS · 1/48</div>
      </div>

      {/* Atmospheric studio scene composed with tactile layers */}
      <div className={styles.studioScene}>
        {/* Soft studio key light source */}
        <div className={styles.practicalLight} />
        
        {/* Acoustic wall paneling slats */}
        <div className={styles.slatWall}>
          {[...Array(12)].map((_, i) => (
            <div key={i} className={styles.slat} />
          ))}
        </div>

        {/* Foreground mic & boom silhouette framing */}
        <div className={styles.micRig}>
          <div className={styles.boomArm} />
          <div className={styles.shockmount} />
          <div className={styles.micBody}>
            <div className={styles.micGrille} />
          </div>
        </div>

        {/* Studio desk and audio interface block */}
        <div className={styles.deskSurface}>
          <div className={styles.audioMonitor}>
            <div className={styles.vuMeter}>
              <div className={styles.vuBar} />
              <div className={styles.vuBar} />
              <div className={styles.vuBar} />
              <div className={styles.vuBar} />
            </div>
          </div>
        </div>
      </div>

      {/* Frame corners */}
      <div className={`${styles.corner} ${styles.cornerTL}`} />
      <div className={`${styles.corner} ${styles.cornerTR}`} />
      <div className={`${styles.corner} ${styles.cornerBL}`} />
      <div className={`${styles.corner} ${styles.cornerBR}`} />
    </div>
  );
}
