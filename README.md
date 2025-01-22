# Amigo Secreto - README

O objetivo deste projeto é permitir o gerenciamento de uma lista de amigos para o sorteio de "Amigo Secreto".  
A aplicação possibilita inserir novos nomes, exibi-los dinamicamente na tela e sortear aleatoriamente um participante entre os cadastrados.

---

![Image](https://github.com/user-attachments/assets/afcdc592-14c5-487d-ae34-a584417ba75c)

---
## Tecnologias Utilizadas
- **HTML**: Estrutura básica do projeto.
- **CSS**: Para estilização.
- **JavaScript**: Para toda a lógica de interação e manipulação do DOM.

---
## Como Usar

1. Digite um nome no campo de entrada e clique em **"Adicionar"**.
2. Verifique os nomes listados dinamicamente na página.
3. Clique em **"Sortear amigo"** para escolher um amigo aleatoriamente.
4. O nome sorteado será exibido na tela, e a lista será limpa para um novo sorteio.

## Funcionalidades

### 1. Adicionar amigos
- Permite adicionar nomes à lista de amigos.
- O campo de entrada é validado para garantir que o usuário não adicione valores vazios.
- Após adicionar, o campo de entrada é limpo e recebe o foco para facilitar a próxima inserção.

### 2. Atualizar a lista de amigos
- Exibe os nomes na tela sempre que a lista é alterada.
- Otimizado para minimizar a manipulação direta do DOM, utilizando métodos mais eficientes.

### 3. Sortear amigo
- Escolhe aleatoriamente um amigo da lista.
- Exibe o nome do amigo sorteado na tela.
- Limpa a lista de amigos após o sorteio.

---

## Funções Implementadas

#### 1. `adicionarAmigo()`
- Lê o nome inserido pelo usuário e o adiciona à lista de amigos.
- Valida se o nome não está vazio.
- Atualiza dinamicamente a exibição da lista no DOM.

#### 2. `atualizarListaDeAmigosHtml()`
- Atualiza a lista de amigos no HTML usando:
  - `map()`: Gera um array de elementos `<li>` com os nomes dos amigos.
  - `join("")`: Concatena os elementos do array em uma única string HTML.
- Essa abordagem minimiza manipulações diretas no DOM, otimizando a performance.

#### 3. `sortearAmigo()`
- Escolhe aleatoriamente um nome da lista utilizando `Math.random`.
- Exibe o nome sorteado no DOM.
- Limpa a lista de amigos após o sorteio.

---

## Dificuldade Enfrentada

### Problema com a função `atualizarListaDeAmigosHtml`
Na implementação inicial, ao adicionar um novo amigo à lista, o nome era duplicado em vez de atualizar corretamente.  
Isso aconteceu porque foi utilizada a abordagem de criar elementos HTML com `appendChild` para cada amigo.

#### Por que `appendChild` causava problemas?
- Cada vez que um novo amigo era adicionado, o código criava um novo elemento `<li>` e o anexava ao DOM, sem limpar os elementos existentes.
- Isso resultava na duplicação dos nomes já exibidos.

#### Solução com `map` e `join`
Após pesquisar maneiras de otimizar o código e reduzir manipulações no DOM, foi implementada a solução utilizando `map` e `join`:

- **`map`**: Transforma a lista de amigos (`listaDeAmigos`) em um array de strings HTML (`<li>amigo</li>`).
- **`join("")`**: Junta essas strings em uma única string, que é atribuída diretamente ao `innerHTML` da lista no DOM.

Essa abordagem sobrescreve o conteúdo anterior da lista, eliminando duplicações e otimizando a manipulação do DOM.

#### Benefícios:
- Reduz o número de operações no DOM.
- Evita problemas de duplicação de elementos.

---
