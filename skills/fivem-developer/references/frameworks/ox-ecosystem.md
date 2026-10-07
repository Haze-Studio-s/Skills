# Referência Técnica: Ecossistema Overextended (`ox_lib`, `ox_inventory`, `ox_target`)

O ecossistema **ox** é o padrão ouro de performance, segurança e modularidade no FiveM moderno.

---

## 1. `ox_lib`

### Inicialização Obrigatória
No topo do `fxmanifest.lua` em `shared_scripts`:
```lua
shared_scripts {
    '@ox_lib/init.lua',
    'config.lua',
}
```

### Callbacks Modernos (com suporte a `.await`)
Elimina a necessidade de callbacks aninhados com pirâmide de código:

```lua
-- Server: Registrar Callback
lib.callback.register('meu_resource:obterVeiculos', function(source, garagemId)
    local citizenid = exports.qbx_core:GetPlayer(source).PlayerData.citizenid
    local veiculos = MySQL.query.await('SELECT * FROM player_vehicles WHERE citizenid = ? AND garage = ?', {
        citizenid, garagemId
    })
    return veiculos
end)

-- Client: Chamar Callback síncrono/assíncrono sem travar a thread
CreateThread(function()
    local lista = lib.callback.await('meu_resource:obterVeiculos', false, 'legion_square')
    for _, v in ipairs(lista or {}) do
        print('Veículo encontrado:', v.plate)
    end
end)
```

### Cache de Entidades no Client
Nunca chame natives pesadas a cada frame dentro de threads:
- `cache.ped`: Retorna o ped do jogador local (atualizado automaticamente se mudar de modelo/morrer).
- `cache.playerId`: ID local do jogador (`PlayerId()`).
- `cache.serverId`: Server ID do jogador (`GetPlayerServerId(PlayerId())`).
- `cache.vehicle`: Veículo atual ou `false` se a pé.
- `cache.seat`: Assento do veículo atual (-1 motorista).
- `cache.coords`: Coordenadas do ped local.

### Notificações
```lua
-- Client
lib.notify({
    title = 'Sistema',
    description = 'Operação realizada com sucesso!',
    type = 'success', -- 'success', 'warning', 'error', 'info'
    position = 'top-right',
    duration = 5000,
})

-- Server (enviando para um cliente)
TriggerClientEvent('ox_lib:notify', source, {
    title = 'Garagem',
    description = 'Veículo guardado.',
    type = 'info'
})
```

### Barras de Progresso e Menus Radiais
```lua
-- Barra de Progresso com cancelamento e desativação de controles
local sucesso = lib.progressBar({
    duration = 5000,
    label = 'Reparando veículo...',
    useWhileDead = false,
    canCancel = true,
    disable = {
        car = true,
        move = true,
        combat = true,
    },
    anim = {
        dict = 'mini@repair',
        clip = 'fixing_a_ped'
    },
})

if sucesso then
    -- ação concluída
end
```

---

## 2. `ox_inventory`

O `ox_inventory` trabalha com slots, peso, durabilidade e metadados.

### Consultas Autoritativas (Server-Side)
```lua
local ox_inventory = exports.ox_inventory

-- Obter quantidade de um item
local count = ox_inventory:GetItemCount(source, 'bandage')

-- Obter dados detalhados dos slots
local item = ox_inventory:GetItem(source, 'bandage', nil, false)
-- item.count, item.metadata, item.weight, item.slot

-- Checar se o inventário suporta carregar determinado peso/item
local podeCarregar = ox_inventory:CanCarryItem(source, 'iron_ore', 5)
```

### Padrão Fail-Closed para Remoção e Concessão
Nunca entregue uma recompensa antes de garantir que o custo foi efetivamente cobrado e persistido:

```lua
-- Remover item com validação
local removido = ox_inventory:RemoveItem(source, 'iron_ore', 5)
if not removido then
    TriggerClientEvent('ox_lib:notify', source, { title = 'Erro', description = 'Itens insuficientes.', type = 'error' })
    return
end

-- Se a remoção foi confirmada, entregar o resultado com metadados
local adicionado, resposta = ox_inventory:AddItem(source, 'iron_ingot', 1, {
    purity = 98.5,
    crafter = exports.qbx_core:GetPlayer(source).PlayerData.charinfo.firstname
})

if not adicionado then
    -- ROLLBACK OBRIGATÓRIO: Devolve o custo se a concessão falhar
    ox_inventory:AddItem(source, 'iron_ore', 5)
    TriggerClientEvent('ox_lib:notify', source, { title = 'Mochila Cheia', description = 'Espaço insuficiente para receber o item.', type = 'error' })
end
```

---

## 3. `ox_target`

O `ox_target` substitui os pesados loops com `DrawText3D` e checagens contínuas de coordenadas, reduzindo o resmon da interação para **0.00ms** em idle.

```lua
-- Adicionar zona cúbica
exports.ox_target:addBoxZone({
    coords = vector3(215.8, -810.1, 30.7),
    size = vector3(1.5, 1.5, 2.0),
    rotation = 45,
    debug = false,
    options = {
        {
            name = 'banco_acessar_caixa',
            icon = 'fas fa-university',
            label = 'Acessar Caixa Eletrônico',
            distance = 2.0,
            canInteract = function(entity, distance, coords, name)
                return not IsEntityDead(cache.ped)
            end,
            onSelect = function(data)
                TriggerEvent('meu_resource:abrirBanco')
            end
        }
    }
})

-- Adicionar interação direta a modelos específicos (ex: caixas eletrônicos do mapa)
exports.ox_target:addModel({ 'prop_atm_01', 'prop_atm_02', 'prop_atm_03' }, {
    {
        name = 'atm_interact',
        icon = 'fas fa-credit-card',
        label = 'Utilizar Caixa',
        distance = 1.8,
        onSelect = function(data)
            TriggerEvent('meu_resource:abrirATM', data.entity)
        end
    }
})
```
