# Projeto Vue.js

Este projeto foi desenvolvido utilizando Vue.js e foi realizado como parte do aprendizado do curso [Intro to Vue.js](https://www.vuemastery.com/courses/intro-to-vue-js/), oferecido pela Vue Mastery.

# Pesquisar por tópicos

- Introdução ao Vue 2
- Adicionar curso à lista de reprodução
- Fonte: https://www.vuemastery.com/courses/intro-to-vue-js/

## Aulas
1. A Instância Vue
2. Vinculação de Atributos
3. Renderização Condicional
4. Renderização de Listas
5. Manipulação de Eventos
6. Vinculação de Classes e Estilos
7. Propriedades Computadas
8. Componentes
9. Comunicação de Eventos
10. Formulários & v-model
11. Abas

### 1. A Instância Vue
- **Descrição:** Explica a base de todos os projetos Vue.js: a instância Vue. 
- **Conceitos-chave:** 
  - Criar instâncias com `new Vue()`.
  - Relacionar elementos DOM com Vue usando o seletor `el`.
  - Utilizar o objeto `data` para armazenar dados reativos.
- **Objetivo:** Mostrar como a instância Vue conecta dados e DOM, criando uma interface reativa.

---

### 2. Vinculação de Atributos
- **Descrição:** Ensina como manipular dinamicamente atributos HTML usando a diretiva `v-bind`.
- **Conceitos-chave:**
  - Alterar `src`, `href`, e outros atributos com base nos dados do Vue.
  - Sintaxe abreviada com `:`.
- **Objetivo:** Demonstrar como criar elementos dinâmicos, como imagens ou links que mudam de acordo com o estado da aplicação.

---

### 3. Renderização Condicional
- **Descrição:** Mostra como usar diretivas como `v-if`, `v-else`, e `v-show` para exibir elementos com base em condições.
- **Conceitos-chave:**
  - Exibir ou esconder elementos condicionalmente.
  - Diferença entre `v-if` (removido do DOM) e `v-show` (escondido com CSS).
- **Objetivo:** Aprender a alterar a interface de acordo com o estado da aplicação.

---

### 4. Renderização de Listas
- **Descrição:** Explica como iterar e exibir listas de itens usando a diretiva `v-for`.
- **Conceitos-chave:**
  - Estruturas como `v-for="item in items"`.
  - Uso de `key` para identificar elementos únicos.
- **Objetivo:** Permitir a criação de listas dinâmicas e organizadas.

---

### 5. Manipulação de Eventos
- **Descrição:** Ensina como lidar com eventos de interação do usuário (cliques, teclas, etc.) com a diretiva `v-on`.
- **Conceitos-chave:**
  - Vincular métodos a eventos (ex.: `v-on:click="method"`).
  - Sintaxe abreviada com `@`.
- **Objetivo:** Capacitar para criar aplicativos interativos que respondem a ações do usuário.

---

### 6. Vinculação de Classes e Estilos
- **Descrição:** Mostra como aplicar classes CSS e estilos inline dinamicamente com Vue.
- **Conceitos-chave:**
  - Utilizar `:class` para alternar classes CSS.
  - Utilizar `:style` para aplicar estilos inline.
- **Objetivo:** Criar interfaces com estilos dinâmicos baseados nos dados.

---

### 7. Propriedades Computadas
- **Descrição:** Ensina a usar as **computed properties**, que são propriedades derivadas dos dados principais.
- **Conceitos-chave:**
  - Melhorar o desempenho evitando cálculos desnecessários.
  - Declarar lógica complexa diretamente no Vue.
- **Objetivo:** Simplificar cálculos e transformações de dados.

---

### 8. Componentes
- **Descrição:** Introduz componentes, blocos reutilizáveis de código Vue que encapsulam lógica e interface.
- **Conceitos-chave:**
  - Criar componentes com `Vue.component()`.
  - Organizar projetos usando uma hierarquia de componentes.
- **Objetivo:** Permitir a criação de projetos modulares e reutilizáveis.

---

### 9. Comunicação de Eventos
- **Descrição:** Explica como os componentes se comunicam por meio de eventos.
- **Conceitos-chave:**
  - Emitir eventos do componente filho para o pai com `$emit`.
  - Escutar eventos no componente pai.
- **Objetivo:** Habilitar a troca de dados entre componentes.

---

### 10. Formulários & v-model
- **Descrição:** Mostra como trabalhar com formulários de entrada (input, textarea, etc.) utilizando `v-model`.
- **Conceitos-chave:**
  - Sincronizar dados do Vue com os valores do formulário.
  - Trabalhar com eventos como `input` e `change`.
- **Objetivo:** Criar formulários interativos e simplificar a manipulação de dados de entrada.

---

### 11. Abas
- **Descrição:** Ensina como implementar sistemas de navegação com abas (tabs) usando Vue.
- **Conceitos-chave:**
  - Alternar entre diferentes conteúdos de forma dinâmica.
  - Trabalhar com componentes ou lógica de renderização condicional.
- **Objetivo:** Aprender a criar interfaces organizadas e interativas.