function somar(num1, num2) {
  if (typeof num1 !== 'number') {
    return 'Erro'
  }
  if (typeof num2 !== 'number') {
    return 'Erro'
  }

  return num1 + num2
}

exports.somar = somar
