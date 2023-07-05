import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState (["Beber água", "Tomar banho", "Comer"])


  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa]
    setLista(novaLista);
    setNovaTarefa("") // limpa o input 
  };

  const removeTarefa = (item) => {
    const removeItemLista = lista.filter((tarefa) => tarefa !== item)
    setLista(removeItemLista)
  };

  // Existem 2 jeitos diferentes para criarmos o map. Abaixo é o jeito 1:

  const listaTela = lista.map((item, index) =>{
    return(
      <ul>
      <Tarefa key={index}>
        {item}
        <RemoveButton onClick={() => removeTarefa(item)}>
          <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
    </ul>
    )
  })

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        {listaTela}
      </ListaContainer>
    </ListaTarefasContainer>
  );
}


// JEITO 2 DE CRIAÇÃO DO MAP. A sintaxe é mais simples mas pode ser mais confusa para identificar no código.  

/* return (
  <ListaTarefasContainer>
    <InputContainer>
      <TaskInput
        placeholder="Digite aqui uma tarefa"
        value={novaTarefa}
        onChange={onChangeTarefa}
      />
      <AddTaskButton>Adicionar</AddTaskButton>
    </InputContainer>

    <ListaContainer>
      {lista.map((item, index) =>{
        return(
    <ul>
      <Tarefa key={index}>
       {item}
        <RemoveButton>
          <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
    </ul>
        )
      })}
      
    </ListaContainer>
  </ListaTarefasContainer>
);
} */


/* Na aula de hoje vamos criar uma lista de tarefas! 

- Observe o template. Ele já vem com algumas funções declaradas: adicionaTarefa e removeTarefa. Essas funções vão ser usadas daqui a pouco. 
- Perceba que o input de nova tarefa já está controlado.
- Analisando o JSX, identifique qual trecho representa uma tarefa.

CRIANDO UM ESTADO

- Crie um estado lista no componente listaTarefas.
- Esse estado deve ser um array com pelo menos 3 tarefas.
- Agora vamos renderizar esse array na tela usando um .map()
- Crie uma função map que vai renderizar o estado lista

RENDERIZANDO UM COMPONENTE

- Essa função deve retornar o trecho do JSX que representa uma tarefa.
- Retire esse trecho do JSX, defina ele como o retorno da sua função no map.
- Chame no JSX a variável que salva esse retorno.
- Existem 2 formas de fazer isso, essa, ou jogando o map direto no JSX, experimente fazer isso!

ADICIONANDO NOVAS TAREFAS

- Crie uma função que adicione a nova tarefa digitada pelo usuário ao estado lista quando o botão "Adicionar" for clicado.
- Para isso, precisaremos copiar o array anterior que já tem 3 tarefas e adicionar uma nova. 
- Lembre-se que precisaremos de um spread operator para que isso funcione.
- Limpe o input depois de adicionar a tarefa.

PARA GUARDAR NA CABEÇA

- Crie uma função que remova da lista a tarefa quando o botão for clicado. Para isso, use uma função filter. 
- Chame a função no onClick do botão "Remover".
- Passe a tarefa clicada por parâmetros até a função remover, onde irá acontecer o filter.*/


/* # Renderização de Listas

Uma das principais responsabilidades do front é manipular e tratar dados recebidos de serviços externos. Esses dados geralmente respeitam um formato "universal”, possibilitando a conexão com diversos dispositivos do nosso dia a dia.

No mundo ideal, seria perfeito receber as listas formatadas em html. Porém, não podemos limitar que nossos dados sejam consumidos apenas pelo React, certo? Por isso, ao invés de receber os dados em HTML, sempre iremos receber dados em formatos de strings/objetos. É **responsabilidade do front tratar essa lista** para que se torne uma lista de elementos.

Exemplo da função map:

const renderList = lista.map((item) => {
      return <li>{item}</li>;
    }); 
    
    
    # Key

- **Keys dos componentes:** Cada componente deve ter um **identificador único**
- Deve ser passada como a prop **key** do elemento da lista

const renderList = lista.map((item) => {
      return <li key={item}>{item}</li>;
    });
    
    
    # Listas no Estado

- Nossas listas serão **dinâmicas**: podemos adicionar, alterar ou apagar itens
- É interessante **armazenar o array de dados no estado**, pra interface refletir as alterações

## Como copiar um array então?

- Precisamos criar **um novo array** que ocupe **outro** lugar na memória… utilizaremos o **spread operator**

let array = [1,2,3]
let copiaArray = [...array]
array //[1, 2, 3]
copiaArray //[1, 2, 3]

array.push(4)
array //[1, 2, 3, 4]
copiaArray //[1, 2, 3]

Para o React entender a que o estado mudou, precisamos trocar a referência, criando uma nova cópia do array e atualizando o estado com a nova cópia

Adicionando itens a um array

const addUser = () => {
    const user = {
      name,
      age
    };

    const newUsersList = [...users, user];
    setUsers(newUsersList);
  };
  
  Removendo itens de um Array
  
   const removeUser = (name) => {
    const userFilteredList = users.filter((user) => user.name !== name);
    setUsers(userFilteredList);
    console.log(users);
  };
  
  
  # Fluxo

- **Receber** os dados de algum lugar, em forma de lista (array). Geralmente recebemos um array de objetos;
- **Salvar** os dados em um estado;
- **Tratar** esses dados, transformando um array de objetos em um array de elementos. Utilizaremos a função map();
- **Chamar** array mapeado no JSX;*/