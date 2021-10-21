# Desafio:
# Calculadora sem if-else & pattern matching, com as 4 operações básicas.

from operator import *

print('\nBem vindo a Calculadora sem expressões if-else!\nUtilize os simbolos aritméticos para escolher o tipo de operação mais a frente.\n')
print('+ = adição\n- = subtração\n* = multiplicação\n/ = divisão\n')
num1 = float(input('Insira o primeiro número: '))
num2 = float(input('Insira o segundo número: '))
operador = input('Insira o operador: ')

operadores = {
    "+" : add(num1, num2),
    "-" : sub(num1, num2),
    "/" : truediv(num1, num2),
    "*" : mul(num1, num2)
}

calc = operadores[operador]
print(calc)

input('') # Mantém o terminal aberto ao final da execução.