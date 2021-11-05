# Desafio:
# Calculadora sem if-else & pattern matching, com as 4 operações básicas.

from operator import *

print('\nBem vindo a Calculadora sem expressões if-else & pattern matching!\nUtilize os simbolos aritméticos para '
      'escolher o tipo de operação mais a frente.\n')
print('+ = adição\n- = subtração\n* = multiplicação\n/ = divisão\n')

num1 = input('Insira o primeiro número: ')
while not num1.isnumeric():
    num1 = input('Insira um NÚMERO real para o primeiro valor: ')

num2 = input('Insira o segundo número: ')
while not num2.isnumeric():
    num2 = input('Insira um NÚMERO real para o segundo valor: ')

operador = input('Escolha uma operação: ')
while not operador in ('+', '-', '*', '/'):
    operador = input('Insira um caractere de operação válido: ')

operadores = {
    "+": add(float(num1), float(num2)),
    "-": sub(float(num1), float(num2)),
    "/": truediv(float(num1), float(num2)),
    "*": mul(float(num1), float(num2))
}

calc = operadores[operador]
print(calc)

input('')  # Mantém o terminal aberto ao final da execução.
