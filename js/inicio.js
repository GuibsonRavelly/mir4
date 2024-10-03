document.getElementById('hamburger').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});


////// carosel



const characters = [
    {
        name: "Personagem 1",
        abilities: "Habilidade 1, Habilidade 2, Habilidade 3",
        image: "./src/character1.jpg"
    },
    {
        name: "Personagem 2",
        abilities: "Habilidade 1, Habilidade 2, Habilidade 3",
        image: "./src/character2.jpg"
    },
    {
        name: "Personagem 3",
        abilities: "Habilidade 1, Habilidade 2, Habilidade 3",
        image: "./src/character3.jpg"
    },
    {
        name: "Personagem 4",
        abilities: "Habilidade 1, Habilidade 2, Habilidade 3",
        image: "./src/character4.jpg"
    },
    {
        name: "Personagem 5",
        abilities: "Habilidade 1, Habilidade 2, Habilidade 3",
        image: "./src/character5.jpg"
    },
    {
        name: "Personagem 6",
        abilities: "Habilidade 1, Habilidade 2, Habilidade 3",
        image: "./src/character6.jpg"
    },
];

function showCharacter(index) {
    const character = characters[index - 1]; // index - 1 para acessar o array corretamente
    document.getElementById("character-name").innerText = character.name;
    document.getElementById("character-abilities").innerText = character.abilities;
}

