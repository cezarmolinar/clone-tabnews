const calculadora = require('../../models/calculadora.js')

test('somar 2+2 deveria retornar 4', () => {
  const resultado = calculadora.somar(2, 2)
  expect(resultado).toBe(4)
})

test('somar 10+5 deveria retornar 15', () => {
  const resultado = calculadora.somar(10, 5)
  expect(resultado).toBe(15)
})

test("somar 'banana'+ 10 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar('banana', 10)
  expect(resultado).toBe('Erro')
})
