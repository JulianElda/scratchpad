export const isValidNumber = (value: string) => {
  if (Number.isNaN(Number(value))) return false;
  else return true;
};
