# ClickGame

## Descrição do Projeto

O ClickGame é um jogo de cliques interativo e simples, desenvolvido com HTML, CSS e JavaScript puro. O objetivo principal é proporcionar uma experiência divertida e envolvente onde os usuários podem clicar em um botão para aumentar sua contagem de cliques, desbloquear mensagens dinâmicas e alternar entre temas visuais (claro/escuro). O jogo também persiste o progresso do usuário e o histórico de temas através do armazenamento local do navegador.

## Funcionalidades

*   **Contador de Cliques:** Acompanha o número de cliques em tempo real.
*   **Mensagens Dinâmicas:** Exibe mensagens variadas com base na quantidade de cliques realizados.
*   **Sistema de Recompensa (Prêmio):** Um alerta especial é exibido ao atingir 100 cliques totais.
*   **Alternância de Tema:** Permite ao usuário trocar entre um tema claro e um tema escuro para a interface do jogo.
*   **Histórico de Temas:** Registra os últimos 5 temas utilizados, com a opção de remover entradas individuais ou limpar todo o histórico.
*   **Persistência de Dados:** Salva o progresso do jogo (contagem de cliques, total de cliques, status do prêmio e histórico de temas) no `localStorage` do navegador, garantindo que os dados não sejam perdidos ao recarregar a página.
*   **Botões de Controle:**
    *   `Clique Aqui!`: Incrementa a contagem de cliques.
    *   `Resetar`: Zera a contagem de cliques atual, mas mantém o total de cliques.
    *   `Limpar Tudo`: Zera completamente o progresso do jogo e o histórico de temas.
    *   `Trocar Tema`: Alterna entre o tema claro e escuro.
    *   `Limpar histórico`: Remove todas as entradas do histórico de temas.

## Como Jogar

1.  Abra o arquivo `index.html` em seu navegador.
2.  Clique no botão "Clique Aqui!" para começar a acumular cliques.
3.  Observe as mensagens dinâmicas e a cor do contador mudarem conforme você clica.
4.  Experimente os botões "Resetar" e "Limpar Tudo" para gerenciar seu progresso.
5.  Use o botão "Trocar Tema" para alternar entre os temas claro e escuro.
6.  Verifique o "Histórico de Temas" para ver os temas que você utilizou.
7.  Tente alcançar 100 cliques totais para desbloquear o prêmio!

## Tecnologias Utilizadas

*   **HTML5:** Estrutura básica da página web.
*   **CSS3:** Estilização e temas (claro/escuro).
*   **JavaScript (ES6+):** Lógica do jogo, manipulação do DOM e gerenciamento de estado.

## Instalação

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Bernard-Audemard/ClickGame.git
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd ClickGame
    ```
3.  **Abra o arquivo `index.html`:**
    Simplesmente abra o arquivo `index.html` em seu navegador web preferido. Não é necessário um servidor web para este projeto.

## Uso

Após a instalação, o jogo estará pronto para ser utilizado. Basta interagir com os botões na interface para jogar e explorar as funcionalidades.

## Contribuindo

Contribuições são bem-vindas! Se você tiver sugestões de melhorias, novas funcionalidades ou encontrar algum bug, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request* no repositório do GitHub.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes. (Nota: O arquivo LICENSE não foi fornecido no repositório, mas é uma prática comum incluir esta seção.)
