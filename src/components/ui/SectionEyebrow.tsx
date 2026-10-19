import styles from './SectionEyebrow.module.css';

interface SectionEyebrowProps {
  text: string;
  variant?: 'dark' | 'light';
  className?: string;
}

export default function SectionEyebrow({
  text,
  variant = 'dark',
  className = '',
}: SectionEyebrowProps) {
  return (
    <span className={`${styles.eyebrow} ${styles[variant]} ${className}`}>
      {text}
    </span>
  );
}
