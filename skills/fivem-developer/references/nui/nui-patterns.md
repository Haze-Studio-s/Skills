# Referência Técnica: Interfaces NUI no FiveM (CEF)

A NUI (New User Interface) no FiveM é executada pelo CEF (Chromium Embedded Framework) sobreposto à renderização do jogo.

---

## 1. Declaração no `fxmanifest.lua`

```lua
ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/app.js',
    'html/assets/**/*', -- Imagens, fontes locais e SVGs
    'html/lib/**/*'     -- Frameworks locais (Vue, React, Alpine.js ou Tailwind compilado)
}
```

> ⚠️ **Regra Fundamental de Assets:** O CEF do FiveM bloqueia requisições a CDNs externas em diversas builds e ambientes. Todas as bibliotecas, fontes e scripts devem estar estritamente contidos na pasta local do resource.

---

## 2. Estrutura HTML e CSS Base

### HTML (`html/index.html`)
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Painel NUI</title>
</head>
<body style="background: transparent; margin: 0; padding: 0; overflow: hidden; user-select: none;">
    <div id="app" class="hidden">
        <div class="panel-container">
            <header class="panel-header">
                <h2 id="panel-title">Título do Painel</h2>
                <button id="btn-close" class="close-btn">&times;</button>
            </header>
            <main class="panel-content">
                <p id="panel-message">Conteúdo interativo...</p>
                <button id="btn-confirm" class="action-btn">Confirmar Ação</button>
            </main>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>
```

### CSS Otimizado para GPU (`html/style.css`)
```css
/* Respeitar transparência total no fundo do jogo */
body {
    background: transparent !important;
    overflow: hidden;
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
    color: #f8fafc;
}

.hidden {
    display: none !important;
}

/* Animações aceleradas por hardware: animar APENAS transform e opacity */
.panel-container {
    background: rgba(15, 23, 42, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
    transform: scale(1);
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
}

.panel-container.anim-enter {
    transform: scale(0.95);
    opacity: 0;
}
```

---

## 3. Comunicação Bidirecional: Lua ↔ JavaScript

### Lua → JavaScript (Abrir / Fechar / Atualizar Dados)
```lua
-- client/nui.lua
local isNuiOpen = false

local function openUI(dados)
    isNuiOpen = true
    SetNuiFocus(true, true) -- Ativa cursor e teclado
    SendNUIMessage({
        action = 'openPanel',
        payload = dados
    })
end

local function closeUI()
    if not isNuiOpen then return end
    isNuiOpen = false
    SetNuiFocus(false, false) -- OBRIGATÓRIO: Libera o controle de volta ao GTA
    SendNUIMessage({
        action = 'closePanel'
    })
end

-- Callback acionado quando a NUI pede para fechar (via botão X ou ESC)
RegisterNUICallback('closeUI', function(data, cb)
    closeUI()
    cb({ status = 'ok' })
end)

-- Fechamento de emergência via comando mapeado
RegisterKeyMapping('close_custom_nui', 'Fechar Interface NUI', 'keyboard', 'ESCAPE')
RegisterCommand('close_custom_nui', function()
    if isNuiOpen then
        closeUI()
    end
end, false)
```

### JavaScript → Lua (`app.js`)
```javascript
// Enviar dados para o client Lua via fetch nativo do CEF
async function postToLua(endpoint, data = {}) {
    try {
        const response = await fetch(`https://${GetParentResourceName()}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (err) {
        console.error('[NUI ERROR]', endpoint, err);
        return null;
    }
}

// Ouvir mensagens enviadas pelo SendNUIMessage do Lua
window.addEventListener('message', (event) => {
    const { action, payload } = event.data;
    
    if (action === 'openPanel') {
        const app = document.getElementById('app');
        document.getElementById('panel-title').innerText = payload.title || 'Painel';
        app.classList.remove('hidden');
    } else if (action === 'closePanel') {
        document.getElementById('app').classList.add('hidden');
    }
});

// Botão de fechar
document.getElementById('btn-close').addEventListener('click', () => {
    postToLua('closeUI');
});

// Tecla ESC para fechar
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        postToLua('closeUI');
    }
});

// Ação com callback
document.getElementById('btn-confirm').addEventListener('click', async () => {
    const res = await postToLua('confirmAction', { itemId: 42 });
    if (res && res.success) {
        postToLua('closeUI');
    }
});
```

---

## 4. Segurança Crítica em Callbacks NUI

- **O CEF roda inteiramente no cliente.** Qualquer usuário pode abrir o DevTools ou forjar requisições `fetch` com payloads maliciosos.
- **Nunca transmita preços, status de permissão de admin ou quantias financeiras diretamente pelo NUI Callback para serem aceitos cegamente no servidor.**
- O callback client deve receber apenas o identificador da ação e encaminhar para validação autoritativa do servidor:
```lua
-- Client
RegisterNUICallback('comprarItem', function(data, cb)
    -- data.item deve ser uma string identificadora (ex: 'bread'), NUNCA o preço
    TriggerServerEvent('meu_resource:server:comprarItem', data.item)
    cb({ status = 'enviado' })
end)
```
