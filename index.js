fetch(
  'https://www.rijksmuseum.nl/api/nl/collection?toppieces=True&key=Q03BAT0l&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614'
)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    return data.artObjects.forEach((artObject) => {
      let gallery = document.getElementById('gallery');
      let img = document.createElement('img');
      let linkElement = document.createElement('a');

      linkElement.href = `./pages/${artObject.id}.html`;

      img.classList.add('artObject');
      img.src = artObject.webImage.url;

      linkElement.appendChild(img);
      gallery.appendChild(linkElement);
    });
  });
