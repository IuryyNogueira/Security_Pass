import { useSpring, animated } from '@react-spring/web';
import styles from './styles.module.css';

const TransitionArrow2 = ({ from, to, char, isValid }) => {
  // Pontos de início e fim da seta (borda dos círculos)
  const start = { x: from.x + 25, y: from.y };
  const end = { x: to.x - 25, y: to.y };
  
  // Cálculo do ponto de controle da curva
  const controlPoint = {
    x: (start.x + end.x) / 2,
    y: start.y - 50
  };

  // Cálculo preciso do ponto médio da curva Bézier
  const t = 0.5; // Ponto médio
  const midX = (1 - t) ** 2 * start.x + 2 * (1 - t) * t * controlPoint.x + t ** 2 * end.x;
  const midY = (1 - t) ** 2 * start.y + 2 * (1 - t) * t * controlPoint.y + t ** 2 * end.y;

  const arrowSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 220 }
  });

  return (
    <animated.div 
      style={arrowSpring} 
      className={styles.transitionContainer}
    >
      {/* Seta */}
      <svg
        width={Math.abs(end.x - start.x)}
        height="100"
        style={{
          position: 'absolute',
          left: start.x,
          top: start.y - 50,
          overflow: 'visible'
        }}
      >
        <path
          d={`M 0 50 Q ${controlPoint.x - start.x} 0, ${end.x - start.x} 50`}
          stroke={isValid ? '#48bb78' : '#f56565'}
          strokeWidth="2"
          fill="none"
          markerEnd={`url(#arrow-${isValid ? 'valid' : 'invalid'})`}
        />
        
        <defs>
          <marker
            id="arrow-valid"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="5"
            orient="auto"
          >
            <path d="M0,0 L0,10 L10,5 Z" fill="#48bb78" />
          </marker>
          <marker
            id="arrow-invalid"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="5"
            orient="auto"
          >
            <path d="M0,0 L0,10 L10,5 Z" fill="#f56565" />
          </marker>
        </defs>
      </svg>

      {/* Caractere posicionado exatamente no ponto médio da curva */}
      <div 
        className={styles.charLabel}
        style={{
          left: midX - 15,
          top: midY - 15,
          borderColor: isValid ? '#48bb78' : '#f56565',
          color: isValid ? '#48bb78' : '#f56565'
        }}
      >
        {char}
      </div>
    </animated.div>
  );
};

export default TransitionArrow2;