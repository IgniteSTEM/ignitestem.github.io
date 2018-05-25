var gridData = {
    columns: 3,
    textColor: "white",
    openNewWindow: true,
    data: []
}

// Preload images for performance — also forces top images to load first
var preloadImage = function(url) {
    const img = new Image();
    img.src = url;
};


// Populate grid data from resourcesData object
// Prepares the gridData object
for (var i = 0; i < resourcesData.length; i++) {
    var currentResource = resourcesData[i];

    var projectURL = currentResource.slug.replace("{{ site.baseurl }}", "http://khou22.github.io");
    // preloadImage(currentResource.image); // Preload image for better UX

    var gridItem = {
        title: currentResource.name,
        subtitle: currentResource.subtitle,
        description: currentResource.description,
        image: currentResource.image,
        link: projectURL,
        size: "1",
        category: {
            label: currentResource.category,
            color: currentResource.categoryColor
        }
    }

    gridData.data.push(gridItem); // Add to data
}
