# Contexto de Servidor FiveM QBox (Qbox_753251)

Contexto de verdade deste servidor. Leia antes de gerar qualquer código FiveM ou NUI aqui.
Idioma do código e respostas: pt-BR.

---

## ⚠️ Task Completion Policy (Fechamento Obrigatório)

Nenhuma task é DONE/COMPLETE/READY só porque o código funciona. Pipeline obrigatório:
```text
IMPLEMENT → TARGETED TEST → FULL HARNESS → DIFF REVIEW → DOCS
          → ROADMAP/STATUS → AGENT CHECKPOINT → COMMIT → PUSH
          → REMOTE VERIFY → CLEAN WORKTREE → NEXT TASK
```
Itens não aplicáveis viram `NOT_APPLICABLE`, nunca são omitidos.

---

## 🧱 Stack de Versões Fixas

| Resource | Versão instalada | Papel |
| :--- | :--- | :--- |
| `qbx_core` | 1.23.0 | Framework (fork moderno do QBCore) |
| `ox_lib` | 3.32.2 | Callbacks, zones, UI, cache, locale |
| `ox_inventory` | 2.44.8 | Inventário slot-based + metadata |
| `ox_target` | instalado | Interação 3D (sem DrawText3D) |
| `oxmysql` | instalado | MySQL async + prepared statements |
| `r_bridge` | desativado (`stop r_bridge`) | Bridge legada desativada |

- **OneSync:** `on` + `population on` | **Entity Lockdown:** `relaxed`
- Confirme assinaturas em `resources/[ox]/` e `resources/[qbx]/`.

---

## ⚠️ REGRA Nº1 — Verificar Antes de Emitir (Anti-Alucinação)

1. **Leia o resource real:** A assinatura correta está nos arquivos instalados em `resources/[ox]/<lib>/` ou nos scripts customizados — NÃO na memória genérica.
2. **Grep/Glob antes de duplicar:** Verifique se o recurso ou lógica já existe antes de recriar.
3. **Hardcodear export de cabeça é proibido:** Sempre ancore no arquivo real.

---

## 🏛️ Convenções Invioláveis

- **Servidor é a única fonte de verdade:** Todo valor vindo do client é revalidado server-side.
- **`?` no oxmysql:** Nunca concatenar SQL.
- **`.await` apenas dentro de `CreateThread` ou `lib.callback`:** Fora disso ocorre falha silenciosa.
- **Rate limiting:** ≥2s em ações de dinheiro/item, ≥30s em crimes.
- **Proximity check server-side:** Nunca validar apenas no client.
- **`cache.ped` (ox_lib):** Nunca `PlayerPedId()` em loop.
- **`local` em tudo:** Sem variáveis globais desnecessárias.
- **Notificações:** Sempre via `lib.notify` / `ox_lib:notify` (nunca `QBCore:Notify`).
- **Locales:** Strings para o jogador via `locale()` do `ox_lib` em pt-BR.
- **`fxmanifest.lua`:** `lua54 'yes'`, `@ox_lib/init.lua` primeiro em shared, `@oxmysql/lib/MySQL.lua` primeiro em server.
- **NUI Design System Mandatório:** Todas as interfaces NUI devem adotar o padrão **Lation Modern UI (Emerald / Green Edition)** baseado no `vp_cityworks`.
