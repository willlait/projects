# Desafio:
# Calculadora sem usar if-else, com as 4 operações básicas.

print('\nBem vindo a Calculadora sem expressões if-else!\nUtilize os simbolos aritméticos para escolher o tipo de '
      'operação mais a frente.\n')
print('+ = adição\n- = subtração\n* = multiplicação\n/ = divisão\n')

num1 = input('Insira o primeiro número: ')
while not num1.isnumeric():
    num1 = input('Insira um NÚMERO real para o primeiro valor: ')

num2 = input('Insira o segundo número: ')
while not num2.isnumeric():
    num2 = input('Insira um NÚMERO real para o segundo valor: ')

operadores = input('Escolha uma operação: ')
while not operadores in ('+', '-', '*', '/'):
    operadores = input('Insira um caractere de operação válido: ')

match operadores:
    case '+':
        print(f'Resultado: {float(num1) + float(num2)}')
    case '-':
        print(f'Resultado: {float(num1) - float(num2)}')
    case '*':
        print(f'Resultado: {float(num1) * float(num2)}')
    case '/':
        print(f'Resultado: {float(num1) / float(num2)}')

input('')  # Mantém o terminal aberto ao final da execução.
