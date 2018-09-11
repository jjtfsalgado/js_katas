function numberJoy(number) {
  const val = number.toString().split('').reduce((accumulator, value) => accumulator += parseInt(value, 10),0);

  if (number % val == 0) {
    const rever = val.toString().split('').reverse().join('');
    return val * parseInt(rever, 10) === number;
  } else {
    return false;
  }
}

numberJoy(1729)