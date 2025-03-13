import styles from './styles.module.css';

const StateCircle = ({ x, y, label, isActive, isAccept, isError }) => {
  return (
    <div 
      className={`
        ${styles.stateCircle} 
        ${isActive ? styles.active : ''} 
        ${isError ? styles.error : ''}
      `}
      style={{
        left: x - 25,
        top: y - 25
      }}
    >
      {/* Círculo principal */}
      <div className={styles.innerCircle}>
        {label}
      </div>
      
      {/* Círculo duplo apenas no último estado */}
      {isAccept && <div className={styles.acceptRing}></div>}
    </div>
  );
};

export default StateCircle;