import MotionReveal from '@/components/motion/MotionReveal';
import styles from './WhyCards.module.css';

// Approach statements only: no client counts, results, or awards.
const reasons = [
  {
    title: 'One story, every channel',
    body: 'Your content, ads and website say the same thing, in the same voice.',
    tone: 'paper',
  },
  {
    title: 'Strategy before spend',
    body: 'We plan the message and the budget before a single post or ad goes live.',
    tone: 'ink',
  },
  {
    title: 'Made for each platform',
    body: 'Reels, Shorts, posts and ads, each shaped for where it will be seen.',
    tone: 'yellow',
  },
  {
    title: 'Straight conversations',
    body: 'No jargon and no inflated promises. We tell you what is and is not working.',
    tone: 'pink',
  },
] as const;

/** Four approach cards on the orange section. */
export default function WhyCards() {
  return (
    <ul className={styles.grid}>
      {reasons.map((r, i) => (
        <li key={r.title} className={styles.item}>
          <MotionReveal direction="up" delay={i * 110} className={styles.reveal}>
            <article className={`${styles.card} ${styles[r.tone]}`}>
              <span className={styles.num}>0{i + 1}</span>
              <h3 className={styles.title}>{r.title}</h3>
              <p className={styles.body}>{r.body}</p>
            </article>
          </MotionReveal>
        </li>
      ))}
    </ul>
  );
}
