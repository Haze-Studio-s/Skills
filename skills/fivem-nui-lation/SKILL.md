---
name: fivem-nui-lation
description: "Cria e refatora interfaces NUI (HTML/CSS/JS) no padrão oficial Lation Modern UI (Emerald / Green Edition), seguindo as cores e componentes de vp_cityworks. Use quando o usuário pedir para criar, modernizar ou refatorar interfaces NUI FiveM. Triggers: /fivem-nui-lation ou 'cria uma interface estilo lation'."
tags: [fivem, nui, lation, ui, design-system, css, qbox]
---

# FiveM NUI — Lation Modern UI (Emerald Edition)

Esta skill guia o desenvolvimento e refatoração de todas as interfaces NUI do servidor para seguirem o padrão visual unificado **Lation Modern UI (Emerald / Green Edition)**, consolidado a partir do `vp_cityworks`.

---

## 💎 Identidade Visual Obrigatória

1. **Paleta de Cores:** Fundo escuro multicamada (`--surface: #1e1f24`, `--surface-band: #18191e`, `--surface-deep: #16171b`) com acentos em Verde Esmeralda / Neon (`--accent: #10b981`, `--accent-soft: #34d399`, `--accent-bright: #6afe87`).
2. **Tipografia Técnica:**
   - Textos e Títulos: `Inter` (sans-serif).
   - Valores, Moedas, Níveis, Timers, Códigos e XP: `JetBrains Mono` (monospace).
3. **Detalhe Lation (Faixa Superior):** Cabeçalhos e modais usam gradiente sutil com indicador vertical esquerdo (`box-shadow: inset 3px 0 0 var(--accent)`).
4. **Botões Especializados:**
   - Primário: fundo verde escuro técnico (`--btn-green-bg: #1b3b2d`), borda esmeralda (`#10b981`), texto neon (`#6afe87`) e glow suave (`--accent-glow`).
   - Ghost: fundo elevado (`--surface-elevated: #2a2b31`) e borda forte (`--line-strong: #3a3b41`).
   - Danger: fundo avermelhado escuro (`--btn-err-bg: #35202b`) e texto coral (`#ff9f87`).
5. **Responsividade FiveM:** Escala usando `vw`/`vh` e limites `max-width`/`max-height` para visualização uniforme em 1080p, 1440p, 4K e Ultrawide.

---

## 🚀 Pipeline de Criação e Refatoração de UI

Ao criar ou migrar uma interface NUI para o padrão Lation:

### 1. `html/style.css`
- Importar as fontes Google Fonts `Inter` e `JetBrains Mono`.
- Declarar o bloco de variáveis `:root` completo conforme [Lation Design System](./references/lation-design-system.md).
- Resetar `html, body` com `background: transparent !important;` e `overflow: hidden;`.
- Estilizar a scrollbar com track `--surface-deep` e thumb `--line-strong` / hover `--accent`.
- Utilizar transições com `transform` e `opacity` para aceleração por hardware (GPU).
- Template de partida: [`templates/style.css`](./templates/style.css).

### 2. `html/index.html`
- Overlay com container `<div id="app" class="modal-overlay hidden">`.
- Card central `.lation-card`.
- Header `.lation-head` contendo:
  - Marcação `.lation-brand` (título e subtítulo).
  - Profile `.lation-profile` (avatar, nome, dinheiro e barra de XP/nível).
  - Botão de fechar `.lation-close`.
- Abas de navegação `.lation-tabs` com botões `.lation-tab`.
- Container dinâmico `.lation-body` com rótulo de seção `.lation-section-label` e grid `.lation-grid-cards`.
- Rodapé `.lation-foot` com atalho de ESC e botões de ação (`.lation-btn.ghost`, `.lation-btn.primary`).
- Template de partida: [`templates/index.html`](./templates/index.html).

### 3. `html/app.js`
- Captura de tecla `Escape` (código 27) enviando POST para `https://${GetParentResourceName()}/close`.
- Fechar UI aplicando a classe `.hidden` ao container `#app`.
- Listener de mensagens CEF:
  ```javascript
  window.addEventListener('message', (event) => {
      const { action, data } = event.data;
      if (action === 'open') {
          renderUI(data);
          app.classList.remove('hidden');
      } else if (action === 'close') {
          app.classList.add('hidden');
      }
  });
  ```
- Callbacks usando `fetch` com retorno seguro (`.catch(() => {})`).
- Template de partida: [`templates/app.js`](./templates/app.js).

### 4. Integração Lua Client (`client/nui.lua`)
- Gerenciamento de foco:
  ```lua
  local isNuiOpen = false

  local function OpenLationUI(payload)
      if isNuiOpen then return end
      isNuiOpen = true
      SetNuiFocus(true, true)
      SendNUIMessage({
          action = 'open',
          data = payload
      })
  end

  RegisterNUICallback('close', function(_, cb)
      SetNuiFocus(false, false)
      isNuiOpen = false
      cb({ ok = true })
  end)

  -- Cleanup essencial para evitar foco travado
  AddEventHandler('onResourceStop', function(resourceName)
      if resourceName ~= GetCurrentResourceName() then return end
      if isNuiOpen then
          SetNuiFocus(false, false)
      end
  end)
  ```

### 5. Autoridade e Validação Server-Side (`server/`)
- O cliente NUI **nunca** define preços, quantidades ou permissões.
- Todo callback que dispara ação econômica ou de inventário deve passar por validação server-side com checagem de proximidade física, rate limiting e verificação de saldo/itens (padrão fail-closed).

---

## 🏛️ Contexto e Regras do Servidor QBox (Qbox_753251)

Antes de gerar qualquer código de integração:
- **Framework:** `qbx_core` (1.23.0) + `ox_lib` (3.32.2) + `ox_inventory` (2.44.8) + `oxmysql`.
- **Notificações:** Use `lib.notify({ title = '...', description = '...', type = 'success' })`.
- **NUNCA:** Concatenar strings em SQL (sempre `?` com oxmysql).
- **NUNCA:** Executar `.await` fora de coroutine ou callback.
- **NUNCA:** Usar `PlayerPedId()` em loops (utilize `cache.ped` do `ox_lib`).
- Leia o guia completo em [Contexto do Servidor QBox](./references/qbox-server-context.md).

---

## 📂 Recursos e Templates Prontos

- [Lation Design System — Manual Completo](./references/lation-design-system.md)
- [Contexto Qbox_753251 e Convenções](./references/qbox-server-context.md)
- [Template CSS (`style.css`)](./templates/style.css)
- [Template HTML (`index.html`)](./templates/index.html)
- [Template JavaScript (`app.js`)](./templates/app.js)
