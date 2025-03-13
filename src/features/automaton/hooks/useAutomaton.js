import { useState, useEffect, useCallback } from 'react';
import { createAutomaton } from '../utils/automaton';

const useAutomaton = (expectedPassword) => {
  const [automaton, setAutomaton] = useState(() => createAutomaton(expectedPassword));
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    setAutomaton(createAutomaton(expectedPassword));
  }, [expectedPassword]);

  const validatePassword = useCallback((input) => {
    let state = 0;
    const newAutomaton = createAutomaton(expectedPassword);
    
    for (let i = 0; i < input.length; i++) {
      const result = newAutomaton.processChar(input[i]);
      state = result.currentState;
      if (state === -1) break;
    }
    
    setCurrentState(state);
  }, [expectedPassword]);

  const resetAutomaton = useCallback(() => {
    setCurrentState(0);
  }, []);

  return { currentState, validatePassword, resetAutomaton };
};

export default useAutomaton;