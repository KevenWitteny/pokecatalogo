const getSprite = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

function formatId(id) {
  return String(id).padStart(3, '0');
}

function renderTypes(pokemon) {
  return pokemon.types
    .map((type, index) => `<span class="type ${type}">${pokemon.typesPt[index]}</span>`)
    .join('');
}

function createPokemonCard(pokemon) {
  return `
    <a href="detalhes.html?id=${pokemon.id}" class="card-pokemon" data-name="${pokemon.name.toLowerCase()}" data-id="${pokemon.id}">
      <div class="card-img">
        <img src="${getSprite(pokemon.id)}" alt="${pokemon.name}">
      </div>
      <div class="card-info">
        <span class="pokemon-id">Nº ${formatId(pokemon.id)}</span>
        <h3>${pokemon.name}</h3>
        <div class="card-types">${renderTypes(pokemon)}</div>
      </div>
    </a>
  `;
}

function renderCatalog() {
  const list = document.getElementById('pokemonList');
  if (!list) return;

  list.innerHTML = POKEMONS.map(createPokemonCard).join('');

  const form = document.getElementById('searchForm');
  const input = document.getElementById('searchInput');
  const empty = document.getElementById('emptyState');

  function filterCards() {
    const term = input.value.trim().toLowerCase();
    let visible = 0;

    document.querySelectorAll('.card-pokemon').forEach((card) => {
      const name = card.dataset.name;
      const id = card.dataset.id;
      const shouldShow = name.includes(term) || id.includes(term);
      card.style.display = shouldShow ? '' : 'none';
      if (shouldShow) visible++;
    });

    if (empty) empty.hidden = visible !== 0;
  }

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    filterCards();
  });

  input?.addEventListener('input', filterCards);
}

function renderDetails() {
  const detailCard = document.getElementById('detailCard');
  if (!detailCard) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id')) || 1;
  const pokemon = POKEMONS.find((item) => item.id === id) || POKEMONS[0];

  const maxStat = 120;
  const statsHtml = Object.entries(pokemon.stats).map(([name, value]) => {
    const width = Math.min(100, Math.round((value / maxStat) * 100));
    return `
      <div class="stat-row">
        <strong>${name}</strong>
        <div class="stat-bar"><span style="width:${width}%"></span></div>
        <span>${value}</span>
      </div>
    `;
  }).join('');

  detailCard.innerHTML = `
    <div class="detail-top">
      <div class="detail-title">
        <div>
          <span class="pokemon-id">Nº ${formatId(pokemon.id)}</span>
          <h1>${pokemon.name}</h1>
        </div>
        <div class="card-types">${renderTypes(pokemon)}</div>
      </div>
      <div class="detail-image">
        <img src="${getSprite(pokemon.id)}" alt="${pokemon.name}">
      </div>
    </div>

    <div class="detail-info">
      <h2>Status</h2>
      <p class="description">${pokemon.description}</p>
      <div class="stats">${statsHtml}</div>
    </div>
  `;

  const index = POKEMONS.findIndex((item) => item.id === pokemon.id);
  const prev = POKEMONS[(index - 1 + POKEMONS.length) % POKEMONS.length];
  const next = POKEMONS[(index + 1) % POKEMONS.length];

  const prevLink = document.getElementById('prevPokemon');
  const nextLink = document.getElementById('nextPokemon');

  if (prevLink) {
    prevLink.href = `detalhes.html?id=${prev.id}`;
    prevLink.textContent = `← ${prev.name}`;
  }

  if (nextLink) {
    nextLink.href = `detalhes.html?id=${next.id}`;
    nextLink.textContent = `${next.name} →`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  renderDetails();
});
