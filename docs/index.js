const topnav = document.getElementById("TopNav")

// Toggle Hamburger Menu
function toggleMenu() {
    if (topnav.className === "topnav") {
        topnav.className += " responsive";
    } else {
        closeMenu()
    }
}

// Close Hamburger
function closeMenu() {
    topnav.className = "topnav"
}

// Load Content to Page
function loadPage(container, page) {
    var element = document.getElementById(container)
    // Fetch content from the server
    fetch(page)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    return loadPage(container, "404.html")
                } else {
                    throw new Error('Error loading content: ' + response.status);
                }
            }
            return response.text();
        })
        .then(content => {
            if (content) {
                // Update the content
                element.innerHTML = content;

                // Run the scripts
                const scripts = element.querySelectorAll('script');
                scripts.forEach(script => {
                    if (script.src) {
                        // External script with src attribute
                        const newScript = document.createElement('script');
                        newScript.src = script.src;
                        document.head.appendChild(newScript);
                    } else {
                        // Inline script
                        eval(script.innerHTML);
                    }
                });
            }
        })
        .catch(error => console.error('Error fetching content:', error));
}

// Update Content
function onHashChange() {
    var hash = window.location.hash.substr(1);

    var links = topnav.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }

    var activeLink = document.querySelector('a[href="#' + hash + '"]');
    if (activeLink) {
        activeLink.classList.add("active");
    }

    // Close Mobile Menu
    closeMenu()

    // Load New Content
    var initialHash = window.location.hash.substr(1);
    var defaultPage = initialHash || 'about';
    loadPage("content", "content/" + defaultPage + "/" + defaultPage + ".html");
}

window.addEventListener("hashchange", onHashChange);

var initialHash = window.location.hash.substr(1);
window.location.hash = window.location.hash || "#about"
onHashChange()