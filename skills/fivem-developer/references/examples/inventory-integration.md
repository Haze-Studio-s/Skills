# Exemplo: Integração Completa com `ox_inventory`

O `ox_inventory` suporta itens ponderados, com durabilidade, números de série e propriedades dinâmicas através de `metadata`.

---

## 1. Verificação de Quantidade e Existência

```lua
local ox_inventory = exports.ox_inventory

-- Consultar quantidade
local qtdLockpick = ox_inventory:GetItemCount(source, 'lockpick')
if qtdLockpick < 1 then
    TriggerClientEvent('ox_lib:notify', source, { title = 'Erro', description = 'Você não possui gazuas.', type = 'error' })
    return
end
```

---

## 2. Padrão Fail-Closed de Consumo de Itens

Em qualquer sistema de crafting, reparo, venda ou troca, o item consumido deve ser retirado com sucesso **antes** da entrega da recompensa:

```lua
RegisterNetEvent('crafting:server:produzirArma', function(blueprintId)
    local src = source
    if not Security.IsValidSource(src) then return end

    local receita = Config.Receitas[blueprintId]
    if not receita then return end

    -- 1. Checar se o jogador possui todos os componentes
    for item, qtdNecessaria in pairs(receita.materiais) do
        if ox_inventory:GetItemCount(src, item) < qtdNecessaria then
            TriggerClientEvent('ox_lib:notify', src, { title = 'Materiais Insuficientes', description = 'Falta: ' .. item, type = 'error' })
            return
        end
    end

    -- 2. Consumir os materiais
    local consumidos = {}
    for item, qtdNecessaria in pairs(receita.materiais) do
        local removido = ox_inventory:RemoveItem(src, item, qtdNecessaria)
        if not removido then
            -- Rollback caso algum item falhe no meio da iteração
            for itemDevolver, qtdDevolver in pairs(consumidos) do
                ox_inventory:AddItem(src, itemDevolver, qtdDevolver)
            end
            TriggerClientEvent('ox_lib:notify', src, { title = 'Erro', description = 'Falha ao processar materiais.', type = 'error' })
            return
        end
        consumidos[item] = qtdNecessaria
    end

    -- 3. Entregar o produto final com metadata personalizado
    local numeroSerie = 'SN-' .. tostring(math.random(100000, 999999))
    local entregou, erro = ox_inventory:AddItem(src, receita.produto, 1, {
        serial = numeroSerie,
        durability = 100,
        craftDate = os.date('%d/%m/%Y')
    })

    if not entregou then
        -- Rollback total dos materiais se a mochila não comportar o produto
        for itemDevolver, qtdDevolver in pairs(consumidos) do
            ox_inventory:AddItem(src, itemDevolver, qtdDevolver)
        end
        TriggerClientEvent('ox_lib:notify', src, { title = 'Mochila Cheia', description = 'Sem espaço para o produto final!', type = 'error' })
        return
    end

    TriggerClientEvent('ox_lib:notify', src, { title = 'Sucesso', description = 'Item produzido com sucesso!', type = 'success' })
end)
```

---

## 3. Criação de Baús e Armazéns Dinâmicos (`Stashes`)

```lua
-- Registrar um baú compartilhado para uma facção ou organização
local function registrarBauOrganizacao(orgId, slots, pesoMaximo)
    ox_inventory:RegisterStash(
        'stash_' .. orgId,             -- ID único do baú
        'Cofre da Organização ' .. orgId, -- Nome visível na UI
        slots or 50,                   -- Quantidade de slots
        pesoMaximo or 100000,          -- Peso máximo em gramas (100kg)
        nil                            -- Owner (nil para compartilhado)
    )
end

-- Abrir o baú para o jogador (Client-Side)
exports.ox_inventory:openInventory('stash', 'stash_mafia')
```
