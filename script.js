/* =========================================================
   POKEMON NEXUS
   PROFESSIONAL JAVASCRIPT
========================================================= */

const API_URL = "https://pokeapi.co/api/v2/pokemon/";
const SPECIES_URL = "https://pokeapi.co/api/v2/pokemon-species/";

let currentPokemon = null;
let currentSpecies = null;
let currentIsShiny = false;


/* =========================================================
   DOM ELEMENTS
========================================================= */

const searchForm = document.getElementById("searchForm");
const pokemonInput = document.getElementById("pokemonInput");

const statusBox = document.getElementById("status");

const pokemonArea = document.getElementById("pokemonArea");
const emptyState = document.getElementById("emptyState");
const loading = document.getElementById("loading");

const pokemonImage = document.getElementById("pokemonImage");
const pokemonId = document.getElementById("pokemonId");
const pokemonName = document.getElementById("pokemonName");
const pokemonSubtitle = document.getElementById("pokemonSubtitle");

const pokemonHeight = document.getElementById("pokemonHeight");
const pokemonWeight = document.getElementById("pokemonWeight");
const baseExperience = document.getElementById("baseExperience");

const pokemonType = document.getElementById("pokemonType");
const abilities = document.getElementById("abilities");

const statsContainer = document.getElementById("statsContainer");

const totalStats = document.getElementById("totalStats");
const averageStats = document.getElementById("averageStats");
const highestStat = document.getElementById("highestStat");
const lowestStat = document.getElementById("lowestStat");

const powerScore = document.getElementById("powerScore");
const scoreCircle = document.getElementById("scoreCircle");

const radarGrid = document.getElementById("radarGrid");
const radarData = document.getElementById("radarData");

const weaknesses = document.getElementById("weaknesses");
const resistances = document.getElementById("resistances");
const immunities = document.getElementById("immunities");

const detailsPanel = document.getElementById("detailsPanel");

const description = document.getElementById("description");
const generation = document.getElementById("generation");
const habitat = document.getElementById("habitat");
const captureRate = document.getElementById("captureRate");
const happiness = document.getElementById("happiness");
const growthRate = document.getElementById("growthRate");
const genderRatio = document.getElementById("genderRatio");
const eggGroups = document.getElementById("eggGroups");
const speciesColor = document.getElementById("speciesColor");

const evolutionChain = document.getElementById("evolutionChain");

const historyList = document.getElementById("historyList");
const favoritesList = document.getElementById("favoritesList");

const comparePanel = document.getElementById("comparePanel");
const compareInput = document.getElementById("compareInput");
const compareResult = document.getElementById("compareResult");

const apiPanel = document.getElementById("apiPanel");
const apiResponse = document.getElementById("apiResponse");

const apiStatus = document.getElementById("apiStatus");

const badges = document.getElementById("badges");

const searchCount = document.getElementById("searchCount");
const favoriteCount = document.getElementById("favoriteCount");
const compareCount = document.getElementById("compareCount");


/* =========================================================
   BUTTONS
========================================================= */

const randomBtn = document.getElementById("randomBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");
const cryBtn = document.getElementById("cryBtn");
const spriteBtn = document.getElementById("spriteBtn");
const compareBtn = document.getElementById("compareBtn");
const refreshBtn = document.getElementById("refreshBtn");

const detailsBtn = document.getElementById("detailsBtn");

const clearHistoryBtn =
    document.getElementById("clearHistoryBtn");

const clearFavoritesBtn =
    document.getElementById("clearFavoritesBtn");

const compareSearchBtn =
    document.getElementById("compareSearchBtn");


/* =========================================================
   TYPE COLORS
========================================================= */

const typeColors = {

    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"

};


/* =========================================================
   TYPE EFFECTIVENESS
========================================================= */

const typeChart = {

    normal: {
        weak: ["fighting"],
        resist: [],
        immune: ["ghost"]
    },

    fire: {
        weak: ["water", "ground", "rock"],
        resist: [
            "fire",
            "grass",
            "ice",
            "bug",
            "steel",
            "fairy"
        ],
        immune: []
    },

    water: {
        weak: ["electric", "grass"],
        resist: [
            "fire",
            "water",
            "ice",
            "steel"
        ],
        immune: []
    },

    electric: {
        weak: ["ground"],
        resist: [
            "electric",
            "flying",
            "steel"
        ],
        immune: []
    },

    grass: {
        weak: [
            "fire",
            "ice",
            "poison",
            "flying",
            "bug"
        ],
        resist: [
            "water",
            "electric",
            "grass",
            "ground"
        ],
        immune: []
    },

    ice: {
        weak: [
            "fire",
            "fighting",
            "rock",
            "steel"
        ],
        resist: ["ice"],
        immune: []
    },

    fighting: {
        weak: [
            "flying",
            "psychic",
            "fairy"
        ],
        resist: [
            "bug",
            "rock",
            "dark"
        ],
        immune: []
    },

    poison: {
        weak: [
            "ground",
            "psychic"
        ],
        resist: [
            "grass",
            "fighting",
            "poison",
            "bug",
            "fairy"
        ],
        immune: []
    },

    ground: {
        weak: [
            "water",
            "grass",
            "ice"
        ],
        resist: [
            "poison",
            "rock"
        ],
        immune: ["electric"]
    },

    flying: {
        weak: [
            "electric",
            "ice",
            "rock"
        ],
        resist: [
            "grass",
            "fighting",
            "bug"
        ],
        immune: ["ground"]
    },

    psychic: {
        weak: [
            "bug",
            "ghost",
            "dark"
        ],
        resist: [
            "fighting",
            "psychic"
        ],
        immune: []
    },

    bug: {
        weak: [
            "fire",
            "flying",
            "rock"
        ],
        resist: [
            "grass",
            "fighting",
            "ground"
        ],
        immune: []
    },

    rock: {
        weak: [
            "water",
            "grass",
            "fighting",
            "ground",
            "steel"
        ],
        resist: [
            "normal",
            "fire",
            "poison",
            "flying"
        ],
        immune: []
    },

    ghost: {
        weak: [
            "ghost",
            "dark"
        ],
        resist: [
            "poison",
            "bug"
        ],
        immune: [
            "normal",
            "fighting"
        ]
    },

    dragon: {
        weak: [
            "ice",
            "dragon",
            "fairy"
        ],
        resist: [
            "fire",
            "water",
            "electric",
            "grass"
        ],
        immune: []
    },

    dark: {
        weak: [
            "fighting",
            "bug",
            "fairy"
        ],
        resist: [
            "ghost",
            "dark"
        ],
        immune: ["psychic"]
    },

    steel: {
        weak: [
            "fire",
            "fighting",
            "ground"
        ],
        resist: [
            "normal",
            "grass",
            "ice",
            "flying",
            "psychic",
            "bug",
            "rock",
            "dragon",
            "steel",
            "fairy"
        ],
        immune: ["poison"]
    },

    fairy: {
        weak: [
            "poison",
            "steel"
        ],
        resist: [
            "fighting",
            "bug",
            "dark"
        ],
        immune: ["dragon"]
    }

};


/* =========================================================
   LOAD POKEMON
========================================================= */

async function loadPokemon(nameOrId) {

    if (!nameOrId) {
        return;
    }

    const query = String(nameOrId)
        .trim()
        .toLowerCase();

    showLoading();

    try {

        const response = await fetch(
            API_URL + encodeURIComponent(query)
        );

        if (!response.ok) {
            throw new Error("Pokémon not found");
        }

        const data = await response.json();

        currentPokemon = data;
        currentIsShiny = false;

        displayPokemon(data);

        await loadSpecies(data.id);

        await loadTypeEffectiveness(data.types);

        await loadEvolutionChain();

        addHistory(data.name);

        updateFavoriteButton();

        updateURL(data.name);

        displayHistory();

        displayFavorites();

        apiResponse.textContent =
            JSON.stringify(data, null, 2);

        setStatus(
            `${capitalize(data.name)} successfully loaded.`
        );

    } catch (error) {

        showError(
            "Pokémon not found. Please check the name or ID."
        );

        apiStatus.innerHTML =
            `<span class="status-dot" style="background:#ff5c7a"></span>
             API ERROR`;
    }

}


/* =========================================================
   DISPLAY POKEMON
========================================================= */

function displayPokemon(data) {

    pokemonArea.classList.remove("hidden");

    emptyState.classList.add("hidden");

    loading.classList.add("hidden");

    pokemonId.textContent =
        "#" + String(data.id).padStart(4, "0");

    pokemonName.textContent =
        capitalize(data.name);

    pokemonSubtitle.textContent =
        getPokemonSubtitle(data);

    pokemonHeight.textContent =
        `${(data.height / 10).toFixed(1)} m`;

    pokemonWeight.textContent =
        `${(data.weight / 10).toFixed(1)} kg`;

    baseExperience.textContent =
        data.base_experience ?? "N/A";


    pokemonImage.src =
        data.sprites.other["official-artwork"]
            .front_default;

    pokemonImage.alt =
        data.name;


    displayTypes(data.types);

    displayAbilities(data.abilities);

    displayStats(data.stats);

    displayIntelligence(data.stats);

    displayBadges(data);

    updateTheme(data.types);

    detailsPanel.classList.add("hidden");

    comparePanel.classList.add("hidden");

    apiPanel.classList.add("hidden");

}


/* =========================================================
   SUBTITLE
========================================================= */

function getPokemonSubtitle(data) {

    const height =
        (data.height / 10).toFixed(1);

    const weight =
        (data.weight / 10).toFixed(1);

    return `${data.name} • ${height}m • ${weight}kg`;
}


/* =========================================================
   TYPES
========================================================= */

function displayTypes(types) {

    pokemonType.innerHTML = "";

    types.forEach(item => {

        const typeName =
            item.type.name;

        const span =
            document.createElement("span");

        span.className = "type-pill";

        span.textContent =
            typeName;

        span.style.background =
            typeColors[typeName] || "#64748b";

        pokemonType.appendChild(span);

    });

}


/* =========================================================
   ABILITIES
========================================================= */

function displayAbilities(data) {

    abilities.innerHTML = "";

    data.forEach(item => {

        const ability =
            document.createElement("span");

        ability.className = "ability";

        let text =
            item.ability.name;

        if (item.is_hidden) {

            text += " • Hidden";

        }

        ability.textContent =
            text;

        abilities.appendChild(ability);

    });

}


/* =========================================================
   STATS
========================================================= */

function displayStats(stats) {

    statsContainer.innerHTML = "";

    stats.forEach(item => {

        const statName =
            formatStatName(
                item.stat.name
            );

        const value =
            item.base_stat;

        const row =
            document.createElement("div");

        row.className =
            "stat-row";

        row.innerHTML = `
            <span class="stat-name">
                ${statName}
            </span>

            <div class="stat-track">
                <div
                    class="stat-fill"
                    data-value="${value}"
                ></div>
            </div>

            <span class="stat-value">
                ${value}
            </span>
        `;

        statsContainer.appendChild(row);

    });


    setTimeout(() => {

        document
            .querySelectorAll(".stat-fill")
            .forEach(bar => {

                const value =
                    Number(bar.dataset.value);

                const percent =
                    Math.min(
                        (value / 180) * 100,
                        100
                    );

                bar.style.width =
                    percent + "%";

            });

    }, 100);

}


/* =========================================================
   INTELLIGENCE
========================================================= */

function displayIntelligence(stats) {

    const values =
        stats.map(
            item => item.base_stat
        );

    const total =
        values.reduce(
            (sum, value) =>
                sum + value,
            0
        );

    const average =
        total / values.length;

    const max =
        Math.max(...values);

    const min =
        Math.min(...values);

    const highest =
        stats.find(
            item =>
                item.base_stat === max
        );

    const lowest =
        stats.find(
            item =>
                item.base_stat === min
        );


    totalStats.textContent =
        total;

    averageStats.textContent =
        average.toFixed(1);

    highestStat.textContent =
        `${formatStatName(highest.stat.name)} ${max}`;

    lowestStat.textContent =
        `${formatStatName(lowest.stat.name)} ${min}`;


    const score =
        Math.round(
            Math.min(
                (total / 720) * 100,
                100
            )
        );

    powerScore.textContent =
        score;


    const degree =
        score * 3.6;

    scoreCircle.style.background =
        `conic-gradient(
            var(--cyan) ${degree}deg,
            var(--violet) ${degree}deg,
            rgba(255,255,255,0.06) ${degree}deg
        )`;


    displayRadar(stats);

}


/* =========================================================
   RADAR CHART
========================================================= */

function displayRadar(stats) {

    const values =
        stats.map(
            item => item.base_stat
        );

    const center = 150;

    const radius = 105;

    const points =
        getRadarPoints(
            values,
            center,
            radius
        );

    radarData.setAttribute(
        "points",
        points
    );


    const gridValues =
        [1, 0.75, 0.5, 0.25];

    let gridHTML = "";

    gridValues.forEach(scale => {

        gridHTML +=
            getRadarPoints(
                [100,100,100,100,100,100],
                center,
                radius * scale
            ) + " ";

    });

    const gridPoints =
        getRadarPoints(
            [100,100,100,100,100,100],
            center,
            radius
        );

    radarGrid.setAttribute(
        "points",
        gridPoints
    );

}


/* =========================================================
   RADAR POINT CALCULATION
========================================================= */

function getRadarPoints(
    values,
    center,
    radius
) {

    return values.map(
        (value, index) => {

            const angle =
                (-Math.PI / 2) +
                index *
                ((Math.PI * 2) / 6);

            const scale =
                Math.min(
                    value / 180,
                    1
                );

            const x =
                center +
                Math.cos(angle) *
                radius *
                scale;

            const y =
                center +
                Math.sin(angle) *
                radius *
                scale;

            return `${x},${y}`;

        }
    ).join(" ");

}


/* =========================================================
   TYPE EFFECTIVENESS
========================================================= */

async function loadTypeEffectiveness(types) {

    const multiplier = {};

    types.forEach(typeItem => {

        const type =
            typeItem.type.name;

        const chart =
            typeChart[type];

        if (!chart) {
            return;
        }


        chart.weak.forEach(type => {

            multiplier[type] =
                (multiplier[type] || 1) *
                2;

        });


        chart.resist.forEach(type => {

            multiplier[type] =
                (multiplier[type] || 1) *
                0.5;

        });


        chart.immune.forEach(type => {

            multiplier[type] = 0;

        });

    });


    const weak = [];
    const resist = [];
    const immune = [];


    Object.entries(multiplier)
        .forEach(
            ([type, value]) => {

                if (value === 0) {

                    immune.push(type);

                } else if (value > 1) {

                    weak.push(
                        `${type} ×${value}`
                    );

                } else if (value < 1) {

                    resist.push(
                        `${type} ×${value}`
                    );

                }

            }
        );


    renderEffectList(
        weaknesses,
        weak
    );

    renderEffectList(
        resistances,
        resist
    );

    renderEffectList(
        immunities,
        immune
    );

}


/* =========================================================
   EFFECT LIST
========================================================= */

function renderEffectList(
    container,
    items
) {

    container.innerHTML = "";

    if (!items.length) {

        container.innerHTML =
            `<span class="effect-pill">None</span>`;

        return;
    }


    items.forEach(item => {

        const span =
            document.createElement("span");

        span.className =
            "effect-pill";

        span.textContent =
            item;

        container.appendChild(span);

    });

}


/* =========================================================
   SPECIES
========================================================= */

async function loadSpecies(id) {

    try {

        const response =
            await fetch(
                SPECIES_URL + id
            );

        if (!response.ok) {
            return;
        }

        currentSpecies =
            await response.json();

        displaySpecies(
            currentSpecies
        );

    } catch (error) {

        console.log(
            "Species error:",
            error
        );

    }

}


/* =========================================================
   DISPLAY SPECIES
========================================================= */

function displaySpecies(data) {

    const entry =
        data.flavor_text_entries
            .find(
                item =>
                    item.language.name === "en"
            );


    description.textContent =
        entry
            ? cleanDescription(
                entry.flavor_text
            )
            : "No description available.";


    generation.textContent =
        formatGeneration(
            data.generation?.name
        );


    habitat.textContent =
        data.habitat?.name ||
        "Unknown";


    captureRate.textContent =
        data.capture_rate ??
        "Unknown";


    happiness.textContent =
        data.base_happiness ??
        "Unknown";


    growthRate.textContent =
        data.growth_rate?.name ||
        "Unknown";


    speciesColor.textContent =
        data.color?.name ||
        "Unknown";


    eggGroups.textContent =
        data.egg_groups
            .map(
                group =>
                    group.name
            )
            .join(", ") ||
        "Unknown";


    genderRatio.textContent =
        getGenderRatio(
            data.gender_rate
        );

}


/* =========================================================
   GENDER RATIO
========================================================= */

function getGenderRatio(rate) {

    if (rate === -1) {

        return "Genderless";

    }

    const female =
        (rate / 8) * 100;

    const male =
        100 - female;

    return `♂ ${male.toFixed(1)}% / ♀ ${female.toFixed(1)}%`;

}


/* =========================================================
   EVOLUTION CHAIN
========================================================= */

async function loadEvolutionChain() {

    if (!currentSpecies?.evolution_chain?.url) {

        evolutionChain.textContent =
            "Evolution data unavailable.";

        return;
    }


    try {

        const response =
            await fetch(
                currentSpecies.evolution_chain.url
            );

        const data =
            await response.json();


        const names = [];

        collectEvolutionNames(
            data.chain,
            names
        );


        evolutionChain.innerHTML = "";


        for (
            let i = 0;
            i < names.length;
            i++
        ) {

            const name =
                names[i];


            try {

                const response =
                    await fetch(
                        API_URL + name
                    );

                const pokemon =
                    await response.json();


                const node =
                    document.createElement("div");

                node.className =
                    "evolution-node";

                node.innerHTML = `
                    <img
                        src="${pokemon.sprites.other["official-artwork"].front_default}"
                        alt="${name}"
                    >

                    <strong>
                        ${capitalize(name)}
                    </strong>
                `;

                evolutionChain.appendChild(
                    node
                );


                if (
                    i <
                    names.length - 1
                ) {

                    const arrow =
                        document.createElement("span");

                    arrow.className =
                        "evolution-arrow";

                    arrow.textContent =
                        "→";

                    evolutionChain.appendChild(
                        arrow
                    );

                }

            } catch (error) {

                console.log(
                    "Evolution image error"
                );

            }

        }

    } catch (error) {

        evolutionChain.textContent =
            "Evolution data unavailable.";

    }

}


/* =========================================================
   COLLECT EVOLUTION NAMES
========================================================= */

function collectEvolutionNames(
    chain,
    names
) {

    if (!chain) {
        return;
    }

    names.push(
        chain.species.name
    );

    if (chain.evolves_to) {

        chain.evolves_to.forEach(
            next => {

                collectEvolutionNames(
                    next,
                    names
                );

            }
        );

    }

}


/* =========================================================
   BADGES
========================================================= */

function displayBadges(data) {

    badges.innerHTML = "";

    const badgeList = [];

    const total =
        data.stats.reduce(
            (sum, item) =>
                sum + item.base_stat,
            0
        );


    if (data.is_default) {

        badgeList.push(
            "Official Entry"
        );

    }


    if (total >= 500) {

        badgeList.push(
            "High Stats"
        );

    }


    const speed =
        getStat(
            data,
            "speed"
        );

    const attack =
        getStat(
            data,
            "attack"
        );

    const defense =
        getStat(
            data,
            "defense"
        );


    if (speed >= 100) {

        badgeList.push(
            "Speed Focused"
        );

    }


    if (attack >= 100) {

        badgeList.push(
            "Attack Focused"
        );

    }


    if (defense >= 100) {

        badgeList.push(
            "Defensive"
        );

    }


    if (data.types.length >= 2) {

        badgeList.push(
            "Dual Type"
        );

    }


    badgeList.forEach(
        text => {

            const badge =
                document.createElement("span");

            badge.className =
                "pokemon-badge";

            badge.textContent =
                text;

            badges.appendChild(
                badge
            );

        }
    );

}


/* =========================================================
   FAVORITES
========================================================= */

function getFavorites() {

    return JSON.parse(
        localStorage.getItem(
            "pokemonFavorites"
        ) || "[]"
    );

}


function saveFavorites(list) {

    localStorage.setItem(
        "pokemonFavorites",
        JSON.stringify(list)
    );

}


function toggleFavorite() {

    if (!currentPokemon) {
        return;
    }


    let favorites =
        getFavorites();


    const exists =
        favorites.includes(
            currentPokemon.name
        );


    if (exists) {

        favorites =
            favorites.filter(
                name =>
                    name !==
                    currentPokemon.name
            );

        setStatus(
            "Removed from favorites."
        );

    } else {

        favorites.unshift(
            currentPokemon.name
        );

        setStatus(
            "Added to favorites."
        );

    }


    saveFavorites(
        favorites
    );

    updateFavoriteButton();

    displayFavorites();

    updateCounters();

}


function updateFavoriteButton() {

    if (!currentPokemon) {
        return;
    }

    const favorites =
        getFavorites();

    const exists =
        favorites.includes(
            currentPokemon.name
        );


    favoriteBtn.textContent =
        exists
            ? "♥ Favorited"
            : "♡ Favorite";

}


/* =========================================================
   DISPLAY FAVORITES
========================================================= */

function displayFavorites() {

    const favorites =
        getFavorites();

    favoritesList.innerHTML = "";


    if (!favorites.length) {

        favoritesList.innerHTML =
            `<div class="no-data">
                No favorite Pokémon yet.
            </div>`;

        return;
    }


    favorites.forEach(
        name => {

            const item =
                document.createElement("div");

            item.className =
                "list-item";

            item.innerHTML = `
                <span>
                    ${capitalize(name)}
                </span>

                <button
                    data-remove="${name}"
                >
                    ×
                </button>
            `;


            item
                .querySelector("span")
                .addEventListener(
                    "click",
                    () => loadPokemon(name)
                );


            item
                .querySelector("button")
                .addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        removeFavorite(name);

                    }
                );


            favoritesList.appendChild(
                item
            );

        }
    );

}


/* =========================================================
   REMOVE FAVORITE
========================================================= */

function removeFavorite(name) {

    const favorites =
        getFavorites()
            .filter(
                item =>
                    item !== name
            );

    saveFavorites(
        favorites
    );

    displayFavorites();

    updateFavoriteButton();

    updateCounters();

}


/* =========================================================
   HISTORY
========================================================= */

function getHistory() {

    return JSON.parse(
        localStorage.getItem(
            "pokemonHistory"
        ) || "[]"
    );

}


function addHistory(name) {

    let history =
        getHistory();


    history =
        history.filter(
            item =>
                item !== name
        );


    history.unshift(
        name
    );


    history =
        history.slice(
            0,
            10
        );


    localStorage.setItem(
        "pokemonHistory",
        JSON.stringify(history)
    );

}


/* =========================================================
   DISPLAY HISTORY
========================================================= */

function displayHistory() {

    const history =
        getHistory();

    historyList.innerHTML = "";


    if (!history.length) {

        historyList.innerHTML =
            `<div class="no-data">
                No search history yet.
            </div>`;

        return;
    }


    history.forEach(
        name => {

            const item =
                document.createElement("div");

            item.className =
                "list-item";


            item.innerHTML = `
                <span>
                    ${capitalize(name)}
                </span>

                <small>
                    ↗
                </small>
            `;


            item.addEventListener(
                "click",
                () =>
                    loadPokemon(name)
            );


            historyList.appendChild(
                item
            );

        }
    );

}


/* =========================================================
   RANDOM
========================================================= */

function randomPokemon() {

    const id =
        Math.floor(
            Math.random() * 1025
        ) + 1;

    loadPokemon(id);

}


/* =========================================================
   COPY
========================================================= */

async function copyPokemonInfo() {

    if (!currentPokemon) {
        return;
    }


    const types =
        currentPokemon.types
            .map(
                item =>
                    item.type.name
            )
            .join(", ");


    const text = `
Pokémon: ${capitalize(currentPokemon.name)}
ID: #${currentPokemon.id}
Type: ${types}
Height: ${(currentPokemon.height / 10).toFixed(1)} m
Weight: ${(currentPokemon.weight / 10).toFixed(1)} kg
Base Experience: ${currentPokemon.base_experience}

Stats:
${currentPokemon.stats
    .map(
        item =>
            `${formatStatName(item.stat.name)}: ${item.base_stat}`
    )
    .join("\n")}
    `;


    try {

        await navigator.clipboard.writeText(
            text.trim()
        );

        setStatus(
            "Pokémon information copied."
        );

    } catch {

        setStatus(
            "Copy is not supported by this browser."
        );

    }

}


/* =========================================================
   SHARE
========================================================= */

async function sharePokemon() {

    if (!currentPokemon) {
        return;
    }


    const url =
        `${location.origin}${location.pathname}?pokemon=${currentPokemon.name}`;


    if (navigator.share) {

        try {

            await navigator.share({

                title:
                    `Pokémon Nexus - ${capitalize(currentPokemon.name)}`,

                text:
                    `Explore ${capitalize(currentPokemon.name)} on Pokémon Nexus.`,

                url

            });

        } catch {

            return;

        }

    } else {

        try {

            await navigator.clipboard.writeText(
                url
            );

            setStatus(
                "Pokémon link copied."
            );

        } catch {

            setStatus(
                "Unable to copy link."
            );

        }

    }

}


/* =========================================================
   CRY
========================================================= */

function playCry() {

    if (!currentPokemon) {
        return;
    }


    const cry =
        currentPokemon.cries?.latest ||
        currentPokemon.cries?.legacy;


    if (!cry) {

        setStatus(
            "Cry is not available."
        );

        return;
    }


    const audio =
        new Audio(cry);

    audio.play();

    setStatus(
        "Playing Pokémon cry..."
    );

}


/* =========================================================
   SHINY
========================================================= */

function toggleShiny() {

    if (!currentPokemon) {
        return;
    }


    currentIsShiny =
        !currentIsShiny;


    const normal =
        currentPokemon
            .sprites
            .other["official-artwork"]
            .front_default;


    const shiny =
        currentPokemon
            .sprites
            .other["official-artwork"]
            .front_shiny;


    pokemonImage.src =
        currentIsShiny
            ? shiny || normal
            : normal;


    spriteBtn.textContent =
        currentIsShiny
            ? "◉ Normal"
            : "✨ Shiny";


    setStatus(
        currentIsShiny
            ? "Shiny artwork activated."
            : "Normal artwork activated."
    );

}


/* =========================================================
   REFRESH
========================================================= */

function refreshPokemon() {

    if (!currentPokemon) {
        loadPokemon("pikachu");
        return;
    }

    loadPokemon(
        currentPokemon.name
    );

}


/* =========================================================
   DETAILS
========================================================= */

function toggleDetails() {

    if (!currentPokemon) {
        return;
    }


    detailsPanel.classList.toggle(
        "hidden"
    );


    if (
        !detailsPanel.classList.contains(
            "hidden"
        )
    ) {

        detailsPanel.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =========================================================
   COMPARE
========================================================= */

function openCompare() {

    comparePanel.classList.toggle(
        "hidden"
    );


    if (
        !comparePanel.classList.contains(
            "hidden"
        )
    ) {

        compareInput.focus();

        comparePanel.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =========================================================
   COMPARE POKEMON
========================================================= */

async function comparePokemon() {

    if (!currentPokemon) {
        return;
    }


    const query =
        compareInput.value
            .trim()
            .toLowerCase();


    if (!query) {

        setStatus(
            "Enter a Pokémon to compare."
        );

        return;
    }


    try {

        setStatus(
            "Loading comparison..."
        );


        const response =
            await fetch(
                API_URL +
                encodeURIComponent(query)
            );


        if (!response.ok) {

            throw new Error(
                "Pokemon not found"
            );

        }


        const second =
            await response.json();


        renderComparison(
            currentPokemon,
            second
        );


        let count =
            Number(
                localStorage.getItem(
                    "compareCount"
                ) || 0
            );


        count++;


        localStorage.setItem(
            "compareCount",
            count
        );


        updateCounters();


        setStatus(
            "Comparison completed."
        );


    } catch {

        compareResult.innerHTML =
            `<div class="no-data">
                Pokémon not found.
            </div>`;

    }

}


/* =========================================================
   COMPARISON TABLE
========================================================= */

function renderComparison(
    first,
    second
) {

    const firstStats =
        getStatsObject(first);

    const secondStats =
        getStatsObject(second);


    compareResult.innerHTML = `

        <table class="compare-table">

            <thead>

                <tr>

                    <th>Metric</th>

                    <th>
                        ${capitalize(first.name)}
                    </th>

                    <th>
                        ${capitalize(second.name)}
                    </th>

                </tr>

            </thead>

            <tbody>

                <tr>
                    <td>Height</td>
                    <td>${(first.height / 10).toFixed(1)} m</td>
                    <td>${(second.height / 10).toFixed(1)} m</td>
                </tr>

                <tr>
                    <td>Weight</td>
                    <td>${(first.weight / 10).toFixed(1)} kg</td>
                    <td>${(second.weight / 10).toFixed(1)} kg</td>
                </tr>

                <tr>
                    <td>HP</td>
                    <td>${firstStats.hp}</td>
                    <td>${secondStats.hp}</td>
                </tr>

                <tr>
                    <td>Attack</td>
                    <td>${firstStats.attack}</td>
                    <td>${secondStats.attack}</td>
                </tr>

                <tr>
                    <td>Defense</td>
                    <td>${firstStats.defense}</td>
                    <td>${secondStats.defense}</td>
                </tr>

                <tr>
                    <td>Sp. Attack</td>
                    <td>${firstStats.specialAttack}</td>
                    <td>${secondStats.specialAttack}</td>
                </tr>

                <tr>
                    <td>Sp. Defense</td>
                    <td>${firstStats.specialDefense}</td>
                    <td>${secondStats.specialDefense}</td>
                </tr>

                <tr>
                    <td>Speed</td>
                    <td>${firstStats.speed}</td>
                    <td>${secondStats.speed}</td>
                </tr>

                <tr>
                    <td>Total</td>
                    <td>${getTotalStats(first)}</td>
                    <td>${getTotalStats(second)}</td>
                </tr>

            </tbody>

        </table>

    `;

}


/* =========================================================
   STATS OBJECT
========================================================= */

function getStatsObject(data) {

    const result = {

        hp: 0,
        attack: 0,
        defense: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0

    };


    data.stats.forEach(item => {

        const name =
            item.stat.name;


        if (name === "hp") {

            result.hp =
                item.base_stat;

        }

        if (name === "attack") {

            result.attack =
                item.base_stat;

        }

        if (name === "defense") {

            result.defense =
                item.base_stat;

        }

        if (
            name ===
            "special-attack"
        ) {

            result.specialAttack =
                item.base_stat;

        }

        if (
            name ===
            "special-defense"
        ) {

            result.specialDefense =
                item.base_stat;

        }

        if (name === "speed") {

            result.speed =
                item.base_stat;

        }

    });


    return result;

}


/* =========================================================
   TOTAL STATS
========================================================= */

function getTotalStats(data) {

    return data.stats.reduce(
        (sum, item) =>
            sum + item.base_stat,
        0
    );

}


/* =========================================================
   API PANEL
========================================================= */

function toggleAPI() {

    apiPanel.classList.toggle(
        "hidden"
    );

    if (
        !apiPanel.classList.contains(
            "hidden"
        )
    ) {

        apiPanel.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =========================================================
   HISTORY CLEAR
========================================================= */

function clearHistory() {

    localStorage.removeItem(
        "pokemonHistory"
    );

    displayHistory();

    updateCounters();

    setStatus(
        "Search history cleared."
    );

}


/* =========================================================
   FAVORITES CLEAR
========================================================= */

function clearFavorites() {

    localStorage.removeItem(
        "pokemonFavorites"
    );

    displayFavorites();

    updateFavoriteButton();

    updateCounters();

    setStatus(
        "Favorites cleared."
    );

}


/* =========================================================
   URL
========================================================= */

function updateURL(name) {

    const url =
        new URL(
            window.location.href
        );

    url.searchParams.set(
        "pokemon",
        name
    );

    history.replaceState(
        {},
        "",
        url
    );

}


/* =========================================================
   THEME
========================================================= */

function updateTheme(types) {

    const mainType =
        types[0]?.type?.name;

    const color =
        typeColors[mainType] ||
        "#39d7ff";


    document.documentElement.style.setProperty(
        "--cyan",
        color
    );

}


/* =========================================================
   COUNTERS
========================================================= */

function updateCounters() {

    const history =
        getHistory();

    const favorites =
        getFavorites();

    const compares =
        Number(
            localStorage.getItem(
                "compareCount"
            ) || 0
        );


    searchCount.textContent =
        history.length;

    favoriteCount.textContent =
        favorites.length;

    compareCount.textContent =
        compares;

}


/* =========================================================
   SEARCH COUNTER
========================================================= */

function increaseSearchCounter() {

    let count =
        Number(
            localStorage.getItem(
                "totalSearches"
            ) || 0
        );

    count++;

    localStorage.setItem(
        "totalSearches",
        count
    );

}


/* =========================================================
   HELPERS
========================================================= */

function capitalize(text) {

    if (!text) {
        return "";
    }

    return text.charAt(0).toUpperCase() +
        text.slice(1);

}


function formatStatName(name) {

    return name
        .replace(
            "special-attack",
            "Sp. Attack"
        )
        .replace(
            "special-defense",
            "Sp. Defense"
        )
        .replace(
            "attack",
            "Attack"
        )
        .replace(
            "defense",
            "Defense"
        )
        .replace(
            "speed",
            "Speed"
        )
        .replace(
            "hp",
            "HP"
        )
        .replace(
            " ",
            " "
        );

}


function getStat(data, statName) {

    const stat =
        data.stats.find(
            item =>
                item.stat.name ===
                statName
        );

    return stat
        ? stat.base_stat
        : 0;

}


function formatGeneration(name) {

    if (!name) {
        return "Unknown";
    }

    return name
        .replace(
            "generation-",
            "Generation "
        )
        .toUpperCase();

}


function cleanDescription(text) {

    return text
        .replace(/\n/g, " ")
        .replace(/\f/g, " ");

}


/* =========================================================
   STATUS
========================================================= */

function setStatus(message) {

    statusBox.textContent =
        message;

}


/* =========================================================
   LOADING
========================================================= */

function showLoading() {

    loading.classList.remove(
        "hidden"
    );

    emptyState.classList.add(
        "hidden"
    );

    pokemonArea.classList.add(
        "hidden"
    );

    setStatus(
        "Fetching Pokémon data..."
    );

}


/* =========================================================
   ERROR
========================================================= */

function showError(message) {

    loading.classList.add(
        "hidden"
    );

    pokemonArea.classList.add(
        "hidden"
    );

    emptyState.classList.remove(
        "hidden"
    );


    emptyState.innerHTML = `

        <div class="empty-icon">
            !
        </div>

        <h2>
            Search Error
        </h2>

        <p>
            ${message}
        </p>

        <br>

        <p>
            ✓ Check spelling<br>
            ✓ Try a Pokémon name<br>
            ✓ Try a Pokémon ID
        </p>

    `;


    setStatus(
        message
    );

}


/* =========================================================
   SEARCH EVENT
========================================================= */

searchForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const value =
            pokemonInput.value.trim();

        if (!value) {

            setStatus(
                "Please enter a Pokémon name or ID."
            );

            return;
        }


        increaseSearchCounter();

        loadPokemon(value);

    }
);


/* =========================================================
   QUICK SEARCH
========================================================= */

document
    .querySelectorAll(".quick-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const pokemon =
                    button.dataset.pokemon;

                pokemonInput.value =
                    pokemon;

                loadPokemon(
                    pokemon
                );

            }
        );

    });


/* =========================================================
   BUTTON EVENTS
========================================================= */

randomBtn.addEventListener(
    "click",
    randomPokemon
);

favoriteBtn.addEventListener(
    "click",
    toggleFavorite
);

copyBtn.addEventListener(
    "click",
    copyPokemonInfo
);

shareBtn.addEventListener(
    "click",
    sharePokemon
);

cryBtn.addEventListener(
    "click",
    playCry
);

spriteBtn.addEventListener(
    "click",
    toggleShiny
);

compareBtn.addEventListener(
    "click",
    openCompare
);

refreshBtn.addEventListener(
    "click",
    refreshPokemon
);

detailsBtn.addEventListener(
    "click",
    toggleDetails
);

clearHistoryBtn.addEventListener(
    "click",
    clearHistory
);

clearFavoritesBtn.addEventListener(
    "click",
    clearFavorites
);

compareSearchBtn.addEventListener(
    "click",
    comparePokemon
);


/* =========================================================
   API BUTTON
========================================================= */

const apiButton =
    document.createElement("button");

apiButton.className =
    "tool-btn";

apiButton.textContent =
    "🌐 API JSON";

apiButton.addEventListener(
    "click",
    toggleAPI
);

document
    .querySelector(".toolbar")
    .appendChild(
        apiButton
    );


/* =========================================================
   KEYBOARD SHORTCUTS
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "/" &&
            document.activeElement.tagName !== "INPUT"
        ) {

            event.preventDefault();

            pokemonInput.focus();

        }


        if (
            event.key === "Escape"
        ) {

            pokemonInput.blur();

        }


        if (
            event.key === "Enter" &&
            document.activeElement === compareInput
        ) {

            comparePokemon();

        }

    }
);


/* =========================================================
   INITIAL LOAD
========================================================= */

async function initialLoad() {

    displayHistory();

    displayFavorites();

    updateCounters();


    const params =
        new URLSearchParams(
            window.location.search
        );


    const pokemon =
        params.get("pokemon");


    if (pokemon) {

        pokemonInput.value =
            pokemon;

        await loadPokemon(
            pokemon
        );

    } else {

        await loadPokemon(
            "pikachu"
        );

    }

}


/* =========================================================
   START APPLICATION
========================================================= */

initialLoad();