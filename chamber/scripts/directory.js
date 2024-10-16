// Fetch member data and display it
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}

// Display members based on view mode
function displayMembers(members) {
    const directory = document.getElementById('member-directory');
    directory.innerHTML = ''; // Clear previous content
    
    members.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('card');
        
        memberElement.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.membershipLevel}</p>
        `;
        
        directory.appendChild(memberElement);
    });
}

// Toggle between Grid and List views
function setupViewToggle() {
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');
    const directory = document.getElementById('member-directory');

    gridViewButton.addEventListener('click', () => {
        gridViewButton.classList.add('active');
        listViewButton.classList.remove('active');
        directory.classList.add('grid-view');
        directory.classList.remove('list-view');
        displayMembersAsCards();
    });

    listViewButton.addEventListener('click', () => {
        listViewButton.classList.add('active');
        gridViewButton.classList.remove('active');
        directory.classList.remove('grid-view');
        directory.classList.add('list-view');
        displayMembersAsList();
    });
}

// Display members in card format (Grid View)
function displayMembersAsCards() {
    fetchMembers(); // Fetch data and display as cards
}

// Display members in list format (List View)
function displayMembersAsList() {
    const directory = document.getElementById('member-directory');
    directory.innerHTML = ''; // Clear previous content

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            data.members.forEach(member => {
                const listItem = document.createElement('div');
                listItem.classList.add('list-item');
                
                listItem.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>Phone: ${member.phone}</p>
                    <a href="${member.website}" target="_blank">${member.website}</a>
                    <img src="images/${member.image}" alt="${member.name}">
                `;
                
                directory.appendChild(listItem);
            });
        });
}

// Initialize directory view and fetch data
window.addEventListener('DOMContentLoaded', () => {
    setupViewToggle();
    displayMembersAsCards(); // Default view
});
