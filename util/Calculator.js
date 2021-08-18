export const initialState = {
  currentValue: "0",
  previousValue: null,
  operator: null,
};

const Calculator = (type, value, state) => {
  if (type === "number") {
    if (state.currentValue === "0") {
      return { ...state, currentValue: value };
    } else {
      return { ...state, currentValue: `${state.currentValue}${value}` };
    }
  } else if (type === "operator") {
    return {
      operator: value,
      previousValue: state.currentValue,
      currentValue: "0",
    };
  } else if (type === "equal") {
    const current = parseFloat(state.currentValue);
    const previous = parseFloat(state.previousValue);
    const resetState = { previousValue: null, operator: null };
    switch (state.operator) {
      case "/":
        return {
          currentValue: previous / current,
          ...resetState,
        };
      case "*":
        return {
          currentValue: previous * current,
          ...resetState,
        };
      case "-":
        return {
          currentValue: previous - current,
          ...resetState,
        };
      case "+":
        return {
          currentValue: previous + current,
          ...resetState,
        };
      default:
        return state;
    }
  } else if (type === "clear") {
    return initialState;
  } else if (type === "posneg") {
    return {
      ...state,
      currentValue: `${parseFloat(state.currentValue) * -1}`,
    };
  } else if (type === "percentage") {
    return {
      ...state,
      currentValue: `${parseFloat(state.currentValue) * 0.01}`,
    };
  }
};

export default Calculator;
