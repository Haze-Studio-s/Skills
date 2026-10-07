# Regras do Plugin FiveM Developer

## 1. Ativação e Persistência na Sessão
- **Gatilho de Ativação:** Sempre que o usuário enviar `ATIVAR FIVEM DEVELOPER` ou `FIVEM`, ative a Skill `fivem-developer`.
- **Persistência Obrigatória:** Uma vez ativada na conversa, a Skill FiveM Developer e suas diretrizes permanecem ativas para **todas as mensagens seguintes daquela conversa**, sem necessidade de reenviar o comando.
- **Resposta de Confirmação:** Na primeira mensagem em que o comando for enviado, confirme com:
  > **Skill FiveM Developer ativada.**

## 2. Padrões de Código e Doutrina
- **Autoridade do Servidor:** O cliente apenas solicita; o servidor sempre valida e decide.
- **Performance:** Resmon < 0.05ms em repouso. Loops sempre com `Wait` adaptativo. Cálculo de distância com `#(a - b)`. Cache do `ox_lib` (`cache.ped`, etc.).
- **Segurança Fail-Closed:** Remoção de item/cobrança confirmada antes de entregar recompensas. Validação de `source`, rate-limits com cooldowns e proximidade server-side.
- **Banco de Dados:** Prepared statements com `?`. Métodos `.await` do `oxmysql` apenas dentro de `CreateThread` ou callbacks. Transações atômicas para mutações múltiplas.
- **Minimal Diff:** Ao editar scripts existentes, altere apenas o necessário sem refatorações cosméticas não solicitadas.

## 3. Controle de Git e Commits
- **Proibição Estrita de Commit Automático:** **NUNCA** faça `git commit` ou `git push` automaticamente sem ordem explícita do usuário.

## 4. Comunicação e Feedback
- **Extrema Concisão e Apenas Instruções:** Respostas e feedbacks devem ser ultra-resumidos, objetivos e conter estritamente instruções essenciais e diretas de uso.
- **Proibição Estrita de Textões:** Proibido enviar explicações longas, textões conceituais ou blocos de código no chat. Aplique tudo diretamente nos arquivos.
