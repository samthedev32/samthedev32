// Function to generate and append cards to the container
function generateCards(containerId, projectList) {
    var container = document.getElementById(containerId);

    projectList.forEach(element => {
        // Create a card element
        var card = document.createElement('div');
        card.className = 'card';

        // Customize the content or appearance of the card here
        var cardContent = document.createTextNode(element);
        card.appendChild(cardContent);

        // Append the card to the container
        container.appendChild(card);
    });

    if (container.childElementCount === 0) {
        // Display a message or set a default content
        container.innerHTML = '<h1>No projects are posted yet.</h1>';
    }
}

var projects = []

generateCards('cards', projects);