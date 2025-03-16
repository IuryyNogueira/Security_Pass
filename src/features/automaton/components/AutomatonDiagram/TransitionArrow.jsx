import { useSpring, animated } from '@react-spring/web';
import styles from './styles.module.css';

const TransitionArrow = ({ from, to, char, isValid, isLoop }) => {
  const arrowSpring = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { tension: 220 } });

  return (
    <animated.div style={arrowSpring} className={styles.transitionContainer}>
      <svg
        width="50"
        height="50"
        style={{
          position: 'absolute',
          left: from.x - 25,
          top: from.y - 50,
          overflow: 'visible'
        }}
      >
        {isLoop ? (
          <path
            d="M 20 25 C 10 5, 30 5, 20 25"
            stroke="#48bb78"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrow-valid)"
          />
        ) : (
          <path
            d="M 5 25 Q 25 5, 45 25"
            stroke={isValid ? '#48bb78' : '#f56565'}
            strokeWidth="2"
            fill="none"
            markerEnd={`url(#arrow-${isValid ? 'valid' : 'invalid'})`}
          />
        )}

        <defs>
          <marker id="arrow-valid" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 Z" fill="#48bb78" />
          </marker>
          <marker id="arrow-invalid" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 Z" fill="#f56565" />
          </marker>
        </defs>
      </svg>

      <div
        className={styles.charLabel}
        style={{
          left: from.x - 5,
          top: from.y - 60,
          borderColor: !isValid ? '#48bb78' : '#f56565',
          color: !isValid ? '#48bb78' : '#f56565'
        }}
      >
        {char}
      </div>
    </animated.div>
  );
};

export default TransitionArrow;
