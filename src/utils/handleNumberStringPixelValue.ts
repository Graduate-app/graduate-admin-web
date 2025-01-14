const handleNumberStringPixelValue = (value?: string | number) => {
  if (value) {
    if (typeof value === 'number') {
      return `${value}px`;
    }
    return value;
  }
  return null;
};

export default handleNumberStringPixelValue;
