// Data for FIFA 24 featured players
const players = [
    {
        name: "Lionel Messi",
        role: "Forward, Inter Miami CF",
        image: "messi.jpg",
        description: "One of the greatest football players of all time, Messi continues to dazzle with his exceptional playmaking and goal-scoring ability."
    },
    {
        name: "Kylian Mbappé",
        role: "Forward, Paris Saint-Germain",
        image: "mbappe.jpg",
        description: "With blistering speed and sharp technical skills, Mbappé is among the top players of the current generation, known for his incredible agility."
    },
    {
        name: "Cristiano Ronaldo",
        role: "Forward, Manchester City",
        image: "Ronaldo.jpg",
        description: "Haaland is a dominant force in world football, boasting unmatched strength and a knack for finding the back of the net."
    },
    {
        name: "Neymar da Silva Santos Júnior",
        role: "Forward, Real Madrid",
        image: "Neymar.jpg",
        description: "Known for his dribbling and flair, Vinícius is one of the most exciting talents in world football, with the ability to change a game in an instant."
    },
    {
        name: "Kevin De Bruyne",
        role: "Midfielder, Manchester City",
        image: "mbappe.jpg",
        description: "De Bruyne is considered one of the best midfielders in the world, known for his precision passing, vision, and leadership on the field."
    },
    {
        name: "Kevin De Bruyne",
        role: "Midfielder, Manchester City",
        image: "mbappe.jpg",
        description: "De Bruyne is considered one of the best midfielders in the world, known for his precision passing, vision, and leadership on the field."
    }
];

// Dynamically generate player cards
window.addEventListener('DOMContentLoaded', () => {
    const playersGrid = document.getElementById('players-grid');

    players.forEach(player => {
        // Create a card for each player
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');

        // Populate the card with player details
        playerCard.innerHTML = `
            <img src="${player.image}" alt="${player.name}">
            <div class="player-info">
                <h3>${player.name}</h3>
                <p><strong>${player.role}</strong></p>
                <p>${player.description}</p>
            </div>
        `;

        // Append the card to the grid
        playersGrid.appendChild(playerCard);
    });
});
