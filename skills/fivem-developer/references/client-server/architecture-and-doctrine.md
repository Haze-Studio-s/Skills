# Arquitetura de Rede e Doutrina de Engenharia FiveM

Este manual estabelece os princípios inegociáveis de engenharia de software aplicados a scripts e resources do FiveM.

---

## 1. Ordem de Autoridade da Verdade

Ao analisar, depurar ou programar em um servidor:

```text
Código Real Instalado no Repositório
  > Testes de Integração e Unitários
    > Schema Atual do Banco de Dados (MySQL)
      > Dependências Instaladas (resources/[ox], resources/[qbx], etc.)
        > Documentação Interna do Servidor (AGENTS.md, GEMINI.md)
          > Conhecimento Histórico Validado
            > Memória Genérica do Modelo de IA
```

Se qualquer suposição ou memória teórica contradizer o código real instalado no servidor, **o código real vence obrigatoriamente**.

---

## 2. Princípio da Autoridade do Servidor

O FiveM opera sob o modelo cliente-servidor distribuído:
- **Cliente:** É uma casca visual e de entrada de dados (teclado, mouse, NUI). O ambiente do cliente está sujeito a softwares de injeção (Lua executors), alterações de memória e spoofing de eventos.
- **Servidor:** É a única autoridade confiável. O servidor detém as regras de negócio, a persistência no banco de dados e a guarda de inventário e economia.

### O Ciclo de Vida de uma Ação Segura:
1. **Intenção do Cliente:** O cliente expressa uma intenção (ex: "Quero comprar este item"). Ele envia apenas o identificador da intenção (ex: `item_id = 'water'`).
2. **Recepção no Servidor:** O servidor recebe o `source` (ID do jogador emitente gerado pelo engine CFX).
3. **Validação Autoritativa:** O servidor valida:
   - `source` é válido e conectado (`GetPlayerPing(source) > 0`).
   - Coordenadas reais do jogador no servidor (`GetEntityCoords(GetPlayerPed(source))`).
   - Distância até o ponto da loja (`#(playerCoords - shopCoords) <= 3.0`).
   - Cooldown da ação para mitigar spam/macros.
   - Saldo ou itens necessários diretamente no banco/inventário do servidor.
4. **Execução Atômica:** O servidor debita o custo e, somente após confirmação do débito, concede o benefício.
5. **Notificação:** O servidor emite um evento de volta para o cliente renderizar a confirmação visual.

---

## 3. Minimal Diff (Intervenção Mínima)

Quando solicitado para corrigir ou adicionar algo a um script existente:
- **Não refatore código alheio:** Mantenha os nomes de funções, arquivos e estilos existentes no resource.
- **Não reorganize a estrutura de pastas** a menos que solicitado expressamente.
- **Não remova comentários explicativos ou documentações.**
- **Concentre a modificação apenas na linha ou bloco defeituoso.**

---

## 4. Classificação de Tiers de Complexidade

Ao receber uma demanda, classifique-a imediatamente em um dos três tiers:

| Tier | Escopo | Abordagem de Execução |
| :--- | :--- | :--- |
| **FAST** | Ajustes de configuração, correções de sintaxe, traduções, ajustes visuais de UI. | Resolução imediata, leitura direta do arquivo alvo, sem cadeia de múltiplos agentes. |
| **STANDARD** | Novas mecânicas, integração client-server, novos menus, queries comuns. | Leitura do cone de dependências, implementação com proteções completas e comentários em pt-BR. |
| **DEEP** | Economia, transações financeiras, sistemas de inventário de alto valor, migrações de DB, orquestração multi-resource. | Modelagem com transações atômicas, `op_id` idempotente, tolerância a restart e cobertura de testes. |
