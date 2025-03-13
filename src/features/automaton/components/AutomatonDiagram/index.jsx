import StateCircle from './StateCircle';
import TransitionArrow from './TransitionArrow';
import styles from './styles.module.css';

const AutomatonDiagram = ({ expectedPassword, inputPassword, currentState }) => {
  const spacing = 200;
  const statePositions = Array.from({ length: expectedPassword.length + 1 }).map((_, i) => ({
    x: 100 + (i * spacing),
    y: 300
  }));

  return (
    <div className={styles.container}>
      {statePositions.map((pos, i) => (
        <StateCircle
          key={i}
          x={pos.x}
          y={pos.y}
          label={`q${i}`}
          isActive={i === currentState}
          isAccept={i === expectedPassword.length}
          isError={currentState === -1 && i === inputPassword.length}
        />
      ))}

      {expectedPassword.split('').map((char, i) => {
        const isValid = inputPassword[i] === char;
        return (
          <TransitionArrow
            key={i}
            from={statePositions[i]}
            to={statePositions[i + 1]}
            char={inputPassword[i] || char}
            isValid={isValid && i < inputPassword.length}
          />
        );
      })}
    </div>
  );
};

export default AutomatonDiagram;