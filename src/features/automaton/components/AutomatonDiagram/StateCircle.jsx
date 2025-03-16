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
      <div className={styles.innerCircle}>{label}</div>
      {isAccept && <div className={styles.acceptRing}></div>}
    </div>
  );
};

export default StateCircle;
