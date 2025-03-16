import { useState, useEffect } from 'react';
import PasswordInput from './components/PasswordInput';
import AutomatonDiagram from './features/automaton/components/AutomatonDiagram';
import useAutomaton from './features/automaton/hooks/useAutomaton';
import './App.css';

const App = () => {
  const [definedPassword, setDefinedPassword] = useState('');
  const [attemptPassword, setAttemptPassword] = useState('');
  const { currentState, validatePassword, resetAutomaton } = useAutomaton(definedPassword);

  useEffect(() => {
    resetAutomaton();
    setAttemptPassword('');
  }, [definedPassword]);

  return (
    <div className="app-container">
      <h1>SecurityPass 🔒</h1>
      
      <div className="input-section">
        <PasswordInput
          label="Senha Correta:"
          value={definedPassword}
          onChange={(e) => setDefinedPassword(e.target.value)}
        />
        
        <PasswordInput
          label="Tentativa:"
          value={attemptPassword}
          onChange={(e) => {
            setAttemptPassword(e.target.value);
            validatePassword(e.target.value);
          }}
        />
      </div>

      <div className="diagram">
        {definedPassword && (
          <AutomatonDiagram 
            expectedPassword={definedPassword}
            inputPassword={attemptPassword}
            currentState={currentState}
          />
        )}        
      </div>

    </div>
  );
};

export default App;