// No idea what this is
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Load Content to Page
function loadContent(page) {
    // Fetch content from the server
    fetch("content/" + page + '.html')
        .then(response => response.text())
        .then(content => {
            // Update the content-container with the loaded content
            document.getElementById("content").innerHTML = content;
        })
        .catch(error => console.error('Error fetching content:', error));
}

// Update Content
function onHashChange() {
    var hash = window.location.hash.substr(1);

    var x = document.getElementById("myTopnav");
    var links = x.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }

    var activeLink = document.querySelector('a[href="#' + hash + '"]');
    if (activeLink) {
        activeLink.classList.add("active");
    }

    // Initial call to load content based on the current hash or a default page

    var initialHash = window.location.hash.substr(1);
    var defaultPage = initialHash || 'about';
    loadContent(defaultPage);
}

window.addEventListener("hashchange", onHashChange);

var initialHash = window.location.hash.substr(1);
window.location.hash = window.location.hash || "#about"
onHashChange()