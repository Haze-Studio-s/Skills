# Lation Modern UI Design System — Emerald Edition (Padrão Oficial)

**Documentação de Padrão Visual para Desenvolvimento NUI (FiveM)**  
**Servidor:** Qbox_753251 / Ecossistema Custom Scripts  
**Referência In-Game Base:** `vp_cityworks` (SADOT)  
**Status:** Mandatório para todos os novos scripts e refatorações de UI NUI.

---

## 🎨 1. Filosofia e Identidade Visual

O Lation Modern UI (Emerald Edition) combina uma estética técnica/industrial moderna, limpa e imersiva com tons escuros profundos e acentos em Verde Esmeralda / Mint Glow.

### Princípios Chave:
- **Contraste Suave e Profundidade:** Fundo escuro dividido em camadas (`--surface-deep` -> `--surface` -> `--surface-elevated`), evitando pretos 100% chapados.
- **Identidade com Acento Vertical:** Caixas, cabeçalhos e modais usam um destaque esquerdo sutil (`box-shadow: inset 3px 0 0 var(--accent)`).
- **Tipografia Técnica Dupla:**
  - **Textos e Títulos:** `Inter` (sans-serif) para clareza e legibilidade.
  - **Valores, Códigos, Moedas, Níveis, Timers:** `JetBrains Mono` (monospace) para precisão numérica.
- **Micro-interações e Glow:** Hover com bordas esmeralda, gradientes sutis e brilho de neon moderado (`--accent-glow`).

---

## 🌈 2. Paleta de Cores e Tokens CSS (Root Variables)

Todo arquivo `style.css` de script NUI deve incluir este bloco no `:root`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700;800&display=swap');

:root {
    /* Superfícies & Camadas */
    --surface: #1e1f24;           /* Fundo principal de cards e modais */
    --surface-band: #18191e;      /* Faixas de cabeçalho e divisores */
    --surface-hover: #252630;     /* Estado hover de cards/linhas */
    --surface-elevated: #2a2b31;  /* Elementos elevados / containers internos */
    --surface-deep: #16171b;      /* Fundo de slots, inputs e tabelas */

    /* Linhas & Bordas */
    --line: #2a2b31;              /* Borda padrão */
    --line-strong: #3a3b41;       /* Borda destacada / divisórias */
    --line-hover: #4a4b51;        /* Borda ao passar o mouse */

    /* Conteúdo & Tipografia */
    --content: #e4e4e7;           /* Texto padrão de leitura */
    --content-secondary: #a1a1aa; /* Subtítulos, descrições secundárias */
    --content-muted: #71717a;     /* Labels desativadas, dicas fracas */
    --content-heading: #ffffff;   /* Títulos principais em destaque */

    /* Acentos Verde Esmeralda (Lation Emerald / Success Palette) */
    --accent: #10b981;            /* Verde esmeralda padrão */
    --accent-soft: #34d399;       /* Verde claro / destaques suaves */
    --accent-bright: #6afe87;     /* Verde neon brilhante (valores/XP/sucesso) */
    --accent-dim: rgba(16, 185, 129, 0.12); /* Fundo de chips e glow suave */
    --accent-glow: rgba(16, 185, 129, 0.28);/* Brilho de botões e seleções */

    /* Botões Especializados */
    --btn-green-bg: #1b3b2d;
    --btn-green-text: #6afe87;
    --btn-green-border: #224d3a;
    --btn-green-hover: #234d3b;

    --btn-warn-bg: #3b2f1b;
    --btn-warn-text: #fcd34d;
    --btn-warn-border: #4d3e24;

    --btn-err-bg: #35202b;
    --btn-err-text: #ff9f87;
    --btn-err-border: #4a2b3b;

    /* Alertas */
    --error: #ef4444;
    --warning: #f59e0b;

    /* Raios e Sombras */
    --radius: 10px;
    --radius-sm: 7px;
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-mono: 'JetBrains Mono', 'Consolas', monospace;
    --panel-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 1px 2px rgba(0, 0, 0, 0.25), 0 12px 32px rgba(0, 0, 0, 0.45);
}
```

---

## 🧱 3. Catálogo de Componentes e Estrutura HTML

### 3.1. Boilerplate Base (html, body)
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-sans);
    user-select: none;
    -webkit-font-smoothing: antialiased;
}
html, body {
    width: 100%;
    height: 100%;
    background: transparent !important;
    overflow: hidden;
    color: var(--content);
}
.hidden { display: none !important; }
```

### 3.2. Scrollbars Padronizadas
```css
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: var(--surface-deep); border-radius: 4px; }
::-webkit-scrollbar-thumb { background: var(--line-strong); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent); }
```

### 3.3. Painel / Modal Principal (Lation Card)
```html
<div class="modal-overlay">
    <div class="lation-card">
        <!-- Header com Faixa Lation -->
        <header class="lation-head">
            <div class="lation-brand">
                <span class="lation-title">TÍTULO DO SISTEMA</span>
                <span class="lation-sub">Subtítulo explicativo ou status da operação</span>
            </div>
            
            <div class="lation-profile">
                <div class="lation-avatar">VP</div>
                <div class="lation-pinfo">
                    <div class="lation-prow">
                        <span class="lation-pname">Nome do Jogador</span>
                        <span class="chip money">R$ 15.000</span>
                    </div>
                    <div class="lation-lvlrow">
                        <span class="lation-lvl">NV. 4</span>
                        <div class="lation-xp"><div style="width: 65%;"></div></div>
                        <span class="lation-xp-text">650/1000 XP</span>
                    </div>
                </div>
            </div>
            <button id="btn-close" class="lation-close">✕</button>
        </header>

        <!-- Navegação por Abas -->
        <nav class="lation-tabs">
            <button class="lation-tab active" data-tab="tab-overview">Visão Geral</button>
            <button class="lation-tab" data-tab="tab-missions">Serviços</button>
            <button class="lation-tab" data-tab="tab-ranking">Ranking</button>
        </nav>

        <!-- Corpo com Seções -->
        <main class="lation-body">
            <div class="lation-section-label">SERVIÇOS DISPONÍVEIS <span class="lation-count">(3)</span></div>
            
            <div class="lation-grid-cards">
                <!-- Card Item -->
                <div class="item-card selected">
                    <div class="ic-head">
                        <span class="ic-title">Manutenção de Iluminação</span>
                        <span class="chip chip-ok">DISPONÍVEL</span>
                    </div>
                    <div class="ic-chips">
                        <span class="chip money">+R$ 1.250</span>
                        <span class="chip buff">+150 XP</span>
                    </div>
                    <p class="ic-desc">Reparo de postes e cabeamento subterrâneo na região central.</p>
                </div>
            </div>
        </main>

        <!-- Footer com Ações -->
        <footer class="lation-foot">
            <span class="esc-hint">Pressione <b>ESC</b> para fechar</span>
            <div class="foot-actions">
                <button class="lation-btn ghost">Cancelar</button>
                <button class="lation-btn primary">Iniciar Serviço</button>
            </div>
        </footer>
    </div>
</div>
```

---

## 🔘 4. Padrões de Botões e Inputs

### Botões CSS
```css
.lation-btn {
    cursor: pointer;
    border-radius: var(--radius-sm);
    padding: 0.5vw 1vw;
    font-size: 0.78vw;
    font-weight: 600;
    transition: all 0.15s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4vw;
}

/* Primário (Verde Esmeralda Lation) */
.lation-btn.primary {
    background: var(--btn-green-bg);
    border: 1px solid var(--accent);
    color: var(--btn-green-text);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 4px 14px rgba(16, 185, 129, 0.18);
}
.lation-btn.primary:hover:not(:disabled) {
    background: var(--btn-green-hover);
    border-color: var(--accent-bright);
    color: #ffffff;
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.32);
}

/* Ghost / Secundário */
.lation-btn.ghost {
    background: var(--surface-elevated);
    border: 1px solid var(--line-strong);
    color: var(--content);
}
.lation-btn.ghost:hover {
    background: var(--surface-hover);
    border-color: var(--accent);
    color: var(--accent-bright);
}

/* Perigo / Cancelar */
.lation-btn.danger {
    background: var(--btn-err-bg);
    border: 1px solid var(--btn-err-border);
    color: var(--btn-err-text);
}
.lation-btn.danger:hover {
    background: #4a202b;
    border-color: var(--error);
    color: #ffffff;
}

/* Desativado */
.lation-btn:disabled {
    background: var(--surface-deep);
    border-color: var(--line);
    color: var(--content-muted);
    cursor: not-allowed;
    box-shadow: none;
}
```

### Inputs de Texto / Números
```css
.lation-input {
    background: var(--surface-deep);
    border: 1px solid var(--line-strong);
    border-radius: var(--radius-sm);
    color: var(--content-heading);
    padding: 0.45vw 0.65vw;
    font-family: var(--font-mono);
    font-size: 0.76vw;
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
}
.lation-input:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 1px var(--accent), 0 0 10px var(--accent-dim);
}
```

---

## 📡 5. Contrato Padrão NUI ↔ Lua (JavaScript / Client)

### JavaScript (`app.js`)
```javascript
// Fechar ao pressionar ESC
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.keyCode === 27) {
        closeUI();
    }
});

function closeUI() {
    document.getElementById('app').classList.add('hidden');
    fetch(`https://${GetParentResourceName()}/close`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({})
    }).catch(() => {});
}

// Ouvinte de mensagens do client Lua
window.addEventListener('message', (event) => {
    const { action, data } = event.data;
    if (action === 'open') {
        renderData(data);
        document.getElementById('app').classList.remove('hidden');
    } else if (action === 'close') {
        document.getElementById('app').classList.add('hidden');
    }
});

// Envio de ação ao backend
function triggerAction(actionName, payload = {}) {
    fetch(`https://${GetParentResourceName()}/${actionName}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(payload)
    }).then(res => res.json()).then(data => {
        // Tratar resposta
    }).catch(err => console.error(err));
}
```

### Client Lua (`client/nui.lua` ou `client/main.lua`)
```lua
local isNuiOpen = false

local function OpenLationUI(data)
    if isNuiOpen then return end
    isNuiOpen = true
    SetNuiFocus(true, true)
    SendNUIMessage({
        action = 'open',
        data = data
    })
end

RegisterNUICallback('close', function(_, cb)
    SetNuiFocus(false, false)
    isNuiOpen = false
    cb({ ok = true })
end)

RegisterNUICallback('startMission', function(data, cb)
    -- Repassa para server com validação
    TriggerServerEvent('meu_resource:server:startMission', data.missionId)
    cb({ ok = true })
end)

AddEventHandler('onResourceStop', function(resourceName)
    if resourceName ~= GetCurrentResourceName() then return end
    if isNuiOpen then
        SetNuiFocus(false, false)
    end
end)
```

---

## 📐 6. Regras de Ouro de Responsividade e Performance

1. **Unidades de Medida:** Use `vw` e `vh` para tamanhos de painéis e fontes proporcionais ao HUD, com `max-width` e `max-height` para telas Ultrawide ou 4K.
2. **Sem Repaint Desnecessário:** Use `requestAnimationFrame` ou classes CSS com transições `transform` e `opacity` para animações fluidas a 60fps.
3. **Imagens Leves:** Prefira vetores em `<svg>` para ícones e componentes técnicos ao invés de imagens PNG pesadas.
4. **Clean NUI Focus:** Sempre garanta que `SetNuiFocus(false, false)` seja executado caso o jogador feche a interface, morra ou o resource seja reiniciado (`onResourceStop`).
