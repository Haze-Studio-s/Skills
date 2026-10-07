# RTK - Rust Token Killer (Google Antigravity)

**Uso:** Proxy CLI ultra-rápido em Rust para redução de 60-90% de consumo de tokens em comandos de terminal.

## Diretrizes de Uso
Sempre que executar comandos de terminal pelo Antigravity, utilize o prefixo tk antes de comandos comuns como:
- tk git status, tk git diff, tk git log, tk git add, tk git commit
- tk cargo test, tk cargo build, tk cargo clippy
- tk pnpm <cmd>, tk npm <cmd>, tk npx <cmd>
- tk vitest, tk jest, tk pytest, tk go test
- tk grep <pattern> <path>, tk find <pattern> <path>, tk ls <path>
- tk docker <cmd>, tk gh <cmd>

## Comandos de Gestão
- tk gain: Exibe dashboard de tokens economizados.
- tk gain --history: Histórico de economia por comando.
- tk discover: Detecta oportunidades de economia não aproveitadas.
- tk proxy <cmd>: Executa comando bruto sem filtro (para depuração profunda).
