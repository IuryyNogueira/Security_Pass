import StateCircle from './StateCircle';
import TransitionArrow from './TransitionArrow';
import TransitionArrow2 from './TransitionArrow2';
import styles from './styles.module.css';

const AutomatonDiagram = ({ expectedPassword, inputPassword }) => {
  const startPos = { x: 625, y: 300 }; // Estado inicial (q0)
  const errorPos = { x: 925, y: 300 }; // Estado de erro (q1)

  // Se o input está vazio, já é inválido
  if (!inputPassword) {
    return (
      <div className={styles.container}>
        {/* Estado inicial */}
        <StateCircle x={startPos.x} y={startPos.y} label="q0" isActive={true} />

        {/* Seta para estado de erro com "_" */}
        <TransitionArrow2
          from={startPos}
          to={errorPos}
          char="_"
          isValid={false}
          color="#f56565"
        />

        {/* Estado de erro (q1) */}
        <StateCircle x={errorPos.x} y={errorPos.y} label="q1" isError={true} isAccept={true} />

        {/* Indicação VISUAL forte de erro */}
        <div className={styles.invalidBox} style={{ left: errorPos.x - 100, top: errorPos.y + 60 }}>
          <span className={styles.invalidText}>❌ SENHA INVÁLIDA</span>
        </div>
      </div>
    );
  }

  let isValid = true;
  let lastValidChar = null;
  let lastInvalidChar = null;

  // Comparação letra a letra
  for (let i = 0; i < inputPassword.length; i++) {
    if (inputPassword[i] === expectedPassword[i]) {
      lastValidChar = inputPassword[i]; // Atualiza a última correta
    } else {
      isValid = false;
      lastInvalidChar = inputPassword[i]; // Última incorreta
    }
  }

  // Se a senha for uma substring da esperada, deve ser inválida
  if (isValid && inputPassword.length < expectedPassword.length) {
    isValid = false;
    lastInvalidChar = "?"; // Indica que falta completar
  }

  return (
    <div className={styles.container}>
      {/* Estado inicial */}
      <StateCircle x={startPos.x} y={startPos.y} label="q0" isActive={true} isAccept={isValid && inputPassword.length === expectedPassword.length} />

      {/* Seta para estado válido (mostra última letra correta, cor verde se correta) */}
      <TransitionArrow
        from={startPos}
        to={startPos}
        char={lastValidChar || "?"}
        isValid={true}
        color="#48bb78" // Verde para indicar entrada correta
      />

      {/* Se houver erro, seta para q1 (mostra última letra errada ou indica incompleto) */}
      {!isValid && (
        <>
          <TransitionArrow2
            from={startPos}
            to={errorPos}
            char={lastInvalidChar || "?"}
            isValid={false}
            color="#f56565"
          />

          <StateCircle x={errorPos.x} y={errorPos.y} label="q1" isError={true} isAccept={true} />

          {/* Indicação VISUAL forte de erro */}
          <div className={styles.invalidBox} style={{ left: errorPos.x - 100, top: errorPos.y + 60 }}>
            <span className={styles.invalidText}>❌ SENHA INVÁLIDA</span>
          </div>
        </>
      )}

      {/* Exibir "Senha Válida" se todas as letras forem corretas */}
      {isValid && inputPassword.length === expectedPassword.length && (
        <div className={styles.validBox} style={{ left: startPos.x - 100, top: startPos.y + 60 }}>
          <span className={styles.validText}>✅ SENHA VÁLIDA</span>
        </div>
      )}
    </div>
  );
};

export default AutomatonDiagram;
