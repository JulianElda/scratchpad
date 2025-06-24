export const isValidNumber = function (value: string) {
  if (Number.isNaN(Number(value))) return false;
  return true;
};
