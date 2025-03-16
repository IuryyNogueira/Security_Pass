import StateCircle from './StateCircle';
import TransitionArrow from './TransitionArrow';
import TransitionArrow2 from './TransitionArrow2';
import styles from './styles.module.css';

const AutomatonDiagram = ({ expectedPassword, inputPassword }) => {
  const startPos = { x: 200, y: 300 }; // Estado inicial (q0)
  const errorPos = { x: 400, y: 300 }; // Estado de erro (q1)
  let isValid = true;
  let errorChar = null;
  let validChar = "✓"; // Por padrão, mostra um check

  for (let i = 0; i < expectedPassword.length; i++) {
    if (inputPassword[i] !== expectedPassword[i]) {
      isValid = false;
      errorChar = inputPassword[i] || "?";
      break;
    }
    validChar = inputPassword[i]; // Atualiza o último caractere válido
  }

  return (
    <div className={styles.container}>
      {/* Estado inicial q0 */}
      <StateCircle 
        x={startPos.x} 
        y={startPos.y} 
        label="q0" 
        isActive={!errorChar} 
        isAccept={false} 
        isError={false} 
      />

      {/* Laço no q0 com o último caractere válido */}
      <TransitionArrow 
        from={startPos} 
        to={startPos} 
        char={validChar} 
        isValid={isValid} 
        isLoop 
      />

      {/* Estado de erro q1, só aparece se houver erro */}
      {!isValid && (
        <>
          <TransitionArrow2 
            from={startPos} 
            to={errorPos} 
            char={errorChar} 
            isValid={false} 
            color="#f56565" // Vermelho
          />

          <StateCircle 
            x={errorPos.x} 
            y={errorPos.y} 
            label="q1" 
            isActive={true} 
            isAccept={false} 
            isError={true} 
          />

          {/* Caixa de "Inválido" abaixo do estado q1 */}
          <div className={styles.invalidBox} style={{ left: errorPos.x - 40, top: errorPos.y + 50 }}>
            Inválido
          </div>
        </>
      )}

      {/* Caixa de "Válido", aparece apenas se tudo estiver correto */}
      {isValid && inputPassword.length === expectedPassword.length && (
        <div className={styles.validBox} style={{ left: startPos.x - 40, top: startPos.y + 50 }}>
          Válido
        </div>
      )}
    </div>
  );
};

export default AutomatonDiagram;
