export const createAutomaton = (expected) => {
  let state = 0;
  
  return {
    processChar: (char) => {
      if (state === -1) return { currentState: -1 };
      
      const isValid = char === expected[state];
      state = isValid ? state + 1 : -1;
      
      return { currentState: state, isValid };
    },
    reset: () => { state = 0; }
  };
};