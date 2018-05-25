var gridData = {
  columns: 4,
  textColor: "white",
  modal: true,
  openNewWindow: true,
  data: []
}

for (var i = 0; i < albumData.length; i++) {
    var currentImage = albumData[i];

    var gridItem = {
        image: currentImage['image'],
        link: currentImage['id'],
        size: "1",
    }

    gridData.data.push(gridItem); // Add to data
}
