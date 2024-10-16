// links.js

const baseURL = "https://Igberry.github.io/wdd230/"; // Replace with your GitHub Pages URL
const linksURL = `${baseURL}data/links.json`; // Path to your links.json file

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById('learning-activity-links');
    weeks.forEach(week => {
        const weekDiv = document.createElement('div');
        weekDiv.innerHTML = `<h3>${week.week}</h3>`; // Display week number
        week.links.forEach(link => {
            const a = document.createElement('a');
            a.href = `${baseURL}${link.url}`; // Create link
            a.textContent = link.title; // Link title
            weekDiv.appendChild(a);
            weekDiv.appendChild(document.createElement('br')); // Add line break
        });
        linksContainer.appendChild(weekDiv); // Append weekDiv to linksContainer
    });
}

// Call the function to fetch and display links when the script loads
getLinks();
