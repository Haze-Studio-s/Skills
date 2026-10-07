/**
 * Lation Modern UI (Emerald Edition) — Template JS
 * Servidor FiveM Qbox_753251
 */

const app = document.getElementById('app');
const btnClose = document.getElementById('btn-close');
const btnCancel = document.getElementById('btn-cancel');
const btnConfirm = document.getElementById('btn-confirm');
const itemsGrid = document.getElementById('items-grid');
const tabs = document.querySelectorAll('.lation-tab');

let selectedItemId = null;

// Fechar UI via tecla ESC
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.keyCode === 27) {
        closeUI();
    }
});

if (btnClose) btnClose.addEventListener('click', closeUI);
if (btnCancel) btnCancel.addEventListener('click', closeUI);

function closeUI() {
    app.classList.add('hidden');
    fetch(`https://${GetParentResourceName()}/close`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({})
    }).catch(() => {});
}

// Navegação de Abas
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const targetTab = tab.dataset.tab;
        // Tratar mudança de aba
        handleTabChange(targetTab);
    });
});

function handleTabChange(targetTab) {
    // Customizar de acordo com a aba selecionada
}

// Listener de Mensagens vindas do Lua
window.addEventListener('message', (event) => {
    const { action, data } = event.data;

    switch (action) {
        case 'open':
            renderUI(data);
            app.classList.remove('hidden');
            break;
        case 'close':
            app.classList.add('hidden');
            break;
        case 'updateProfile':
            updateProfile(data);
            break;
        case 'updateItems':
            if (data && Array.isArray(data)) {
                renderItems(data);
            }
            break;
        default:
            break;
    }
});

function renderUI(data) {
    if (!data) return;

    if (data.title) {
        const titleEl = document.getElementById('title');
        if (titleEl) titleEl.textContent = data.title;
    }
    if (data.subtitle) {
        const subEl = document.getElementById('subtitle');
        if (subEl) subEl.textContent = data.subtitle;
    }

    if (data.profile) updateProfile(data.profile);

    if (data.items && Array.isArray(data.items)) {
        renderItems(data.items);
    }
}

function updateProfile(profile) {
    if (!profile) return;
    if (profile.name) {
        const el = document.getElementById('player-name');
        if (el) el.textContent = profile.name;
    }
    if (profile.money !== undefined) {
        const el = document.getElementById('player-money');
        if (el) el.textContent = `R$ ${profile.money.toLocaleString('pt-BR')}`;
    }
    if (profile.level !== undefined) {
        const el = document.getElementById('player-level');
        if (el) el.textContent = `NV. ${profile.level}`;
    }
    if (profile.xp !== undefined && profile.maxExp) {
        const percent = Math.min(100, Math.floor((profile.xp / profile.maxExp) * 100));
        const bar = document.getElementById('player-xp-bar');
        const txt = document.getElementById('player-xp-text');
        if (bar) bar.style.width = `${percent}%`;
        if (txt) txt.textContent = `${profile.xp}/${profile.maxExp} XP`;
    }
    if (profile.avatar) {
        const el = document.getElementById('avatar');
        if (el) el.textContent = profile.avatar;
    }
}

function renderItems(items) {
    if (!itemsGrid) return;
    itemsGrid.innerHTML = '';
    const countEl = document.getElementById('items-count');
    if (countEl) countEl.textContent = `(${items.length})`;

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = `item-card ${selectedItemId === item.id ? 'selected' : ''}`;
        card.innerHTML = `
            <div class="ic-head">
                <span class="ic-title">${item.title || 'Item'}</span>
                ${item.badge ? `<span class="chip ${item.badgeClass || ''}">${item.badge}</span>` : ''}
            </div>
            <div class="ic-chips">
                ${item.reward ? `<span class="chip money">+R$ ${item.reward}</span>` : ''}
                ${item.xp ? `<span class="chip buff">+${item.xp} XP</span>` : ''}
            </div>
            <p class="ic-desc">${item.description || ''}</p>
        `;

        card.addEventListener('click', () => {
            document.querySelectorAll('.item-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedItemId = item.id;
        });

        itemsGrid.appendChild(card);
    });
}

if (btnConfirm) {
    btnConfirm.addEventListener('click', () => {
        if (!selectedItemId) return;
        
        fetch(`https://${GetParentResourceName()}/confirmSelection`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({ id: selectedItemId })
        }).catch(() => {});
    });
}
