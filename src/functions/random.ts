export const generateUniqueRandomNumbers: any  = (
  count: number,
  max: number
) => {
  if (count > max - 1 + 1) {
    throw new Error(
      "Количество уникальных чисел не может быть больше диапазона"
    );
  }

  const uniqueNumbers:any = new Set();

  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    uniqueNumbers.add(randomNumber);
  }

  return [...uniqueNumbers];
};
