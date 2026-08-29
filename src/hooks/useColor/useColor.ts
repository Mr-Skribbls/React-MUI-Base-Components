export const useColor = (): { randomHex: () => string } => {
  const randomHex = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  };

  return {
    randomHex
  };
};

export default useColor;