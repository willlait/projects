# Desafio: 
# Calculadora sem usar if-else, com as 4 operações básicas.

print('\nBem vindo a Calculadora sem operadores lógicos!\nUtilize os simbolos aritméticos para escolher o tipo de operação mais a frente.\n')
print('+ = adição\n- = subtração\n* = multiplicação\n/ = divisão\n')
num1 = float(input('Insira o primeiro número: '))
num2 = float(input('Insira o segundo número: '))
operadores = input('Escolha uma operação: ')

match operadores: 
        case '+':
            print(f'Resultado: {num1 + num2}')
        case '-':
            print(f'Resultado: {num1 - num2}')
        case '*':
            print(f'Resultado: {num1 * num2}')
        case '/':
            print(f'Resultado: {num1 / num2}')

input('') # Mantém o terminal aberto ao final da execução.
