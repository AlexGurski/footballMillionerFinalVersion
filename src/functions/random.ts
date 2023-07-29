export function generateUniqueRandomNumbers(count: number, min: number, max: number) {
    if (count > max - min + 1) {
      throw new Error("Количество уникальных чисел не может быть больше диапазона");
    }
  
    const uniqueNumbers = new Set();
  
    while (uniqueNumbers.size < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers.add(randomNumber);
    }
  
    return [...uniqueNumbers];
  }
  
