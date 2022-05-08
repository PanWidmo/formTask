export const timeFormat = (val, prevVal) => {
  if (!val) {
    return val;
  }

  let valToTest = val;

  if (/[a-zA-Z]/g.test(val)) {
    valToTest = val.replaceAll(/[a-zA-Z]/g, '0');
  }

  const shouldAppendHoursColon = valToTest.length === 2 && prevVal?.length < 3;
  const shouldAppendMinutesColon = valToTest.length === 5 && prevVal?.length < 6;

  if (shouldAppendHoursColon || shouldAppendMinutesColon) {
    return `${valToTest}:`;
  }

  return valToTest;
};
