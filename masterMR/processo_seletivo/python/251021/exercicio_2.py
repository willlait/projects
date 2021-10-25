# Exercício 2:
# Criar uma rotina que faça a tabuada, conforme as premissas:
# 1. Ficar na rotina enquanto uma determinada letra não for pressionada (Ex. S para Sair)
# 2. Solicitar o número da tabuada e fazer a multiplicação e printar dentro de um looping

print("Bem vindo à rotina de tabuada.\nDigite um número inteiro para calcularmos, ou C para cancelar a operação.")

while True:
    
    num = input('Insira um número: ')
    
    if num.isnumeric() :
        num = int(num)
        for i in range(11) :
            print(f"{num} X {i} = {num * i}")
    elif num.upper() == "C":
        print('Cancelando rotina.')
        exit()
    else :
        print(f'{num} é um valor inválido. Insira um número INTEIRO para a rotina de tabuada ou C para sair.')
    
