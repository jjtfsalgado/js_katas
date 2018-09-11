function removeSmallest(numbers) {
  const min = Math.min(...numbers);
  const indexMin = numbers.findIndex((i) => i === min);
  numbers.splice(indexMin, 1)
  return numbers
}

removeSmallest([2,2,1,2,1])