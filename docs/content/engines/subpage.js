// Update Content
function onHashChange() {
    var hash = window.location.hash.substring(1);

    subpage = hash.split('?')[1]

    // Load New Content
    var defaultPage = subpage;
    loadPage("descriptionContainer", "content/engines/descriptions/" + defaultPage + ".html");
}

window.addEventListener("hashchange", onHashChange);