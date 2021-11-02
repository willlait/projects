# Desafio: Criar uma rotina que solicite ao usuário: 1. As tarefas a serem executadas durante o dia (armazenar numa
# variável) - Ficar em looping até o usuário digitar a palavra 'sair' 2. Exibir ao usuário a lista de tarefas e
# solicitar a prioridade e horário previsto para execução de cada uma delas 3. Correlacionar prioridade e horário com
# a lista de tarefas (dica: usar dict) 4. Exibir as tarefas, prioridade e horário, ordenadas por prioridade

tarefas = []
prioridades = []
horarios = []
agenda = {}

print('Bem-vindo a agenda:\n Insira o nome das tarefas ou escreva "sair" para cancelar a operação. ')

while True:

    tarefa = input("Digite o nome da tarefa: ")

    if tarefa.upper() != "SAIR" and len(tarefa) > 0:
        tarefas.append(tarefa)
    elif tarefa.upper() == "SAIR":
        print('\nSaindo da criação de tarefas...')
        break
    else:
        print(
            f"\n{tarefa} não é um valor válido. O nome da sua tarefa precisa conter pelo menos 1 caractere.\n Se você "
            f"deseja parar a listagem, escreva 'Sair'.")

for i in range(len(tarefas)):

    print(f'\n\nTarefa : {tarefas[i]}')

    prioridade = input("Defina a prioridade da tarefa: ")
    while not prioridade.upper().replace('E', 'É') in ('ALTA', 'MÉDIA', 'BAIXA'):
        prioridade = input("Defina a prioridade da tarefa, Alta, Média, OU Baixa:")

    horario = input("Defina o horário previsto para o início da tarefa: ")
    while not horario.isnumeric() or len(horario) > 2:
        horario = input('Defina o horário previsto de início em horário militar(00~23h): ')

    prioridades.append(prioridade.upper().replace('E', 'É'))
    horarios.append(horario)

    agenda[tarefas[i]] = [prioridades[i], horarios[i]]

order = {"ALTA": 0, "MÉDIA": 1, "BAIXA": 2}
sort = sorted(agenda.items(), key=lambda x: order[x[1][0]])
for i in sort:
    print(f"Tarefa: {i[0]} // Prioridade: {i[1][0]} // Horário: {i[1][1]}h")
